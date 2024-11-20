

import { apiSlice } from "../../api/apiSlice";

const updateProject = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updateProject: builder.mutation({
        query: ({  data, id}) => ({
          url: `/project-list/updateProject?id=${id}`,
          method: "PATCH",
          body: data,  
        }),
        invalidatesTags: [{type: 'Project'}]
      }),
    }),
  });
  
  export const { useUpdateProjectMutation } = updateProject;