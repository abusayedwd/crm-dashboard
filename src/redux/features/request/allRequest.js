
import { apiSlice } from "../../api/apiSlice";


const allRequest = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        allRequest: builder.query({
            query: () => `/qoute/showAllProjectLists`,
            providesTags: [{type: "Revolut"}]
        })
    })
})

export const {useAllRequestQuery} = allRequest;