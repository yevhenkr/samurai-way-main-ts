import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Nav/Navbar';
import Profile from './components/Propfile/Profile';
import {Route, Routes} from 'react-router-dom';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={
                        <Profile/>}/>
                    <Route path="/dialogs" element={
                        <DialogsContainer/>}/>
                    <Route path={'/dialogs/:id'}
                           element={<DialogsContainer/>}/>
                    {/*    <Page pages={dataState.pages}/>}/>*/}
                    {/*<Route path={'/*'} element={<Error404/>}/>*/}
                </Routes>
            </div>
        </div>
    );
}

export default App;