import { Picture } from "../../../../state/services/picturesApi";
import { apiSlice } from "../../../../state/services/shared/apiSlice";

export type ProductType = {
  id: number,
  kind: string;
  name: string;
  description: string;
  color?: string;
  price: number;
  pictures?: Picture[];
};

export const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductType[], Record<string, string> | void>({
      query: (params?: Record<string, string>) => {
        if (params) {
          const q = new URLSearchParams(params);
          return `products/?${q.toString()}`;
        }
        return "products/";
      },
      providesTags: ["Products"]
    }),
    getProductDetail: builder.query({
      query: (id: number) => `products/${id}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductDetailQuery } = productsApi;
