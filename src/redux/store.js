import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers/index";
// import rootReducer from "./reducers"; // index.js 파일이 기본 파일이라 폴더명만 써도 index.js 파일을 읽어옴
import { composeWithDevTools } from "@redux-devtools/extension";

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
