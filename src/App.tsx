import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Propfile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className="app-wrapper-content">
                {/*<Profile/>*/}
                <Dialogs/>
            </div>
        </div>
    );
}

export default App;