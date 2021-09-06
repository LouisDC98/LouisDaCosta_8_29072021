import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import About from './pages/About/About';
import Rent from './pages/Rent/Rent';
import Error from './pages/Error/Error';

class Router extends React.Component {
    render() {
        const routes = [
            {
                path: '/about',
                component: About
            },
            {
                path: '/rent/:id',
                component: Rent,
                exact: true
            },
            {
                path: '/',
                component: Home,
                exact: true
            },
            {
                path: '*',
                component: Error
            }
        ];
        return (
            <Switch>
                {routes.map((route) => (
                    <Route key={route.path} {...route} />
                ))}
            </Switch>
        );
    }
}

export default Router;
