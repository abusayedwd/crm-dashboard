
import { apiSlice } from "../../api/apiSlice"; 
const allEmployee = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        allEmployee: builder.query({
            query: () => `/employee-add/getAllEmployees`,
            providesTags: [{type: "Employee"}]
        })
    })
})

export const {useAllEmployeeQuery} = allEmployee;