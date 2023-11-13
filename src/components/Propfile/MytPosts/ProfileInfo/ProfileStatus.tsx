import React from 'react';

type ProfileStatusType = {
    workStatus: string
}

class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {editMode: false}

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        debugger
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <>
                {!this.state.editMode ?
                    <div><span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.workStatus}</span></div>
                    :
                    <div><input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)}
                                value={this.props.workStatus}/></div>
                }
            </>
        );
    }
}

export default ProfileStatus;