import { apiSlice } from "../../api/apiSlice";

const deleteCustomer = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        deleteCustomer: builder.mutation({
            query: (id) => ({
                url: `/customer-add/deleteCustomer?id=${id}`,
                method: "DELETE"
            }) ,
            invalidatesTags: [{type: "Customer"}]
        }),
        
    })
})

export const {useDeleteCustomerMutation} = deleteCustomer;