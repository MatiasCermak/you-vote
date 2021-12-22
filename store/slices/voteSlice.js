import { createSlice } from "@reduxjs/toolkit";

export const voteSlice = createSlice({
    name: "votes",
    initialState: {
        elections: [
            {
                title: "¿A donde quieren salir?",
                description: "Placeholder",
                totalVotes: 120,
                currentVotes: 79,
                key: 1,
                options: [
                    { optionTitle: "Parque", curentVotes: 200 },
                    { optionTitle: "Campo", curentVotes: 123 },
                    { optionTitle: "Playa", curentVotes: 150 },
                    { optionTitle: "Montaña", curentVotes: 250 },
                ],
            },
            {
                title: "¿Quien es el mejor corredor de F1?",
                description: "Placeholder",
                totalVotes: 120,
                currentVotes: 79,
                key: 2,
                options: [
                    { optionTitle: "Max Verstappen", curentVotes: 10 },
                    { optionTitle: "Michael Schumacher", curentVotes: 50 },
                    { optionTitle: "Kimi Raikonnen", curentVotes: 5 },
                    { optionTitle: "Ayrton Senna", curentVotes: 14 },
                ],
            },
            {
                title: "¿A donde vamos?",
                description: "Placeholder",
                totalVotes: 12123,
                currentVotes: 723,
                key: 3,
                options: [
                    { optionTitle: "Parque", curentVotes: 200 },
                    { optionTitle: "Campo", curentVotes: 123 },
                    { optionTitle: "Playa", curentVotes: 150 },
                    { optionTitle: "Montaña", curentVotes: 250 },
                ],
            },
            {
                title: "¿A donde quieren salir?",
                description: "Placeholder",
                totalVotes: 120,
                currentVotes: 79,
                key: 4,
                options: [
                    { optionTitle: "Parque", curentVotes: 200 },
                    { optionTitle: "Campo", curentVotes: 123 },
                    { optionTitle: "Playa", curentVotes: 150 },
                    { optionTitle: "Montaña", curentVotes: 250 },
                ],
            },
            {
                title: "¿A donde quieren salir?",
                description: "Placeholder",
                totalVotes: 120,
                currentVotes: 79,
                key: 5,
                options: [
                    { optionTitle: "Club", curentVotes: 10 },
                    { optionTitle: "Restaurant", curentVotes: 50 },
                    { optionTitle: "Bowling", curentVotes: 5 },
                    { optionTitle: "Fiesta", curentVotes: 14 },
                ],
            },
            {
                title: "¿A donde quieren salir?",
                description: "Placeholder",
                totalVotes: 120,
                currentVotes: 79,
                key: 6,
                options: [
                    { optionTitle: "Club", curentVotes: 10 },
                    { optionTitle: "Restaurant", curentVotes: 50 },
                    { optionTitle: "Bowling", curentVotes: 5 },
                    { optionTitle: "Fiesta", curentVotes: 14 },
                ],
            },
            {
                title: "¿Quien es el mejor corredor de F1?",
                description: "Placeholder",
                totalVotes: 120,
                currentVotes: 79,
                key: 7,
                options: [
                    { optionTitle: "Max Verstappen", curentVotes: 10 },
                    { optionTitle: "Michael Schumacher", curentVotes: 50 },
                    { optionTitle: "Kimi Raikonnen", curentVotes: 5 },
                    { optionTitle: "Ayrton Senna", curentVotes: 14 },
                ],
            },
        ],
    },
    reducers: {
        castVote: (state, action) => {
            console.log(action.payload);
            state.elections[action.payload.election - 1].currentVotes += 1;
            state.elections[action.payload.election - 1].options[action.payload.option].curentVotes += 1;
        },
    },
});

// Action creators are generated for each case reducer function
export const { castVote } = voteSlice.actions;

export default voteSlice.reducer;
