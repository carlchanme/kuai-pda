import React, {useContext, useEffect} from 'react';
import {Col} from "react-bootstrap";
import AppContext from "../AppContext";

function SupportingText({md = 12, children, props}) {
    const {textComponent, setDisableSupportingText} = useContext(AppContext);
    useEffect(() => {
        setDisableSupportingText(false)
    })

    if (!textComponent) return null

    return (
        <Col md={md} {...props}>{children}</Col>
    );
}

export default SupportingText;
