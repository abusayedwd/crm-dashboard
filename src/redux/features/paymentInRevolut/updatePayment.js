

import { apiSlice } from "../../api/apiSlice";

const updatePayment = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updatePayment: builder.mutation({
        query: ( {updatedPaymentData, id}) => ({
          url: `/payment-invoice/updateRevaluePayment?id=${id}`,
          method: "PATCH",
          body: updatedPaymentData,  
        }),
        invalidatesTags: [{type: "Revolut"}]
      }),
    }),
  });
  
  export const {useUpdatePaymentMutation } = updatePayment;