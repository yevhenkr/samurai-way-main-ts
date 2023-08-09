import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {v1} from 'uuid';

export type PotsType = {
    message: string,
    id: string
}
export type DialogsType = {
    name: string,
    id: string
}
export type MessageType = {
    text: string,
    id: string
}
const posts: PotsType[] = [
    {message: 'bla bla', id: v1()},
    {message: 'Ivan', id: v1()},
    {message: 'Sergei', id: v1()},
]
const dialogs: DialogsType[] = [
    {name: 'Dimych', id: v1()},
    {name: 'Ivan', id: v1()},
    {name: 'Sergei', id: v1()},
    {name: 'Andrey', id: v1()},
    {name: 'Oleg', id: v1()}
]
const messages: MessageType[] = [
    {text: '- Hi', id: v1()},
    {text: '- How are you itika', id: v1()},
    {text: '- You', id: v1()}
]


ReactDOM.render(
    <BrowserRouter><App posts={posts} messages={messages} dialogs={dialogs}/></BrowserRouter>,
    document.getElementById('root')
);