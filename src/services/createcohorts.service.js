import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const createcohortApi = createApi({
    reducerPath: 'createcohortApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9999' }),
    endpoints: (builder) => ({
        createcohortApi: builder.mutation({
            query: (newcohortdetails) => ({
                url: '/createcohort',
                method: 'POST',
                body: newcohortdetails,
                headers: {
                    token: window.localStorage.getItem('token'),
                    role: window.localStorage.getItem('role'),
                },
            }),
        }),
    }),
});

export const { useCreatecohortApiMutation } = createcohortApi;
