import React from 'react';
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import 'katex/dist/katex.min.css'
import rehypeKatex from "rehype-katex";
import {components} from "../components/markdownComponents";

const Panel = (body) => () => {
    return (
        <ReactMarkdown
            remarkPlugins={[[remarkGfm, {singleTilde: false}], remarkMath]}
            rehypePlugins={[rehypeKatex, rehypeRaw]}
            components={components}
            children={body}
        />
    );
}

export default Panel;
