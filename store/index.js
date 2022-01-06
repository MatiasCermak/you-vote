import appSlice from "./slices/appSlice";
import { configureStore } from "@reduxjs/toolkit";
import voteSlice from "./slices/voteSlice";
export default configureStore({
    reducer: {
        votes: voteSlice.reducer,
        app: appSlice.reducer,
    },
});
