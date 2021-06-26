import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {dracula} from "react-syntax-highlighter/dist/cjs/styles/prism";
import React from "react";
import Player from "./player";
import {Table} from "react-bootstrap";
import OptionsTable from "./optionsTable";

const resizeImage = ({alt, src, title}) => {
    return <img alt={alt} src={src} title={title} style={{maxWidth: "100%"}}/>
}

const customTd = (props) => <Table size="sm" striped bordered style={{width:'100%'}}>{props.children}</Table>

export const components = {
    table: customTd,
    img: resizeImage,
    code({node, inline, className, children, ...props}) {
        const matchPlayer = /language-player/.exec(className || '')
        if (!inline && matchPlayer) {
            return (<Player path={children}/>)
        }
        const matchOptionTable = /language-json/.exec(className || '')
        if (!inline && matchOptionTable) {
            const object = JSON.parse(children)
            if(object.type === "optionsTable")
            return (<OptionsTable path={children}/>)

            return (
                <SyntaxHighlighter
                    style={dracula}
                    language={match[1]}
                    PreTag="div"
                    children={String(children).replace(/\n$/, '')} {...props} />
            )
        }
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
            <SyntaxHighlighter
                style={dracula}
                language={match[1]}
                PreTag="div"
                children={String(children).replace(/\n$/, '')} {...props} />
        ) : (
            <code className={className} {...props}>{children}</code>
        )
    }
};