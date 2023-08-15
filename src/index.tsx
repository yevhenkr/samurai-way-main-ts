import React from 'react';
import './index.css';
import {store} from './redux/state';
import './index.css';
import {rerenderEntireTree} from './render';

store.subscribe(rerenderEntireTree)