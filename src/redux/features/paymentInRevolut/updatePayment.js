

import { apiSlice } from "../../api/apiSlice";

const updatePayment = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updatePayment: builder.mutation({
        query: ( {formData, id}) => ({
          url: `/payment-invoice/updateRevaluePayment?id=${id}`,
          method: "PATCH",
          body: formData,  
        }),
        invalidatesTags: [{type: "Revolut"}]
      }),
    }),
  });
  
  export const {useUpdatePaymentMutation } = updatePayment;