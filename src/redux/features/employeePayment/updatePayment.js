

import { apiSlice } from "../../api/apiSlice";

const updatePaymentEmployee = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updatePaymentEmployee: builder.mutation({
        query: ( { paymentData , id}) => ({
          url: `/employee-updated/updateEmployeePayment?id=${id}`,
          method: "PATCH",
          body: paymentData,  
        }),
        invalidatesTags: [{type: 'Employee'}]
      }),
    }),
  });
  
  export const { useUpdatePaymentEmployeeMutation } = updatePaymentEmployee;