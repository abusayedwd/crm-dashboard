import { apiSlice } from "../../api/apiSlice"; 
const customerName = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        customerName: builder.query({
            query: () => `/customer-add/getAllCustomerNames`,
            providesTags: [{type: "Customer"}]
        })
    })
})

export const {
    useCustomerNameQuery
} = customerName;