

import { apiSlice } from "../../api/apiSlice";

const projectAdd = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        projectAdd: builder.mutation({
            query: (value) => ({
                url: `/project-list/createProject`,
                method: "POST",
                body: value
            }) ,
            invalidatesTags: [{type: 'Project'}]
        })
    })
})

export const {useProjectAddMutation} = projectAdd;