
import { apiSlice } from "../../api/apiSlice";

const addProject = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addProject: builder.mutation({
            query: (value) => ({
                url: `/project/createProject`,
                method: "POST",
                body: value
            }) ,
            invalidatesTags: [{type: 'Project'}]
        })
    })
})

export const {useAddProjectMutation} = addProject;