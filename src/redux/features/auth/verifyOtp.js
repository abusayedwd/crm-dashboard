

import { apiSlice } from "../../api/apiSlice";

const verifyOpt = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        verifyOpt: builder.mutation({
            query: (value) => ({
                url: `/users/verify-code`,
                method: "POST",
                body: value
            }) 
        })
    })
})

export const {useVerifyOptMutation} = verifyOpt;