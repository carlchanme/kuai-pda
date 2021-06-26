import React from 'react'

const Header = ({title, learningObjective}) => {
    return (
        <header className="clearfix" role="banner">
            <div className="d-none d-sm-block">
                <h1>{title ?? "Please enter title"}</h1>
                <h4><b>Learning Objectives</b>: {learningObjective ?? "Please enter learning objectives"}</h4>
            </div>
        </header>
    )
}

export default Header
