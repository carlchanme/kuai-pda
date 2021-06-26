import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import {Col, ProgressBar, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import {getMeta} from "../../store/meta";

const defaultFooter = "footer here" //todo
const defaultAuthor = "author here" //todo
const defaultDeveloper = "developer" //todo
const defaultDateCreated = "-/-/-" //todo
const defaultDateUpdated = "-/-/-" //todo

const Footer = ({progress}) => {
    const meta = useSelector(getMeta)
    return (
        <>
            <ScrollToTop smooth/>
            <footer role="contentinfo">
                <ProgressBar variant="success" now={progress}/>
                <i><span style={{fontSize: 14}}>{meta?.footer ?? defaultFooter}</span></i>
                <br />
                <Row>
                    <Col md={8} className="text-left">
                        <ul>
                            <li><span style={{fontSize: 14}}>Content authors: {meta?.author ?? defaultAuthor}</span></li>
                            <li><span style={{fontSize: 14}}>Developers: {meta?.developer ?? defaultDeveloper}</span></li>
                        </ul>
                    </Col>
                    <Col md={4} className="text-right">
                        <p><span style={{fontSize: 14}}>Released date: {meta?.createdDate ?? defaultDateCreated}</span></p>
                        <p><span style={{fontSize: 14}}>Updated date: {meta?.updatedDate ?? defaultDateUpdated}</span></p>
                    </Col>
                </Row>
            </footer>
        </>
    )
}

export default Footer
