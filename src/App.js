import { useEffect, useState } from 'react';
import Game from './components/Game';

function App() {
  const [play, setPlay] = useState('');
  const [aiPlay, setAiPlay] = useState('');
  const [winner, setWinner] = useState('');

  const moves = ['rock', 'paper', 'scissor'];



  const buttonHandler = async (e) => {
    e.preventDefault();
    setPlay(e.target.value);
    predictAi();
  }

  const predictAi = () => {
    setAiPlay(Math.round(Math.random() * 2).toString());
    // callbackFn();
    // console.log(play, aiPlay, winner);
  }

  const decideWinner = () => {
    console.log(play === aiPlay)
    if (play === aiPlay) {
      setWinner('Draw');
    } else if (play === '0') {
      if (aiPlay === '2') {
        setWinner('Human wins!');
      } else {
        setWinner('AI wins!');
      }
    } else if (play === '1') {
      if (aiPlay === '0') {
        setWinner('Human wins!')
      } else {
        setWinner('AI wins!');
      }
    } else {
      // Human played scissor
      if (aiPlay === '1') {
        setWinner('Human wins!')
      } else {
        setWinner('AI wins!');
      }
    }
  }

  // useEffect(() => {
  //   decideWinner()
  //   console.log(play, aiPlay, winner);
  // }, [play, aiPlay, winner, decideWinner]);

  return (
    <div className="App">
      <h1>Welcome to Outplay</h1>

      <Game />

      {/* <div>
        <p>Human move: {moves[play]}</p>
        <p>AI move: {moves[aiPlay]}</p>
        Result: {winner}
      </div> */}



    </div>
  );
}

export default App;
