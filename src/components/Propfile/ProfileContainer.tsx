import React, {FC} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    updateStatusThunkCreator,
    putUserProfileThunkCreator, updatePhotoThunkCreator
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
    photo: any
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileObjectPhotos) => void
    getUserStatusThunkCreator: (userId: string) => void
    getUserProfileThunkCreator: (userId: string) => void
    updateStatusThunkCreator: (status: string) => void
    putUserProfileThunkCreator: (data: ProfileObject)=> void
    updatePhotoThunkCreator: (data: any)=> void
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
            <Profile avatar={this.props.profile.photos.large} profile={this.props.profile} status={this.props.status}
                     updateStatusThunkCreator={this.props.updateStatusThunkCreator} putUserProfileThunkCreator={this.props.putUserProfileThunkCreator} updatePhotoThunkCreator={this.props.updatePhotoThunkCreator}/>
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.id,
    photo: state.profilePage.profile.photos,
})

export default compose<FC>(
    connect(mapStateToProps, {getUserProfileThunkCreator, getUserStatusThunkCreator, updateStatusThunkCreator,putUserProfileThunkCreator,updatePhotoThunkCreator}),
    withRouter)
(ProfileContainer)