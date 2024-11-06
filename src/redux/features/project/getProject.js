import { apiSlice } from "../../api/apiSlice";


const allProject = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        allProject: builder.query({
            query: () => `/project/showAllProjects`,
            providesTags: [{type: "Project"}]
        })
    })
})

export const {useAllProjectQuery} = allProject;