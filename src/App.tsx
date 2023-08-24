import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Nav/Navbar';
import Profile from './components/Propfile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';
import {DialogPageType, ProfilePageType, SideBarType, StoreType} from './redux/state';
import {stat} from "fs";


type AppPropsType = {
    store: StoreType
}

const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState();
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar sideBar={state.sideBar}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile"
                           element={
                               <Profile profilePage={state.profilePage}
                                        dispatch={props.store.dispatch.bind(props.store)}/>}/>
                    <Route path="/dialogs" element={<Dialogs messages={state.messagesPage.messages}
                                                             dialogs={state.messagesPage.dialogs}/>}/>
                    <Route path={'/dialogs/:id'}
                           element={<Dialogs messages={state.messagesPage.messages}
                                             dialogs={state.messagesPage.dialogs}/>}/>
                    {/*    <Page pages={dataState.pages}/>}/>*/}
                    {/*<Route path={'/*'} element={<Error404/>}/>*/}
                </Routes>
            </div>
        </div>
    );
}

export default App;