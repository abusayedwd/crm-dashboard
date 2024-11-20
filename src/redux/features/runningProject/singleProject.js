

import { apiSlice } from "../../api/apiSlice";


const singleProjectById = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        singleProjectById: builder.query({
            query: (id) => `/project-list/getProjectById?id=${id}`,
             
        }),
        
    })
})

export const {useSingleProjectByIdQuery} = singleProjectById;