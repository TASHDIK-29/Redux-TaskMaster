import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice'
import logger from './middlewares/logger';

export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export type RootState = ReturnType<typeof store.getState>; // to handle type of TS
export type AppDispatch = typeof store.dispatch; // to handle type of TS