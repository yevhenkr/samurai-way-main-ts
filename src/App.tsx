import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header><img src={'https://1000logos.net/wp-content/uploads/2016/10/Batman-Logo-1966.png'}/></header>
            <nav>
                <div><a>Profile</a></div>
                <div><a>Message</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>
            </nav>
            <div className="app-content">
                <div>
                    <img src={'https://turist24.com/wp-content/uploads/2020/11/veneciya.jpeg'}/>
                </div>
                <div>
                    {/*<img src={'https://turist24.com/wp-content/uploads/2020/11/veneciya.jpeg'}/>*/}
                    ava + dicript
                </div>
                <div>My posts
                    <div>New post</div>
                </div>
                <div>
                    <div>post 1</div>
                    <div>post 2</div>
                </div>
            </div>
        </div>

    );
}

export default App;
