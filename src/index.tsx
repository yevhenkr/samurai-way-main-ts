import React from 'react';
import './index.css';
import {rerenderEntireTree} from './render'
import {state, addPost, updateNewPostText} from './redux/state';

rerenderEntireTree(state, addPost, updateNewPostText);