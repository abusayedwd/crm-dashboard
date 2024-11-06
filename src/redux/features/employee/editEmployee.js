import { apiSlice } from "../../api/apiSlice";

const editEmployee = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        editEmployee: builder.mutation({
        query: ( {formData, id}) => ({
          url: `/employee-add/updateEmployee?id=${id}`,
          method: "PATCH",
          body: formData,  
        }),
        invalidatesTags: [{type: 'Employee'}]
      }),
    }),
  });
  
  export const { useEditEmployeeMutation } = editEmployee;