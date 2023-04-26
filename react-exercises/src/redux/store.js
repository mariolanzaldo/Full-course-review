import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import rootSaga from './rootSaga';
import dataReducer from './slices/dataSlice';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = configureStore({
    reducer: {
        data: dataReducer,
    }, middleware: (getDefaultMiddleware) => {
        const middleware = [
            ...getDefaultMiddleware({ thunk: false }),
            ...middlewares,
        ];

        return middleware;
    }
});

sagaMiddleware.run(rootSaga);

export default store;