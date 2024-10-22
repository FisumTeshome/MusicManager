import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import songReducer from "./slices/songSlice"; 
import rootSaga from "./sagas";             

// Create the saga middleware to handle side effects 
const sagaMiddleware = createSagaMiddleware();

// Create the store and apply the saga middleware
const store = configureStore({
  reducer: {
    songs: songReducer, // Combine slices
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});


sagaMiddleware.run(rootSaga);


export type RootState = ReturnType<typeof store.getState>;
export default store;

