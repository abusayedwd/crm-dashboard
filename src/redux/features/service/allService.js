
import { apiSlice } from "../../api/apiSlice";


const allService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        allService: builder.query({
            query: () => `/service/getAllServices`,
            providesTags: [{type: "Service"}]
        })
    })
})

export const {useAllServiceQuery} = allService;