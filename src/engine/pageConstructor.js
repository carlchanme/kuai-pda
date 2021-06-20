import {useCallback, useEffect, useState} from 'react';
import mdFile from "../panels.md";
import _ from "lodash"

function PageConstructor() {
    const [metadata, setMetadata] = useState({})
    const [pages, setPages] = useState([])

    const getInput = useCallback(async () => {
        try {
            const instructionsFile = await fetch(mdFile);
            const text = await instructionsFile.text();
            const {meta, contents} = splitMetaAndPages(text)
            setPages(formatPage(contents))
            setMetadata(formatMeta(meta))
        } catch (err) {
            console.error('Problem reading markdown file', err);
        }
    },[])

    useEffect(() => {
        getInput().then()
    }, [getInput]);

    const splitMetaAndPages = (text) => {
        const splitPage = text.split("---\n\n")
        splitPage.shift()
        const contents = splitPage.splice(1)
        return {meta: splitPage[0], contents: contents}
    }

    const formatPage = (contents) => {
        const summary = {
            title: "Decision Aid Summary",
            isSummary: true,
        }

        const array = contents.map((page) => {
            let title = page.split('\n')[0];
            title = title.replace("# ", "")
            return {
                title: title,
                body: page,
                isSummary: false,
            }
        })
        return [summary, ...array]
    }

    const formatMeta = (meta) => {
        let formattedMeta = {}
        meta.split("\n").forEach((d) => {
            const keyValue = d.split(':-')
            if (!keyValue[0] || !keyValue[1]) return
            const key = _.camelCase(keyValue[0])
            formattedMeta[key] = _.trim(keyValue[1])
        })
        return formattedMeta
    }

    return {pages, metadata}
}

export default PageConstructor;