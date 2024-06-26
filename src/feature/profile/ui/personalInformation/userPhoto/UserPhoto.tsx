import { ChangeEvent, useRef } from 'react'

import { EditIcon } from '../../../../../assets/icons/editIcon'
import { NoUserIcon } from '../../../../../assets/icons/noUserIcon'
import { Avatar } from '../../../../../components/avatar'
import { clsx } from 'clsx'

import s from './userPhoto.module.scss'

type AvatarEditType = {
  avatar?: null | string
  modeOn: boolean
  name?: string
  deleteAvatar: () => void
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const UserPhoto = ({ avatar, deleteAvatar, modeOn, name, onChange }: AvatarEditType) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange( event)
  }

  return (
      <div className={s.avatarGroup}>
        {avatar ? (
            <Avatar className={s.customAvatar} name={name} src={avatar}/>
        ) : (
            <NoUserIcon className={s.customAvatar}/>
        )}
        {
            !modeOn && (
                <label htmlFor={'image'}>
          <span className={clsx(s.icon, s.editIcon)}>
            <EditIcon width={16}/>
          </span>
                  <input
                      className={s.avatarEditor}
            id={'image'}
            name={"image"}
            onChange={onChangeHandler}
            ref={inputRef}
            type={'file'}
          />
        </label>
      )
      }
    </div>
  )
}
