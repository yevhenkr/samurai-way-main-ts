import React from 'react';

type ProfileStatusType = {
    workStatus: string
}

class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {editMode: false}

    activateEditMode=()=> {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode=()=> {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <>
                {!this.state.editMode ?
                    <div><span onDoubleClick={this.activateEditMode}>{this.props.workStatus}</span></div>
                    :
                    <div><input autoFocus={true} onBlur={this.deactivateEditMode}
                                value={this.props.workStatus}/></div>
                }
            </>
        );
    }
}

export default ProfileStatus;