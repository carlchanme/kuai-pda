import React from "react";
import {Button, Nav, Navbar} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleLeft, faArrowCircleRight} from "@fortawesome/free-solid-svg-icons";
import {useHistory} from "react-router-dom";

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
                        <FontAwesomeIcon icon={faArrowCircleLeft}/> Previous
                    </Button>}
                    <Nav></Nav>
                    {next && <Button variant="primary" onClick={() => handleNavigation(next)}>
                        Next <FontAwesomeIcon icon={faArrowCircleRight}/>
                    </Button>}
                </Navbar>
            </article>
        </main>
    )
}

export default Page
