import React from 'react';
import './App.css';
import Navmenu from "./components/Navmenu/Navmenu.jsx";
import Header from "./components/Header/Header.jsx";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import MessagesContainer from "./components/Messages/MessagesContainer";
import News from "./components/News/News";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
    return (

        <div className='wrapper'>
            <Header/>
            <Navmenu/>
            <div className='mainPage'>
                <Route path='/Messages' render={() => <MessagesContainer  />}/>
                <Route path='/Profile/:userID?' render={() => <ProfileContainer/>}/>
                <Route path='/Users' render={() => <UsersContainer/>}/>
                <Route path='/News' render={() => <News/>}/>
                <Route path='/Music' render={() => <Music/>}/>
                <Route path='/Settings' render={() => <Settings/>}/>
            </div>
        </div>

    )
}
export default App;
