import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Picture } from "./picturesApi";

export type ProductType = {
  kind: string;
  name: string;
  description: string;
  color?: string;
  price: number;
  pictures?: Picture[];
};

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BACKEND_BASE_URL}/api/`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductType[], Record<string, string> | void>({
      query: (params?: Record<string, string>) => {
        if (params) {
          const q = new URLSearchParams(params);
          return `products/?${q.toString()}`;
        }
        return "products/";
      },
    }),
    getProductDetail: builder.query({
      query: (id: number) => `products/${id}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductDetailQuery } = productsApi;
