import React from 'react';
import { Login } from './views/Login';
import {Home} from './views/Home';
import {Route, Routes, Navigate, BrowserRouter} from 'react-router-dom';
import Navbar from "./components/Sidenav";
import {Switch} from "@material-ui/core";
import {Router} from "@material-ui/icons";

export const Routess = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/faq" component={Login} />
            </Switch>
        </Router>,
        <div>
            <Navbar />
            <iframe width="100%" height="610px" frameBorder="0" allowFullScreen
                    src="//umap.openstreetmap.fr/fr/map/map_823344?scaleControl=true&miniMap=false&scrollWheelZoom=true&zoomControl=true&allowEdit=false&moreControl=true&searchControl=true&tilelayersControl=null&embedControl=null&datalayersControl=expanded&onLoadPanel=undefined&captionBar=false&locateControl=true"></iframe>
        </div>

    );
};
