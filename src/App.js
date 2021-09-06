import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Footer from './components/Footer/Footer';
import Router from 'Router';

function App() {
    return (
        <BrowserRouter>
            <div className="bodyShape">
                <Header />
                <div className="body">
                    <Router />
                </div>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
