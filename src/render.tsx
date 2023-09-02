import './index.css';
import {store} from './redux/redux-store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {StoreContext} from "./store-context";

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree()