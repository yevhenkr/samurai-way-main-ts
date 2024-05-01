import {WrappedFieldProps} from "redux-form/lib/Field";
import s from "./FormsControl.module.scss"
import React, {ReactNode} from "react";

export const FormControl = ({input, meta, ...props}: WrappedFieldProps & { children: ReactNode }) => {
    const hasError = meta.error && meta.touched
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props: WrappedFieldProps) => {
    return <FormControl  {...props} children={<textarea className={s.backgroundWhite} {...props.input} />}/>;
};

export const Input = (props: WrappedFieldProps) => {
    return <FormControl {...props} children={<input className={s.backgroundWhite}{...props.input} />}/>;
}