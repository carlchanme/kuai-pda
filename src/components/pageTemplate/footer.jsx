import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import {Col, ProgressBar, Row} from "react-bootstrap";

const defaultFooter = "footer here" //todo
const defaultAuthor = "author here" //todo
const defaultDeveloper = "developer" //todo
const defaultDateCreated = "11/11/11" //todo
const defaultDateUpdated = "11/11/11" //todo

const Footer = ({progress, author, developer, dateCreated, dateUpdated, footer}) => {
    return (
        <>
            <ScrollToTop smooth/>
            <footer role="contentinfo">
                <ProgressBar variant="success" now={progress}/>
                <i><span style={{fontSize: 14}}>{footer ?? defaultFooter}</span></i>
                <br />
                <Row>
                    <Col md={8} className="text-left">
                        <ul>
                            <li><span style={{fontSize: 14}}>Content authors: {author ?? defaultAuthor}</span></li>
                            <li><span style={{fontSize: 14}}>Developers: {developer ?? defaultDeveloper}</span></li>
                        </ul>
                    </Col>
                    <Col md={4} className="text-right">
                        <p><span style={{fontSize: 14}}>Released date: {dateCreated ?? defaultDateCreated}</span></p>
                        <p><span style={{fontSize: 14}}>Updated date: {dateUpdated ?? defaultDateUpdated}</span></p>
                    </Col>
                </Row>
            </footer>
        </>
    )
}

export default Footer
