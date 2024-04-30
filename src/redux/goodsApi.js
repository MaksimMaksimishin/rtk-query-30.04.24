import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'http://localhost:3001';

export const goodsApi = createApi({
  reducerPath: 'goodsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Goods'],
  endpoints: (build) => ({
    getGoods: build.query({
      query: () => 'goods',
      providesTags: ['Goods'],
    }),
    addGood: build.mutation({
      query: (body) => ({
        url: 'goods',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Goods'],
    }),
    removeGood: build.mutation({
      query: (id) => ({
        url: `goods/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Goods'],
    }),
    
    updateGood: build.mutation({
      query: ({ id, name }) => ({
        url: `goods/${id}`,
        method: 'PUT',
        body: { name },
      }),
      invalidatesTags: ['Goods'],
    }),
  }),
});

export const { useGetGoodsQuery, useAddGoodMutation, useRemoveGoodMutation, useUpdateGoodMutation } = goodsApi;
