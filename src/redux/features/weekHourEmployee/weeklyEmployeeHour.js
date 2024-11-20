


import { apiSlice } from "../../api/apiSlice";


const weeklyEmployeeHour = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        weeklyEmployeeHour: builder.query({
            query: (projectId ) => `/work-hours/showWorkHoursByProjecWeek?projectId=${projectId}`, 
        })
    })
})

export const {useWeeklyEmployeeHourQuery} = weeklyEmployeeHour;