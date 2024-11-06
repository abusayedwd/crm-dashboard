


import { apiSlice } from "../../api/apiSlice";

const editService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        editService: builder.mutation({
        query: ( {formData, id}) => ({
          url: `/service/updateService?id=${id}`,
          method: "PATCH",
          body: formData,  
        }),
        invalidatesTags: [{type: 'Service'}]
      }),
    }),
  });
  
  export const {useEditServiceMutation } = editService;