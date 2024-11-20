
import { apiSlice } from "../../api/apiSlice";


const showAllProject = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        showAllProject: builder.query({
            query: () => `/project-list/getAllProjects`,
            providesTags: [{type: "Project"}]
        })
    })
})

export const {useShowAllProjectQuery} = showAllProject;