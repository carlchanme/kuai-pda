import React from 'react'
import {useSelector} from "react-redux";
import {getMeta} from "../../store/meta";

const Header = () => {
    const meta = useSelector(getMeta)
    return (
        <header className="clearfix" role="banner">
            <div className="d-none d-sm-block">
                <h1>{meta?.title ?? "Please enter title"}</h1>
                <h4><b>Learning Objectives</b>: {meta?.learningObjective ?? "Please enter learning objectives"}</h4>
            </div>
        </header>
    )
}

export default Header
