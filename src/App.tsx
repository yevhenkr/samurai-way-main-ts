import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Nav/Navbar';
import Profile from './components/Propfile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';

function App(props: any) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar sideBarFriends={props.sideBarFriends}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={<Profile posts={props.profilePage.posts}/>}/>
                    <Route path="/dialogs" element={<Dialogs messages={props.messagesPage.messages}
                                                             dialogs={props.messagesPage.dialogs}/>}/>
                    <Route path={'/dialogs/:id'}
                           element={<Dialogs messages={props.messagesPage.messages}
                                             dialogs={props.messagesPage.dialogs}/>}/>
                    {/*    <Page pages={dataState.pages}/>}/>*/}
                    {/*<Route path={'/*'} element={<Error404/>}/>*/}
                </Routes>
            </div>
        </div>
    );
}

export default App;