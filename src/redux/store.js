// import { applyMiddleware, createStore } from "redux";
// import { thunk } from "redux-thunk";
// import rootReducer from "./reducers/index";
// import rootReducer from "./reducers"; // index.js 파일이 기본 파일이라 폴더명만 써도 index.js 파일을 읽어옴
// import { composeWithDevTools } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
import authenticateReducer from "./reducers/authenticateReducer";
import productReducer from "./reducers/productReducer";

// createStore를 사용하기 위해 필요한 것들
// 1. combinereducer
// 2. thunk
// 3. applyMiddleware
// 4. composeWithDevTools

// let store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

const store = configureStore({
  reducer: {
    auth: authenticateReducer,
    product: productReducer,
  },
});

export default store;
