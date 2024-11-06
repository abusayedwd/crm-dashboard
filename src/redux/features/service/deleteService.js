
import { apiSlice } from "../../api/apiSlice";

const deleteService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        deleteService: builder.mutation({
            query: (id) => ({
                url: `/service/deleteService?id=${id}`,
                method: "DELETE"
            }) ,
            invalidatesTags: [{type: "Service"}]
        }),
        
    })
})

export const {useDeleteServiceMutation} = deleteService;