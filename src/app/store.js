import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userSignUpApi } from '../services/usersignup.service';
import { loginApi } from '../services/login.service';
import loginReducer from '../features/login/loginSlice';

export const store = configureStore({
    reducer: {
        login: loginReducer,
        [loginApi.reducerPath]: loginApi.reducer,
        [userSignUpApi.reducerPath]: userSignUpApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(loginApi.middleware)
            .concat(userSignUpApi.middleware),
});

setupListeners(store.dispatch);