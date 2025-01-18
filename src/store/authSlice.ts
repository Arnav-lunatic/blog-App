import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface authState {
    status: boolean;
    userData: null,
}

// Define the initial state using that type
const initialState: authState = {
    status: false,
    userData: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null
        }
	},
});

export const { login, logout} = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default authSlice.reducer;
