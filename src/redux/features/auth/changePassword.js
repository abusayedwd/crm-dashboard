
import { apiSlice } from "../../api/apiSlice";

const changePassword = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        changePassword: builder.mutation({
            query: (value) => ({
                url: `/users/changePasswordUseingOldPassword`,
                method: "POST",
                body: value
            }) 
        })
    })
})

export const {useChangePasswordMutation} = changePassword;