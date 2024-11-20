

import { apiSlice } from "../../api/apiSlice";

const editHourlyRateEmployee = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        editHourlyRateEmployee: builder.mutation({
        query: ( { rateData , id}) => ({
          url: `/employee-updated/updateEmployeeHourlyRate?id=${id}`,
          method: "PATCH",
          body: rateData,  
        }),
        invalidatesTags: [{type: 'Employee'}]
      }),
    }),
  });
  
  export const {  useEditHourlyRateEmployeeMutation } = editHourlyRateEmployee;