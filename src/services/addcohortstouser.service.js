import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const addcohortstouserApi = createApi({
    reducerPath: 'addcohortstouserApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9999' }),
    endpoints: (builder) => ({
        addcohortstouser: builder.mutation({
            query: (cohortstouserdetails) => ({
                url: '/addcohortstouser',
                method: 'POST',
                body: cohortstouserdetails,
            }),
        }),
    }),
});

export const { useAddcohortstouserMutation } = addcohortstouserApi;