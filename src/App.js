import {Fragment, useRef} from "react";
import './App.css';
import {Redirect, Route, Switch} from 'react-router-dom';

import Header from "./components/pageTemplate/header";
import Navbar from "./components/pageTemplate/navbar";
import Footer from "./components/pageTemplate/footer";
import Page from "./components/pageTemplate/page";

import {Container} from "react-bootstrap";
import NotFound from "./screens/notFound";
import Panel from "./screens/panel";
import UsePageConstructor from "./hooks/usePageConstructor";
import ipdasStandard from "./engine/ipdasStandard"
import UsePageNavigator from "./hooks/usePageNavigator";
import Summary from "./screens/Summary";

function App() {
    const {pages} = UsePageConstructor()
    const ipdas = ipdasStandard(pages)
    const {progress, previous, next} = UsePageNavigator({pages})
    const divRef = useRef();

    return (
        <>
            {pages?.length > 0 &&
            <Fragment>
                <Container ref={divRef}>
                    <Header/>
                    <Navbar previous={previous} next={next} pages={pages}/>
                    <Page previous={previous} next={next}>
                        <Switch>
                            {pages.map((page, index) =>
                                (
                                    <Route exact path={`/${index}`}>
                                        {page.isSummary ? <Summary/> : <Panel body={page.body}/>}
                                    </Route>
                                )
                            )}
                            <Route path="/not-found" component={NotFound}/>
                            <Redirect from="/" exact to="/0"/>
                            <Redirect to="/not-found"/>
                        </Switch>
                    </Page>
                    <Footer progress={progress}/>
                </Container>
            </Fragment>
            }
        </>
    );
}

export default App;
