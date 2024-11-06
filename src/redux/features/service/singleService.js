import { apiSlice } from "../../api/apiSlice"; 
const singleService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        singleService: builder.query({
            query: (id) => `/service/getServiceById?id=${id}`,
             
        })
    })
})

export const {useSingleServiceQuery} = singleService;