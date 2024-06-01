import { createSlice } from "@reduxjs/toolkit";
import { recurrent } from 'brain.js';

const initialState = {
    human: '0',
    ai: '0',
    result: 0,
    history: [1, 1], // hydrating the array with some initial values so that the LSTM can build on it
};

export const playSlice = createSlice({
    name: 'play',
    initialState,
    reducers: {
        playHuman: (state, action) => {
            state.human = action.payload;
        },
        playAi: (state) => {
            if (state.human) {
                // state.ai = (Math.round(Math.random() * 2) + 1).toString();
                // state.ai = action.payload;

                const net = new recurrent.LSTMTimeStep();
                const trainWindow = state.history.slice(0, 7);
                net.train([trainWindow]);
                const output = Math.round(net.run([...trainWindow])).toString();
                // return(Math.round(output))

                console.log(output);
                if (output === '1') {
                    state.ai = '2';
                } else if (output === '2') {
                    state.ai = '3';
                } else {
                    state.ai = '1';
                }

                if (state.human === state.ai) {
                    state.history.push(state.human);
                    state.result = 0;
                } else if (state.human === '1') {
                    if (state.ai === '3') {
                        state.history.push(state.human);
                        state.result = -1;
                    } else {
                        state.history.push(state.human);
                        state.result = 1;
                    }
                } else if (state.human === '2') {
                    if (state.ai === '1') {
                        state.history.push(state.human);
                        state.result = -1;
                    } else {
                        state.history.push(state.human);
                        state.result = 1;
                    }
                } else {
                    // Human played scissor
                    if (state.ai === '2') {
                        state.history.push(state.human);
                        state.result = -1;
                    } else {
                        state.history.push(state.human);
                        state.result = 1;
                    }
                }
            };

        },
    }
})

export const { playHuman, playAi } = playSlice.actions;

export default playSlice.reducer;