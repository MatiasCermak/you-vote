import { configureStore } from "@reduxjs/toolkit";
import voteReducer from "./slices/voteSlice";
export default configureStore({
    reducer: {
        votes: voteReducer,
    },
});
