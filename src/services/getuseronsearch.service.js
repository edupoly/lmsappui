import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const getuseronsearchApi = createApi({
    reducerPath: 'getuseronsearchApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9999' }),
    endpoints: (builder) => ({
        getuseronsearchApi: builder.query({
            query: (userdetails) => ({
                url: `/getuseronsearch`,
                method: 'GET',
                headers: {
                    token: window.localStorage.getItem('token'),
                    role: window.localStorage.getItem('role'),
                },
                params: {
                    q: userdetails // Pass the search details as a query parameter
                }
            }),
        }),
    }),
});

export const { useGetuseronsearchApiQuery } = getuseronsearchApi;


