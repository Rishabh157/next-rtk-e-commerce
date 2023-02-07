import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { url } from 'inspector';

export const ProductsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({

        /******* GET ALL PRODUCTS DATA ********/
        getAllProducts: builder.query({
            query: () => 'products/'
        }),


        /******* GET ALL PRODUCTS DATA ********/
        getSingleProduct: builder.query({
            query: (id) => `products/${id}`
        }),

        /******* DELETE A SINGLE PRODUCT ********/
        getProductAndDelete: builder.mutation({
            query: ({ id }) => ({
                url: `products/${id}`,
                method: "DELETE"
            })
        })
    }),
})

export const { useGetAllProductsQuery, useGetSingleProductQuery, useGetProductAndDeleteMutation } = ProductsApi;
