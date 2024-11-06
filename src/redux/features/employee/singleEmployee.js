import { apiSlice } from "../../api/apiSlice"; 
const singleEmployee = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        singleEmployee: builder.query({
            query: (id) => `/employee-add/getEmployeeById?id=${id}`,
             
        })
    })
})

export const {useSingleEmployeeQuery} = singleEmployee;