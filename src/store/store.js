import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware } from "redux";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware(rootSaga);

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);
export default store;
