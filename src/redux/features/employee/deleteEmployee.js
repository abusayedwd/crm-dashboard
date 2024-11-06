import { apiSlice } from "../../api/apiSlice";

const deleteEmployee = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        deleteEmployee: builder.mutation({
            query: (id) => ({
                url: `/employee-add/deleteEmployee?id=${id}`,
                method: "DELETE"
            }),
            invalidatesTags: [{type: "Employee"}]
        })
    })
})

export const {useDeleteEmployeeMutation} = deleteEmployee;