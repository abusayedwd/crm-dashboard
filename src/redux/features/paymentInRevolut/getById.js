

import { apiSlice } from "../../api/apiSlice";


const singlePayment = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        singlePayment: builder.query({
            query: (id) => `/payment-invoice/getRevaluePaymentById?id=${id}`,
            providesTags: [{type: "Revolut"}]
        })
    })
})

export const {useSinglePaymentQuery} = singlePayment;