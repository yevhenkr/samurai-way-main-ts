import React, {FC} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    updateStatusThunkCreator
} from "../../redux/profile-page-reducer";
import {AppStateType} from "../../redux/redux-store";
import {ProfileObject, ProfileObjectPhotos} from "../../redux/state";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type MapStateToPropsType = {
    profile: ProfileObject
    status: string
    isAuth: boolean
    authorizedUserId: number
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileObjectPhotos) => void
    getUserStatusThunkCreator: (userId: string) => void
    getUserProfileThunkCreator: (userId: string) => void
    updateStatusThunkCreator: (status: string) => void
}

type PathParamsType = { id: string }
type PropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = Number(this.props.match.params.id) || this.props.authorizedUserId;
        if (!userId) {
            return this.props.history.push("/login");
        }
        this.props.getUserProfileThunkCreator(userId.toString())
        this.props.getUserStatusThunkCreator(userId.toString())
    }

    render() {
        return <>
            <Profile profile={this.props.profile} status={this.props.status}
                     updateStatusThunkCreator={this.props.updateStatusThunkCreator}/>
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.id
})
export default compose<FC>(
    connect(mapStateToProps, {getUserProfileThunkCreator, getUserStatusThunkCreator, updateStatusThunkCreator}),
    withRouter)
(ProfileContainer)