import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowCircleLeft, faArrowCircleRight, faBars, faTimes} from '@fortawesome/free-solid-svg-icons'
import {Button, Collapse, Dropdown, ListGroup, Nav} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const Navbar = ({previous, next, pages}) => {
    const [showList, setShowList] = useState(false)
    const history = useHistory();

    const handleNavigation = path => {
        history.push(path)
        setShowList(false)
    }

    return (
        <>
            <Nav className="d-none d-sm-block">
                <Dropdown className="d-inline mr-2">
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Contents
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {pages.map((page, index) => {
                            return <Dropdown.Item key={index}
                                                  onClick={() => handleNavigation(`/${index}`)}>{page.title}</Dropdown.Item>
                        })}
                    </Dropdown.Menu>
                </Dropdown>
                <Button variant="primary mr-2" disabled={!previous} onClick={() => handleNavigation(previous)}>
                    <FontAwesomeIcon icon={faArrowCircleLeft}/> Previous
                </Button>
                <Button variant="primary mr-2" disabled={!next} onClick={() => handleNavigation(next)}>
                    Next <FontAwesomeIcon icon={faArrowCircleRight}/>
                </Button>
            </Nav>
            <div className="d-block d-sm-none" id="small_screen_menu_container">
                <p>
                    <Button className="btn-block" onClick={() => setShowList(!showList)}>
                        Toggle Navigation &nbsp;&nbsp;{showList ? <FontAwesomeIcon icon={faTimes}/> :
                        <FontAwesomeIcon icon={faBars}/>}
                    </Button>
                </p>
                <Collapse in={showList}>
                    <ListGroup>
                        {pages.map(({title}, index) => (
                            <ListGroup.Item key={index} className="my-1" variant="primary" action
                                            onClick={() => handleNavigation(`/${index}`)}>{title}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Collapse>
            </div>
        </>
    )
}

export default Navbar
