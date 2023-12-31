import React from 'react';
import './App.css';
import Navbar from './components/Nav/Navbar';
import {Route} from 'react-router-dom';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Propfile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import Preloader from "./components/comman/preloader/Preloader";


class App extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialize) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile/:id?" render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path={'/dialogs/:id'}
                           render={() => <DialogsContainer/>}/>
                    <Route path={'/users'}
                           render={() => <UsersContainer/>}/>
                    <Route path='/login' component={Login}/>
                    {/*    <Page pages={dataState.pages}/>}/>*/}
                    {/*<Route path={'/*'} element={<Error404/>}/>*/}
                </div>
            </div>
        );
    }
}

type MapStateToPropsType = {
    initialize: boolean
}
type MapDispatchToPropsType = {
    initializeApp: () => Promise<void>
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    initialize: state.app.initialized
})
export default connect(mapStateToProps, { initializeApp})(App)