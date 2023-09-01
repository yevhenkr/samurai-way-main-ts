import './index.css';
import {store} from './redux/redux-store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/></BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree()