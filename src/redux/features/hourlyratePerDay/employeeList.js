

import { apiSlice } from "../../api/apiSlice";


const employeeList = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        employeeList: builder.query({
            query: () => `/employee-add/getAllEmployeeNames`,
             
        })
    })
})

export const {useEmployeeListQuery} = employeeList;