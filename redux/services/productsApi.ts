import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ProductsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({

        /******* GET ALL PRODUCTS DATA ********/
        getAllProducts: builder.query({
            query: () => 'products/?limit=100'
        }),


        /******* GET SINGLE PRODUCT DATA ********/
        getSingleProduct: builder.query({
            query: (id) => `products/${id}`
        }),


        getSingleProductUpdate: builder.mutation({
            query: ({ id, ...bodyData }) => ({
                url: `products/${id}`,
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: bodyData
            })
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

export const { useGetAllProductsQuery, useGetSingleProductQuery, useGetProductAndDeleteMutation, useGetSingleProductUpdateMutation } = ProductsApi;
