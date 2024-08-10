import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userSignUpApi = createApi({
    reducerPath: 'userSignUpApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9999' }),
    endpoints: (builder) => ({
        usersignup: builder.mutation({
            query: (usersignupdetails) => ({
                url: '/usersignup',
                method: 'POST',
                body: usersignupdetails,
            }),
        }),
    }),
});

export const { useUsersignupMutation } = userSignUpApi;
