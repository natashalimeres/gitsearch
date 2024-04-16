import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
import createSagaMiddleware from "redux-saga";
import { repositorySaga } from "./sagas/repository";
import { all } from "redux-saga/effects";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([repositorySaga()]);
}

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
