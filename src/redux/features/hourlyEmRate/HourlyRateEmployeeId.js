
import { apiSlice } from "../../api/apiSlice"; 
const singleEmployeeHourly = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        singleEmployeeHourly: builder.query({
            query: (id) => `/employee-hourlyRate/getHourlyRateById?id=${id}`,
             
        })
    })
})

export const {useSingleEmployeeHourlyQuery} = singleEmployeeHourly;