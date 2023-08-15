import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Nav/Navbar';
import Profile from './components/Propfile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';
import {DialogPageType, ProfilePageType, SideBarType} from './redux/state';


type AppPropsType = {
    addPost: (post: string) => void
    updateNewPostText: (newText: string) => void
    profilePage: ProfilePageType
    dialogPageType: DialogPageType
    sideBarFriends: SideBarType
}

function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar sideBar={props.sideBarFriends}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile"
                           element={
                               <Profile addPost={props.addPost} updateNewPostText={props.updateNewPostText}
                                        profilePage={props.profilePage}/>}/>
                    <Route path="/dialogs" element={<Dialogs messages={props.dialogPageType.messages}
                                                             dialogs={props.dialogPageType.dialogs}/>}/>
                    <Route path={'/dialogs/:id'}
                           element={<Dialogs messages={props.dialogPageType.messages}
                                             dialogs={props.dialogPageType.dialogs}/>}/>
                    {/*    <Page pages={dataState.pages}/>}/>*/}
                    {/*<Route path={'/*'} element={<Error404/>}/>*/}
                </Routes>
            </div>
        </div>
    );
}

export default App;