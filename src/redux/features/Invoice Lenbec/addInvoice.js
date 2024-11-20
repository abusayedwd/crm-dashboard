
import { apiSlice } from "../../api/apiSlice";

const addInvoice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addInvoice: builder.mutation({
            query: (value) => ({
                url: `/invoice-project/createInvoiceProject`,
                method: "POST",
                body: value
            }) ,
            invalidatesTags: [{type: 'Project'}]
        })
    })
})

export const {useAddInvoiceMutation} = addInvoice;