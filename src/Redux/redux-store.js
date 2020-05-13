import {combineReducers, createStore} from "redux";
import messagesReducer from "./messages-reducer";
import navmenuReducer from "./navmenu-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    messages: messagesReducer,
    profile: profileReducer,
    navmenu: navmenuReducer,
    usersPage: usersReducer

});


let store = createStore(reducers);
window.store = store;

export default store;