

import { apiSlice } from "../../api/apiSlice";

const addCustomer = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addCustomer: builder.mutation({
            query: (value) => ({
                url: `/customer-add/createCustomer`,
                method: "POST",
                body: value
            }) ,
            invalidatesTags: [{type: 'Customer'}]
        })
    })
})

export const {useAddCustomerMutation} = addCustomer;