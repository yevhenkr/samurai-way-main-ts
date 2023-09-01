import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Nav/Navbar';
import Profile from './components/Propfile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';
import {StoreType} from './redux/state';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

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
                    <Route path="/profile" element={
                        <Profile store={props.store} profilePage={state.profilePage}
                                 dispatch={props.store.dispatch.bind(props.store)}/>}/>
                    <Route path="/dialogs" element={
                        <DialogsContainer store={props.store}/>}/>
                    <Route path={'/dialogs/:id'}
                           element={<DialogsContainer store={props.store}/>}/>
                    {/*    <Page pages={dataState.pages}/>}/>*/}
                    {/*<Route path={'/*'} element={<Error404/>}/>*/}
                </Routes>
            </div>
        </div>
    );
}

export default App;