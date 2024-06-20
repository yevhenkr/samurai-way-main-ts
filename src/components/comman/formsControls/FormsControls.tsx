import {WrappedFieldProps} from "redux-form/lib/Field";
import s from "./FormsControl.module.scss"
import React, {ReactNode} from "react";

export const FormControl = ({ input, meta, children }: WrappedFieldProps & { children: ReactNode }) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

export const Textarea = ({ input, meta, className, ...rest }: WrappedFieldProps & { className?: string }) => {
    return (
        <FormControl input={input} meta={meta} {...rest}>
            <textarea className={`${s.backgroundWhite} ${className}`} {...input} />
        </FormControl>
    );
};

export const Input = (props: WrappedFieldProps & { className?: string , placeholder: string}) => {
    return <FormControl {...props} children={<input className={`${s.backgroundWhite} ${props.className}`}{...props.input} placeholder={props.placeholder} />}/>;
}