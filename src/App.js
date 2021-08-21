import './App.css';
import Header from './components/Header/Header';
import Router from './pages/Router';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Footer from './components/Footer/Footer';

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
