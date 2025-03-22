 


import { apiSlice } from "../../api/apiSlice";

const addRevolutPayment = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addRevolutPayment: builder.mutation({
            query: (value) => ({
                url: `/payment-invoice/createRevaluePayment`,
                method: "POST",
                body: value
            }) ,
            invalidatesTags: [{type: "Revolut"}]
        })
    })
})

export const {useAddRevolutPaymentMutation} = addRevolutPayment;