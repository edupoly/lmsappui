import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userSignUpApi } from '../services/usersignup.service';

export const store = configureStore({
    reducer: {
        [userSignUpApi.reducerPath]: userSignUpApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userSignUpApi.middleware),
});

setupListeners(store.dispatch);