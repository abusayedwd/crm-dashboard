
import { apiSlice } from "../../api/apiSlice";

const addCost = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addCost: builder.mutation({
            query: (value) => ({
                url: `/cost-in/createCost`,
                method: "POST",
                body: value
            }) ,
            invalidatesTags: [{type: 'Customer'}]
        })
    })
})

export const {useAddCostMutation} = addCost;