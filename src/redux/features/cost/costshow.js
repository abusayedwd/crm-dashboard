


import { apiSlice } from "../../api/apiSlice"; 
const allcost = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        allcost: builder.query({
            query: ({Year: year, projectId: selectedProject, month: month}) => 
                `/cost-in/getAllCosts?projectId=${selectedProject}&month=${month}&Year=${year}`,
            providesTags: [{type: "Customer"}]
        })
    })
})

export const {useAllcostQuery} = allcost;