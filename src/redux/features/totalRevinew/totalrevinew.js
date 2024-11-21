

import { apiSlice } from "../../api/apiSlice";


const totalReniview = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        totalReniview: builder.query({
            query: () => `/cost-in/totalRevinew`, 
        })
    })
})

export const {useTotalReniviewQuery} = totalReniview;