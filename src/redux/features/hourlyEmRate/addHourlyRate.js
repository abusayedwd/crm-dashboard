
import { apiSlice } from "../../api/apiSlice";

const addHourlyRate = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addHourlyRate: builder.mutation({
            query: (value) => ({
                url: `/employee-hourlyRate/createHourlyRate`,
                method: "POST",
                body: value
            }) ,
            invalidatesTags: [{type: 'Employee'}]
        })
    })
})

export const {useAddHourlyRateMutation} = addHourlyRate;