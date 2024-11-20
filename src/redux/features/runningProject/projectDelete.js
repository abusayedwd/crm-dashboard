

import { apiSlice } from "../../api/apiSlice";

const projectDelete = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        projectDelete: builder.mutation({
            query: (id) => ({
                url: `/project-list/deleteProject?id=${id}`,
                method: "DELETE"
            }),
            invalidatesTags: [{type: "Project"}]
        })
    })
})

export const {useProjectDeleteMutation} = projectDelete;