

import { apiSlice } from "../../api/apiSlice"; 

const hourlyRatEmployee = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        hourlyRatEmployee: builder.query({
            query: () => `/employee-hourlyRate/getAllHourlyRates`,
            providesTags: [{type: "Employee"}]
        })
    })
})

export const {useHourlyRatEmployeeQuery} = hourlyRatEmployee;