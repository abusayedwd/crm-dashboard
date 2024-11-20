
import { apiSlice } from "../../api/apiSlice";

const editPerdayHour = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        editPerdayHour: builder.mutation({
        query: ( { values , id}) => ({
          url: `/work-hours/updateWorkHour?id=${id}`,
          method: "PATCH",
          body: values,  
        }),
        invalidatesTags: [{type: 'Employee'}]
      }),
    }),
  });
  
  export const { useEditPerdayHourMutation } = editPerdayHour;