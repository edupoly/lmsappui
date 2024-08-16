import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adduserstocohortApi = createApi({
    reducerPath: 'adduserstocohortApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9999' }),
    endpoints: (builder) => ({
        adduserstocohortApi: builder.mutation({
            query: (userstocohortdetails) => ({
                url: '/adduserstocohort',
                method: 'POST',
                body: userstocohortdetails,
                headers: {
                    token: window.localStorage.getItem('token'),
                    role: window.localStorage.getItem('role'),
                },
            }),
        }),
    }),
});

export const { useAdduserstocohortApiMutation } = adduserstocohortApi;
