import { createStore, combineReducers } from "redux";
import todo from './modules/todo';
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

//프로젝트 하나에는 스토어가 하나만 있어야 하며 
//스토어에는 리듀서 또한 하나만 있어야 해서 combine해주겠다. 
const rootReducer = combineReducers({ todo });

//스토어 만들기
const store = createStore(rootReducer);

export default store;