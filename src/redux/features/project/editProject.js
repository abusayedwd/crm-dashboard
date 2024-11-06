
import { apiSlice } from "../../api/apiSlice";

const editProject = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      editProject: builder.mutation({
        query: ( formData) => ({
          url: `/project/updateProject`,
          method: "PATCH",
          body: formData,  
        }),
        invalidatesTags: [{type: 'Project'}]
      }),
    }),
  });
  
  export const { useEditProjectMutation } = editProject;
  