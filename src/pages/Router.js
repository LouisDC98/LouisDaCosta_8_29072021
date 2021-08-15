import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Rent from './Rent/Rent';
import Error from './Error/Error';

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route exact path="/rent/:id">
                    <Rent />
                </Route>
                <Route path="*">
                    <Error />
                </Route>
            </Switch>
        );
    }
}

export default Router;
