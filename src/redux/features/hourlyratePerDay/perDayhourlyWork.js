

import { apiSlice } from "../../api/apiSlice";


const perdayHoulyWork = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        perdayHoulyWork : builder.query({
            query: ({weekName, projectId}) => `/work-hours/showWorkHoursByProjectAndWeek?projectId=${projectId}&weekName=${weekName}`,
             
        })
    })
})

export const {usePerdayHoulyWorkQuery} = perdayHoulyWork;