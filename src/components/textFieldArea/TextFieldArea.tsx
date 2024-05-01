import React, {ChangeEvent} from 'react';
import TextField from '@mui/material/TextField/TextField';

type TextFieldAreaPropsType = {
    text: string
    callback: (text: string) => void
}

function TextFieldArea(props: TextFieldAreaPropsType) {
    const handleTextChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        props.callback(event.target.value);
    };
    return <TextField variant="outlined" value={props.text} onChange={handleTextChange} autoFocus/>
}

export default TextFieldArea;