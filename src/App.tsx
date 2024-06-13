import React from 'react';
import './App.module.scss';
import {Route} from 'react-router-dom';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Propfile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import Preloader from "./components/comman/preloader/Preloader";
import SideBar from "./components/sideBar/SideBar"
import s from "./App.module.scss"
import { ThemeProvider } from '../src/components/ui/themeProvider/ThemeProvider'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import '../src/styles/index.scss'
import Footer from "./components/footer/Footer";


class App extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialize) {
            return <Preloader/>
        }
        return (
            <ThemeProvider>
                <div className={s.appWrapper}>
                    <HeaderContainer/>
                    <div className={s.sideBarBodyWrapper}>
                        <SideBar/>
                        <ul className={s.appWrapperContent}>
                            <li><Route path="/profile/:id?" render={() => <ProfileContainer/>}/></li>
                            <li><Route path={'/dialogs/:id?'} render={() => <DialogsContainer/>}/></li>
                            <li><Route path={'/users'} render={() => <UsersContainer/>}/></li>
                            <li><Route path='/login' component={Login}/></li>
                            {/*    <Page pages={dataState.pages}/>}/>*/}
                            {/*<Route path={'/*'} element={<Error404/>}/>*/}
                        </ul>
                    </div>
                    <Footer/>
                </div>
            </ThemeProvider>
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
export default connect(mapStateToProps, {initializeApp})(App)