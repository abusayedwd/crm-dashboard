

import { apiSlice } from "../../api/apiSlice";


const projectList = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        projectList: builder.query({
            query: () => `/project-list/getAllProjectNames`,
             
        })
    })
})

export const {useProjectListQuery} = projectList;