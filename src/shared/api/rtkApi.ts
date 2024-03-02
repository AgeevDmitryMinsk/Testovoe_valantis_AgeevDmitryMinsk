import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import md5 from 'md5';
import { getToday } from '../lib/helpers/getToday/getToday';

export const rtkApi = createApi({
    reducerPath: 'rtkApi',
    baseQuery: fetchBaseQuery({
        // baseUrl: __API__,
        baseUrl: 'https://api.valantis.store:41000/',
        prepareHeaders: (headers) => {
            const token = md5('Valantis_' + getToday());
            if (token) {
                headers.set('X-Auth', token);
            }

            return headers;
        },
    }),
    endpoints: (builder) => ({}),
});
