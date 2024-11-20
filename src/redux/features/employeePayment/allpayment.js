

import { apiSlice } from "../../api/apiSlice"; 
const totalPayment = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        totalPayment: builder.query({
            query: () => `/employee-updated/employeeTotalPayment`,
            providesTags: [{type: "Employee"}]
        })
    })
})

export const {useTotalPaymentQuery} = totalPayment;