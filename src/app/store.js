import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userSignUpApi } from '../services/usersignup.service';
import { loginApi } from '../services/login.service';
import loginReducer from '../features/login/loginSlice';
import { adminSignUpApi } from '../services/adminsignup.service';
import { createcohortApi } from '../services/createcohort.service';

export const store = configureStore({
    reducer: {
        login: loginReducer,
        [loginApi.reducerPath]: loginApi.reducer,
        [userSignUpApi.reducerPath]: userSignUpApi.reducer,
        [adminSignUpApi.reducerPath]: adminSignUpApi.reducer,
        [createcohortApi.reducerPath]: createcohortApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(loginApi.middleware)
            .concat(userSignUpApi.middleware)
            .concat(adminSignUpApi.middleware)
            .concat(createcohortApi.middleware),
});

setupListeners(store.dispatch);