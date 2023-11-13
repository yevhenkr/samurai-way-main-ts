import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunkCreator} from "../../redux/profile-page-reducer";
import {AppStateType} from "../../redux/redux-store";
import {ProfileObject, ProfileObjectPhotos} from "../../redux/state";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../HOC/withAuthRedirect";

type MapStateToPropsType = {
    profile: ProfileObject
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileObjectPhotos) => void
    getUserProfileThunkCreator: (userId: string) => void
}

type PathParamsType = { id: string }
type PropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.id;
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfileThunkCreator(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
})
export default compose<React.FC>(
    connect(mapStateToProps, {getUserProfileThunkCreator}), withRouter,
    withAuthRedirect
)(ProfileContainer)