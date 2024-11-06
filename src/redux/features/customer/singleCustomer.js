import { apiSlice } from "../../api/apiSlice"; 
const singleCustomer = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        singleCustomer: builder.query({
            query: (id) => `/customer-add/showCustomerById?id=${id}`,
             
        })
    })
})

export const {useSingleCustomerQuery} = singleCustomer;