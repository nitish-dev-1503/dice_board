import { useState, useEffect } from "react";
import { useDice } from '../hooks/useDice';

import logo from '../assets/sevroll.svg';

const SevRoll = () => {
    const [score, setScore] = useState(0);
    const [isWon, setIsWon] = useState(false);
    const [diceValue, rollDice] = useDice();

    useEffect(() => {
        const newScore = score + diceValue;
        setScore(newScore);
        setIsWon(newScore !== 0 && newScore % 7 === 0);
    }, [diceValue]);


    const resetPlayer = (event) => {
        event.preventDefault();
        setScore(0);
        setIsWon(false);
    }

    return (
        <div className="game">
            <img src={logo} className="h-20 my-10" alt="logo" />
            <div className="text-left bg-teal-50 p-6 rounded-lg m-4">
                <p className="font-medium">How to play?</p>
                <p>Roll the dice to score points and score a multiple of 7 to win.</p>
            </div>

            <p className="my-2 font-medium">Your Score</p>
            <p className=" text-6xl text-secondary font-bold ">{score}</p>
            <button onClick={rollDice} disabled={isWon} className="btn-primary">Roll the dice</button>
            {diceValue ? <p>You got: {diceValue}</p> : <p>roll the dice to play</p>}

            <div className="h-20">
                {isWon === false
                    ? null
                    : <p className="text-2xl text-secondary my-2">Hurray!!! You have scored a multiple of 7.<br />YOU WON</p>}
            </div>
            <button onClick={resetPlayer} disabled={!isWon} className="btn-primary">Replay</button>

        </div>
    );

}

export default SevRoll;