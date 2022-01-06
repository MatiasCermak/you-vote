import { createSlice } from "@reduxjs/toolkit";

export const voteSlice = createSlice({
    name: "votes",
    initialState: {
        elections: [],
    },
    reducers: {
        castVote: (state, action) => {
            console.log(JSON.stringify(state.elections));
            state.elections[action.payload.election - 1].currentVotes += 1;
            state.elections[action.payload.election - 1].options[action.payload.option].curentVotes += 1;
        },
        setElections: (state, action) => {
            state.elections = action.payload.elections;
        },
    },
});

// Action creators are generated for each case reducer function
export const { castVote, setElections } = voteSlice.actions;

export default voteSlice;
