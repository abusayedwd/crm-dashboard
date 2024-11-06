import { apiSlice } from "../../api/apiSlice"; 
const allCustomer = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        allCustomer: builder.query({
            query: () => `/customer-add/showAllCustomers`,
            providesTags: [{type: "Customer"}]
        })
    })
})

export const {useAllCustomerQuery} = allCustomer;