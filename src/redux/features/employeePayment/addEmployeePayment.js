

import { apiSlice } from "../../api/apiSlice";

const addEmployeePayment = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addEmployeePayment: builder.mutation({
            query: (value) => ({
                url: `/employee-payment/createPayment`,
                method: "POST",
                body: value
            }) ,
            invalidatesTags: [{type: "Employee"}]
        })
    })
})

export const {useAddEmployeePaymentMutation} = addEmployeePayment;