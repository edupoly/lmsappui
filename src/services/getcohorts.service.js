import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const getcohortsApi = createApi({
    reducerPath: 'getcohortsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9999' }),
    endpoints: (builder) => ({
        getcohortsApi: builder.query({
            query: (newcohortdetails) => ({
                url: '/getcohorts',
                method: 'GET',
                body: newcohortdetails,
                headers: {
                    token: window.localStorage.getItem('token'),
                    role: window.localStorage.getItem('role'),
                },
            }),
        }),
    }),
});

export const { useGetcohortsApiQuery } = getcohortsApi;
