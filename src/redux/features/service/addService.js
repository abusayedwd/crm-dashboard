

import { apiSlice } from "../../api/apiSlice";

const addService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addService: builder.mutation({
            query: (value) => ({
                url: `/service/createService`,
                method: "POST",
                body: value
            }) ,
            invalidatesTags: [{type: 'Service'}]
        })
    })
})

export const {useAddServiceMutation} = addService;