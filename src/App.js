import {Fragment, useRef, useState} from "react";
import './App.css';
import {Redirect, Route, Switch} from 'react-router-dom';

import Header from "./components/pageTemplate/header";
import Navbar from "./components/pageTemplate/navbar";
import Footer from "./components/pageTemplate/footer";
import Page from "./components/pageTemplate/page";

import {Container} from "react-bootstrap";
import NotFound from "./screens/notFound";
import Panel from "./screens/panel";
import PageConstructor from "./engine/pageConstructor";
import PageNavigator from "./engine/pageNavigator";
import Summary from "./screens/Summary";
import AppContext from "./AppContext";
import useResize from "./hooks/useResize";
import ipdasStandard from './engine/ipdasStandard'

function App() {
    const [meta, setMeta] = useState()
    const {pages, metadata} = PageConstructor()
    const standards = ipdasStandard(meta)
    const {progress, previous, next} = PageNavigator({pages})
    const divRef = useRef();
    const maxWidth = useResize(divRef);

    const {title, objective, author, developer, updatedDate, createdDate, footer} = metadata
    return (
        <AppContext.Provider value={{meta, setMeta}}>
            {pages.length > 0 &&
            <Fragment>
                <Container ref={divRef}>
                    <Header title={title} objective={objective}/>
                    <Navbar previous={previous} next={next} pages={pages}/>
                    <Page previous={previous} next={next}>
                        <Switch>
                            {pages.map((page, index) => {
                                return <Route key={index} path={`/${index}`}
                                              component={page.isSummary ? Summary(metadata, standards) : Panel(page.body, maxWidth)}/>
                            })}
                            <Route path="/not-found" component={NotFound}/>
                            <Redirect from="/" exact to="/0"/>
                            <Redirect to="/not-found"/>
                        </Switch>
                    </Page>
                    <Footer
                        progress={progress}
                        author={author}
                        developer={developer}
                        dateCreated={createdDate}
                        dateUpdated={updatedDate}
                        footer={footer}
                    />
                </Container>
            </Fragment>
            }
        </AppContext.Provider>

    );
}

export default App;
