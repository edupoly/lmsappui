import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adminSignUpApi = createApi({
    reducerPath: 'adminSignUpApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9999' }),
    endpoints: (builder) => ({
        adminsignup: builder.mutation({
            query: (adminsignupdetails) => ({
                url: '/adminsignup',
                method: 'POST',
                body: adminsignupdetails,
            }),
        }),
    }),
});

export const { useAdminsignupMutation } = adminSignUpApi;
