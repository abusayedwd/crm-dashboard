
import { apiSlice } from "../../api/apiSlice";

const deleteRequest = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        deleteRequest: builder.mutation({
            query: (id) => ({
                url: `/qoute/deleteProjectList?id=${id}`,
                method: "DELETE"
            }) ,
            invalidatesTags: [{type: "Revolut"}]
        }),
        
    })
})

export const {useDeleteRequestMutation} = deleteRequest;