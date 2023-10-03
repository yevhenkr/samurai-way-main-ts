import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Nav/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Propfile/ProfileContainer";

export const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Router>
                    <Switch>
                        <Route path="/profile" render={() => <ProfileContainer/>}/>
                        <Route path="/dialogs" component={DialogsContainer}/>
                        <Route path={'/dialogs/:id'}
                               component={DialogsContainer}/>
                        <Route path={'/users'}
                               component={UsersContainer}/>
                        {/*    <Page pages={dataState.pages}/>}/>*/}
                        {/*<Route path={'/*'} element={<Error404/>}/>*/}
                    </Switch>
                </Router>
            </div>
        </div>
    );
}