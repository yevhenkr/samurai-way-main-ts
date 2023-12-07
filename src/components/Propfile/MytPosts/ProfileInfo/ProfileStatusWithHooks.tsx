import React, {ChangeEvent, useState} from 'react';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: ProfileStatusType) => {
    let [editMode, setEditMode] = useState<Boolean>(false)
    let [status, setStatus] = useState<string>(props.status)
    const setActivateEditMode = () => {
        setEditMode(true)
    }
    const setDeactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <>
            {!editMode &&
                <div><span onDoubleClick={setActivateEditMode}>{props.status + 'WWW' || "____________"}</span></div>
            }
            {editMode &&
                <div><input onChange={onStatusChange} autoFocus={true} onBlur={setDeactivateEditMode}
                            value={status}/></div>
            }
        </>
    );
}

export default ProfileStatusWithHooks;