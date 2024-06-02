import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { playHuman, playAi } from '../store/playSlice';
import Table from 'react-bootstrap/Table';

const Game = () => {
    const dispatch = useDispatch();
    const { human, ai, result, huScore, aiScore, tScore, history } = useSelector((state) => state.play);
    const [loading, setLoading] = useState(false);

    console.log(human, ai, result, history);

    const buttonHandler = async (e) => {
        e.preventDefault();

        setLoading(true);
        setTimeout(() => {

            dispatch(playHuman(parseInt(e.target.value)));
            dispatch(playAi());
            setLoading(false);
        }, 500)

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
                case 1:
                    return ("Rock 🪨");
                case 2:
                    return ("Paper 📃");
                case 3:
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
                <p>Human move: {decodeOption(human)}</p>
                <p>AI move: {decodeOption(ai)}</p>
                <p>Result: {ResultOutput(result)}</p>


                <Table striped bordered hover className='text-center'>
                    <thead>
                        <tr>
                            <th>🙋‍♂️ (Human)</th>
                            <th>Ties</th>
                            <th>🤖 (AI)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{huScore}</td>
                            <td>{tScore}</td>
                            <td>{aiScore}</td>
                        </tr>
                    </tbody>
                </Table>

            </div>
        )
    }

    return (
        <div>
            <div className="d-grid gap-2 col-5 mx-auto">

                <Button variant='dark' size='lg' value={1} onClick={(e) => buttonHandler(e)} disabled={loading}>
                    Rock 🪨
                </Button>

                <Button variant='dark' size='lg' value={2} onClick={(e) => buttonHandler(e)} disabled={loading}>
                    Paper 📃
                </Button>

                <Button variant='dark' size='lg' value={3} onClick={(e) => buttonHandler(e)} disabled={loading}>
                    Scissor ✂️
                </Button>

                {loading ? (
                    <div className="progress mt-3">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '100%' }}></div>
                    </div>
                ) : <Output />}

            </div>



        </div>
    )
}

export default Game