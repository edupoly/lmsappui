import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const getusersofacohortApi = createApi({
    reducerPath: 'getusersofacohortApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9999' }),
    endpoints: (builder) => ({
        getusersofacohortApi: builder.query({
            query: (cohortId) => ({
                url: `/getusersofacohort?cohortId=${cohortId}`,
                method: 'GET',
                headers: {
                    token: window.localStorage.getItem('token'),
                    role: window.localStorage.getItem('role'),
                },
            }),
        }),
    }),
});

export const { useGetusersofacohortApiQuery } = getusersofacohortApi;

