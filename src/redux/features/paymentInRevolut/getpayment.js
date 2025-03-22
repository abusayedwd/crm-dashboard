
import { apiSlice } from "../../api/apiSlice";


const revolutPayment = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        revolutPayment: builder.query({
            query: () => `/payment-invoice/getRevoultPayments`,
            providesTags: [{type: "Revolut"}]
        })
    })
})

export const {useRevolutPaymentQuery} = revolutPayment;