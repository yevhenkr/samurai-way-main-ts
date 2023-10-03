import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-page-reducer";
import {AppStateType} from "../../redux/redux-store";
import {ProfileObject, ProfileObjectPhotos} from "../../redux/state";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type MapStateToPropsType = {
    profile: ProfileObject
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileObjectPhotos) => void
}

type PathParamsType = { id: string }
type PropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/2`).then((res) => {
            this.props.setUserProfile(res.data)
        });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})
export default compose<React.FC>(connect(mapStateToProps, {setUserProfile}), withRouter)(ProfileContainer)