import { apiSlice } from "../../api/apiSlice";


const deleteHourlyRateEmployee = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        deleteHourlyRateEmployee: builder.mutation({
            query: (id) => ({
                url: `/employee-hourlyRate/deleteHourlyRate?id=${id}`,
                method: "DELETE"
            }),
            invalidatesTags: [{type: 'Employee'}]
        })
    })
})

export const {useDeleteHourlyRateEmployeeMutation} = deleteHourlyRateEmployee;