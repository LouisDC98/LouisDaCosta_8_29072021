import './App.css';
import Header from './components/Header/Header';
import Router from './pages/Router';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="body">
                    <Router />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
