import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-page-reducer";
import {AppStateType} from "../../redux/redux-store";
import {ProfileObject} from "../../redux/state";

type MapStateToPropsType = {
    profile: ProfileObject
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: any) => void
}

type CommonType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<CommonType> {
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);