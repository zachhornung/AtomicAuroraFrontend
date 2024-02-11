import { apiSlice } from "../../../../state/services/shared/apiSlice"


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

export interface GoogleLoginRequest {
  code?: string
}

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    usernamePasswordLogin: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: "authentication/login/",
        method: "POST",
        body: credentials,
      }),
    }),
    googleLogin: builder.mutation<UserResponse, GoogleLoginRequest>({
      query: (googleCredentials) => ({
        url: "authentication/google/",
        method: "POST",
        body: googleCredentials,
      })
    })
  }),
})

export const { 
  useUsernamePasswordLoginMutation,
  useGoogleLoginMutation,
} = authApi
