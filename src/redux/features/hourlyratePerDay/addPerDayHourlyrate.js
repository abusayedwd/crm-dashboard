

import { apiSlice } from "../../api/apiSlice";


const addPerDayHourlyrate = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addPerDayHourlyrate : builder.mutation({
            query: (value) => ({
               url: `/work-hours/createWorkHour`,
               method: "POST",
               body: value ,
            }) 
             
        })
    })
})

export const { useAddPerDayHourlyrateMutation} = addPerDayHourlyrate;