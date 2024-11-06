import { apiSlice } from "../../api/apiSlice";

const editCustomer = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        editCustomer: builder.mutation({
        query: ( {formData, id}) => ({
          url: `/customer-add/updateCustomer?id=${id}`,
          method: "PATCH",
          body: formData,  
        }),
        invalidatesTags: [{type: 'Customer'}]
      }),
    }),
  });
  
  export const { useEditCustomerMutation } = editCustomer;