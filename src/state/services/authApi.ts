import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export interface User {
  id: number,
  email: string,
  is_authenticated: boolean,
  is_superuser: boolean,
  is_staff: boolean,
  is_verified: boolean,
}

export interface UserResponse {
  user: User
}

export interface LoginRequest {
  username: string
  password: string
}

export const authApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_BASE_URL, credentials: "include" }),
  endpoints: (builder) => ({
    usernamePasswordLogin: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'api/v1/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})

export const { useUsernamePasswordLoginMutation } = authApi
