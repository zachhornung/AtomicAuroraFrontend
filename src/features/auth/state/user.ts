import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { UserResponse } from "./services/authApi"

type UserState = {
  userState?: {
    id: number,
    email: string,
    isAuthenticated: boolean,
    isSuperUser: boolean,
    isStaff: boolean,
    isVerified: boolean,
  }
}

const internalInitialState: UserState = {}

export const userSlice = createSlice({
  name: "userState",
  initialState: internalInitialState,
  reducers: {
    newUserState: (state, action: PayloadAction<UserResponse>) => {
      const { user } = action.payload
      const userData = {
        id: user.id,
        email: user.email,
        isAuthenticated: user.is_authenticated,
        isSuperUser: user.is_superuser,
        isStaff: user.is_staff,
        isVerified: user.is_verified,
      }
      state.userState = userData
    },
    resetUserState: () => internalInitialState,
  }
})

export const {
  newUserState,
  resetUserState,
} = userSlice.actions

export default userSlice.reducer
