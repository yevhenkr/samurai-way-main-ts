import { ChangeEvent, useRef } from 'react'

import { NoUserIcon } from '../../assets/icons/noUserIcon'
import { Avatar } from '../avatar'

import s from './userPhoto.module.scss'

type AvatarEditType = {
    avatar?: null | string
    // deleteAvatar: () => void
    // modeOn: boolean
    name?: string
    // onChange: (event: ChangeEvent<HTMLInputElement>) => void
}
export const UserPhoto = ({avatar,name}: AvatarEditType) => {
    // const inputRef = useRef<HTMLInputElement>(null)

    // const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        // onChange(event)
        // if (inputRef.current) {
        //     inputRef.current.value = ''
        // }
    // }
    return (
        <div className={s.avatarGroup}>
            {avatar ? (
                <Avatar className={s.customAvatar} name={name} src={avatar} />
            ) : (
                <NoUserIcon className={s.customAvatar} />
            )}

        </div>
    )
}
