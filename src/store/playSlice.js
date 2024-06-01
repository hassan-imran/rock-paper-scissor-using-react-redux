import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    human: 0,
    ai: 0,
    history: [],
};

export const playSlice = createSlice({
    name: 'play',
    initialState,
    reducers: {
        playHuman: (state, action) => {
            state.human = action.payload;
        },
        playAi: (state) => {
            if(state.human){
                state.ai = (Math.round(Math.random() * 2) + 1).toString();
                if (state.human === state.ai) {
                    state.history.push(0);
                  } else if (state.human === '1') {
                    if (state.ai === '3') {
                      state.history.push(-1);
                    } else {
                      state.history.push(1)
                    }
                  } else if (state.human === '2') {
                    if (state.ai === '1') {
                      state.history.push(-1)
                    } else {
                      state.history.push(1)
                    }
                  } else {
                    // Human played scissor
                    if (state.ai === '2') {
                      state.history.push(-1)
                    } else {
                      state.history.push(1);
                    }
                  }
            };
            
        },
    }
})

export const {playHuman, playAi} = playSlice.actions;

export default playSlice.reducer;