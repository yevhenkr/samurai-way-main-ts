import s from './Dialogs.module.css'

export const Dialogs = () => {
    return <div className={s.dialogues}>
        <div className={s.dialoguesItems}>
            <div className={s.dialog + ' ' + s.active}>
                Andrei
            </div>
            <div className={s.dilog}>
                Ivan
            </div>
            <div className={s.dilog}>
                Sergei
            </div>
            <div className={s.dilog}>
                Andrei
            </div>
            <div className={s.dilog}>
                Oleg
            </div>
        </div>
        <div className={s.messages}>
            <div className={s.message}>Hi</div>
            <div className={s.message}>How are you itika</div>
            <div className={s.message}>You</div>
        </div>
    </div>
}