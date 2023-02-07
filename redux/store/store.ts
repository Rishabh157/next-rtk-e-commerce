import { configureStore } from "@reduxjs/toolkit";
import { ProductsApi } from '../services/productsApi';

const store = configureStore({
    reducer: {
        [ProductsApi.reducerPath]: ProductsApi.middleware,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat([ProductsApi.middleware])
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
