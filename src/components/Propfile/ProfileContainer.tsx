import React from 'react';
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
        let userId = this.props.match.params.id;
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfileThunkCreator(userId)
        this.props.getUserStatusThunkCreator(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status}
                     updateStatusThunkCreator={this.props.updateStatusThunkCreator}/>
        );
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})
export default compose<React.FC>(
    connect(mapStateToProps, {getUserProfileThunkCreator, getUserStatusThunkCreator, updateStatusThunkCreator}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)