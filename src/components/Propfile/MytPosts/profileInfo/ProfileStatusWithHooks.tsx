import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "./Profileinfo.module.scss"

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: ProfileStatusType) => {
    let [editMode, setEditMode] = useState<Boolean>(false)
    let [status, setStatus] = useState<string>(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

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
        <div className={s.statusWrapper}>
            <span className={s.bold}>Status</span>
            {!editMode &&
                <div><span onDoubleClick={setActivateEditMode}>{props.status || "____________"}</span></div>
            }
            {editMode &&
                <div><input onChange={onStatusChange} autoFocus={true} onBlur={setDeactivateEditMode}
                            value={status}/></div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;