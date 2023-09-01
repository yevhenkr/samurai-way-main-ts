import {createStore} from "redux";
function myReducer(state = {}) {
 // Логика обработки действий
 return state;
}

 let store = createStore(myReducer);

 export default store;