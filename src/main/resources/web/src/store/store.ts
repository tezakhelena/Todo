import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filteriReducer from './slices/filteriSlice'
import authReducer from './slices/authSlice'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    filteri: filteriReducer,
    auth: authReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export const persistor = persistStore(store);

export default store;