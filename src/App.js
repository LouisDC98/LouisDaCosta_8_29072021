import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Footer from './components/Footer/Footer';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Rent from './pages/Rent/Rent';
import Error from './pages/Error/Error';

function App() {
    return (
        <BrowserRouter>
            <div className="bodyShape">
                <Header />
                <div className="body">
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
                </div>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
