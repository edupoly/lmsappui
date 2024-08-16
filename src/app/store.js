import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userSignUpApi } from '../services/usersignup.service';
import { loginApi } from '../services/login.service';
import loginReducer from '../features/login/loginSlice';
import { adminSignUpApi } from '../services/adminsignup.service';
import { createcohortApi } from '../services/createcohorts.service';
import { getcohortsApi } from '../services/getcohorts.service';
import { getusersofacohortApi } from '../services/getusersofacohort.service';
import { adduserstocohortApi } from '../services/adduserstocohort.service';
import { addcohortstouserApi } from '../services/addcohortstouser.service';
import { getuseronsearchApi } from '../services/getuseronsearch.service';

export const store = configureStore({
    reducer: {
        login: loginReducer,
        [loginApi.reducerPath]: loginApi.reducer,
        [userSignUpApi.reducerPath]: userSignUpApi.reducer,
        [adminSignUpApi.reducerPath]: adminSignUpApi.reducer,
        [createcohortApi.reducerPath]: createcohortApi.reducer,
        [getcohortsApi.reducerPath]: getcohortsApi.reducer,
        [getusersofacohortApi.reducerPath]: getusersofacohortApi.reducer,
        [adduserstocohortApi.reducerPath]: adduserstocohortApi.reducer,
        [addcohortstouserApi.reducerPath]: addcohortstouserApi.reducer,
        [getuseronsearchApi.reducerPath]: getuseronsearchApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(loginApi.middleware)
            .concat(userSignUpApi.middleware)
            .concat(adminSignUpApi.middleware)
            .concat(createcohortApi.middleware)
            .concat(getcohortsApi.middleware)
            .concat(getusersofacohortApi.middleware)
            .concat(adduserstocohortApi.middleware)
            .concat(addcohortstouserApi.middleware)
            .concat(getuseronsearchApi.middleware),
});

setupListeners(store.dispatch);