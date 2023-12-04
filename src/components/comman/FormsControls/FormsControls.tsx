import {WrappedFieldProps} from "redux-form/lib/Field";
import styles from "./FormsControl.module.css"
import React, {ReactNode} from "react";

export const FormControl = ({input, meta, ...props}: WrappedFieldProps & { children: ReactNode }) => {
    const hasError = meta.error && meta.touched
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props: WrappedFieldProps) => {
    return <FormControl {...props} children={<textarea {...props.input} />}/>;
};

export const Input = (props: WrappedFieldProps) => {
    return <FormControl {...props} children={<input {...props.input} />}/>;
}