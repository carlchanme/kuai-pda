import React from 'react'
import Heading from "./fonts/heading";
import Heading4 from "./fonts/heading4";

const Header = ({title, objective}) => {
    return (
        <header className="clearfix" role="banner">
            <div className="d-none d-sm-block">
                <Heading>{title ?? "Please enter title"}</Heading>
                <Heading4><b>Learning Objectives</b>: {objective ?? "Please enter learning objectives"}</Heading4>
            </div>
        </header>
    )
}

export default Header
