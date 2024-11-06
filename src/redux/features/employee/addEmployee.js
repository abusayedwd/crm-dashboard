


import { apiSlice } from "../../api/apiSlice";

const addEmployee = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addEmployee: builder.mutation({
            query: (value) => ({
                url: `/employee-add/createEmployee`,
                method: "POST",
                body: value
            }) ,
            invalidatesTags: [{type: 'Customer'}]
        })
    })
})

export const {useAddEmployeeMutation} = addEmployee;