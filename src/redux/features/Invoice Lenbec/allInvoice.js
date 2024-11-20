

import { apiSlice } from "../../api/apiSlice";


const allInvoice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        allInvoice: builder.query({
            query: () => `/invoice-project/showAllInvoiceProjects`,
            providesTags: [{type: "Project"}]
        })
    })
})

export const {useAllInvoiceQuery} = allInvoice;