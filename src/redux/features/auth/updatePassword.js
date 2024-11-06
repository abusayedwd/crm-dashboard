

import { apiSlice } from "../../api/apiSlice";

const updatePassword = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updatePassword: builder.mutation({
            query: (value) => ({
                url: `/users/cahngePassword`,
                method: "POST",
                body: value
            }) 
        })
    })
})

export const {useUpdatePasswordMutation} = updatePassword;