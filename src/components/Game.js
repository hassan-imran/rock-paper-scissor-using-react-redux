import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { playHuman, playAi } from '../store/playSlice';
import { recurrent } from 'brain.js';

const Game = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.play);
    const [loading, setLoading] = useState(false);

    console.log(state);

    const buttonHandler = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            dispatch(playHuman(e.target.value));
            dispatch(playAi());
            setLoading(false);
        }, 0)
    }

    const ResultOutput = (res) => {
        if (res === 0) {
            return ("Tie!")
        }
        else if (res < 0) {
            return ("Human won!");
        }
        else return ("AI won!");
    }

    const decodeOption = (x) => {
        if (x) {
            switch (x) {
                case '1':
                    return ("Rock 🪨");
                case '2':
                    return ("Paper 📃");
                case '3':
                    return ("Scissors ✂️");
                default:
                    return ("Waiting...")
            }
        } else {
            return ("Waiting")
        }
    }

    const Output = () => {
        return (
            <div>
                <p>Human move: {decodeOption(state.human)}</p>
                <p>AI move: {decodeOption(state.ai)}</p>
                Result: {ResultOutput(state.result)}
            </div>
        )
    }

    const Ai = () => {

        // const net = new recurrent.LSTMTimeStep();
        // net.train([[1, 2, 3, 1, 2, 3, 1]]);
        // const output = net.run([1, 2, 3, 1]); // 3

        const net = new recurrent.LSTMTimeStep();
        net.train([state.history]);
        const output = net.run([...state.history]); // 3
        return (Math.round(output))
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


            {loading ? (
                <div className="progress mt-3">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '100%' }}></div>
                </div>
            ) : <Output />}

        </div>
    )
}

export default Game