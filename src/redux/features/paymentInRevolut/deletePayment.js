


import { apiSlice } from "../../api/apiSlice";

const deletePayment = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        deletePayment: builder.mutation({
            query: (id) => ({
                url: `/payment-invoice/deleteRevaluePayment?id=${id}`,
                method: "DELETE"
            }) ,
            invalidatesTags: [{type: "Revolut"}]
        }),
        
    })
})

export const {useDeletePaymentMutation} = deletePayment;