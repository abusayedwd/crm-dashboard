import { apiSlice } from "../../api/apiSlice";


const singleProject = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        singleProject: builder.query({
            query: (id) => `/project/showProjectById?id=${id}`,
             
        }),
        
    })
})

export const {useSingleProjectQuery} = singleProject;