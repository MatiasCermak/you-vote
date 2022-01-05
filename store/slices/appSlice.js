import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        email: "",
        password: "",
    },
    reducers: {
        setEmail: (state, action) => {
            console.log(action.payload.email);
            state.email = action.payload.email;
        },
        setPassword: (state, action) => {
            state.password = action.payload.password;
        },
    },
});

export const { setEmail, setPassword } = appSlice.actions;
export default appSlice;
