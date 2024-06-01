import React from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { playHuman, playAi } from '../store/playSlice';

const Game = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.play);

    console.log(state);

    const buttonHandler = (e) => {
        e.preventDefault();
        dispatch(playHuman(e.target.value));
        dispatch(playAi());
    }

    const Result = (res) => {
        if (res) {
            if (res < 0) {
                return ("Human won!");
            }
            else return ("AI won!");
        } else return ("Tie!");
    }

    const decodeOption = (x) => {
        if(x) {
            switch(x) {
                case '1':
                    return("Rock");
                case '2':
                    return("Paper");
                case '3':
                    return("Scissors");
            }
        } else {
            return("No option selected!")
        }
    }

    const Output = () => {
        return (
            <div>
                <p>Human move: {decodeOption(state.human)}</p>
                <p>AI move: {decodeOption(state.ai)}</p>
                Result: {Result(state.history.at(-1))}
            </div>
        )
    }

    return (
        <div>

            <Button variant='primary' value={'1'} onClick={(e) => buttonHandler(e)}>
                Rock
            </Button>

            <Button variant='success' value={'2'} onClick={(e) => buttonHandler(e)}>
                Paper
            </Button>

            <Button variant='danger' value={'3'} onClick={(e) => buttonHandler(e)}>
                Scissor
            </Button>

            <Output />

        </div>
    )
}

export default Game