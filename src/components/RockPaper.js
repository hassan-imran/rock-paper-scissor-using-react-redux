import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { playHuman, playAi } from '../store/playSlice';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

const RockPaper = () => {
    const dispatch = useDispatch();
    const { human, ai, result, huScore, aiScore, tScore, history } = useSelector((state) => state.play);
    const [loading, setLoading] = useState(false);

    const winningResponses = [
        "Maybe try a little harder next time! 😏",
        "Are you even putting in any effort? 💅",
        "Is this all you got? 😎",
        "Might get boring if you keep losing. 🤷‍♂️"
    ];

    const tieResponses = [
        "Great minds think alike. 😎",
        "Didn't think you'd be looking at my hand! 😠",
        "Seriously? The same option? 👀",
        "Is this love? 👉👈🫰"
    ];

    const losingResponses = [
        "Wow, you bet a dumb computer! 😏",
        "Hmmm.. Interesting choice. 🤔✍️",
        "Don't worry, I'll catch up pretty fast! 🏎️✍️",
        "If you put so much effort in other parts of your life, you wouldn't be fighting a computer in a game.. lmfao 😂😂"
    ]

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
        else if (res === -1) {
            return ("You won!");
        }
        else if (res === 1) {
            return ("AI won!");
        } else {
            return ("Waiting for the first move...");
        }
    }

    const decodeOption = (x) => {
        if (x) {
            switch (x) {
                case 1:
                    return (
                        <Card className='col-4'>
                            <Card.Body>
                                <Card.Title className='display-6'>🪨</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Rock</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    )
                case 2:
                    return (
                        <Card className='col-4'>
                            <Card.Body>
                                <Card.Title className='display-6'>📃</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Paper</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    )
                case 3:
                    return (
                        <Card className='col-4'>
                            <Card.Body>
                                <Card.Title className='display-6'>✂️</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Scissors</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    )
                default:
                    return (
                        <Card className='col-4'>
                            <Card.Body>
                                <Card.Title className='display-6'>⌛</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Waiting for the first move..</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    )
            }
        } else {
            return (
                <Card className='col-4'>
                    <Card.Body>
                        <Card.Title className='display-6'>⌛</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Waiting for the first move..</Card.Subtitle>
                    </Card.Body>
                </Card>
            )
        }
    }

    const genResponse = (input) => {
        if (input === -2) {
            return;
        }
        const i = Math.floor(Math.random() * 4);
        if (input === 1) {
            return winningResponses[i];
        }
        else if (input < 0) {
            return losingResponses[i];
        } else {
            return tieResponses[i];
        }
    }

    const Output = () => {
        return (
            <div>

                <div className='d-flex justify-content-between my-3 align-items-center'>
                    {decodeOption(human)}
                    <h4 className='display-6'>VS</h4>
                    {decodeOption(ai)}
                </div>

                <Card bg={'primary'} text='white' className='p-2 '>
                    <Card.Title><span className=''>{ResultOutput(result)}</span></Card.Title>
                    <Card.Text>{genResponse(result)}</Card.Text>
                </Card>

                <Table striped bordered hover className='text-center mt-3'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>🙋‍♂️ (Human)</th>
                            <th>Ties</th>
                            <th>🤖 (AI)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Scores</th>
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
            <h1 className='mt-3 mb-5 display-2'>Rock, Paper, Scissors</h1>
            <div className="d-grid gap-2 col-sm-8 col-md-6 col-xl-5  mx-auto ">

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

                <Card bg={'light'} >
                    <Card.Body><span className='fw-bold'>Note:</span> To reset the scores & the model, just reload the page.</Card.Body>
                </Card>

            </div>



        </div>
    )
}

export default RockPaper