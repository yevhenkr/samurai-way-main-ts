import './index.css';
import {store} from './redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}
                 sideBarFriends={store.getState().sideBar}
                 profilePage={store.getState().profilePage}
                 dialogPageType={store.getState().messagesPage}/></BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree()