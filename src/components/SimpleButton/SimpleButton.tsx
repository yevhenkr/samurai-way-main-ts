import React from 'react';
import {Button} from "@mui/material";

type SimplePropsType={
    name: string
    callback: ()=>void
}

function SimpleButton(props: SimplePropsType)  {
    return (
        <Button variant="contained" onClick={props.callback}>{props.name}</Button>
    );
}

export default SimpleButton;