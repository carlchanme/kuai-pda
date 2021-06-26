import React from "react";
import {Button, Nav, Navbar} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {FaArrowCircleRight, FaArrowCircleLeft} from "react-icons/fa"

const Page = ({previous, next, children, ...props}) => {
    const history = useHistory();

    const handleNavigation = path => {
        history.push(path)
    }
    return (
        <main role="main">
            <article className="p-4">
                {children}
                <Navbar className="justify-content-between">
                    {previous && <Button variant="primary my-2" onClick={() => handleNavigation(previous)}>
                        <FaArrowCircleLeft /> Previous
                    </Button>}
                    <Nav></Nav>
                    {next && <Button variant="primary" onClick={() => handleNavigation(next)}>
                        Next <FaArrowCircleRight />
                    </Button>}
                </Navbar>
            </article>
        </main>
    )
}

export default Page
