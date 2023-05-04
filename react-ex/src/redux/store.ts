import { configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import rootSaga from './rootSaga';
import dataReducer from './slices/dataSlice';
import { apiSlice } from './slices/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];


export const store = configureStore({
    reducer: {
        data: dataReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        // const middleware = [
            // ...getDefaultMiddleware({ thunk: false }),
            // ...getDefaultMiddleware({ thunk: false }).concat(apiSlice.middleware),
            // apiSlice.middleware,
            // ...middlewares,
        // ];
        

        // return middleware;
        return (
            getDefaultMiddleware()
            .concat(middlewares)
            .concat(apiSlice.middleware)
        );
    }

});

sagaMiddleware.run(rootSaga);

setupListeners(store.dispatch);

// export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;