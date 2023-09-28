import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-page-reducer";
import {AppDispatch} from "../../redux/redux-store";

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/2`).then((res) => {
            setUserProfile(res.data)
        });
    }

    render() {
        return (
            <Profile/>
        );
    }
}

let mapStateToProps = () => ({})


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);