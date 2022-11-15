import { useState, useEffect } from "react";
import { useDice } from '../hooks/useDice';

import logo from '../assets/reach50.svg';

const Reach50 = () => {
    const [score, setScore] = useState(0);
    const [step, setStep] = useState(-1);
    const [isWon, setIsWon] = useState(null);

    const [diceValue, rollDice] = useDice();

    useEffect(() => {
        const newScore = score + diceValue;
        const newStep = step + 1;
        setScore(newScore);
        setStep(newStep);
        setIsWon(checkGameStatus(newStep, newScore));
    }, [diceValue]);

    const checkGameStatus = (step, score) => {
        var won = null;
        if (step === 15) {
            won = score >= 50;
        }
        if (score >= 50) {
            won = step <= 15;
        }
        return won;
    }

    const resetPlayer = (event) => {
        event.preventDefault();
        setScore(0);
        setStep(0);
        setIsWon(null);
    }

    return (
        <div className="game">
            <img src={logo} className="h-20 my-10" alt="reach50-logo" />
            <div className="text-left bg-teal-50 p-6 rounded-lg m-4">
                <p className="font-medium">How to play?</p>
                <p>Roll the dice to score points and score 50 or more in at most 15 steps to win.</p>
            </div>

            <p className="my-2 font-medium">Your Score</p>
            <p className=" text-6xl text-secondary font-bold ">{score}</p>

            <button onClick={rollDice} disabled={isWon !== null} className="btn-primary">Roll the dice</button>
            {diceValue
                ? <p>You got: {diceValue}</p>
                : <p>roll the dice to play</p>}

            <p className="my-2">Your have played <span className="text-secondary">{step} steps</span></p>

            <div className="h-20">
                {isWon === null
                    ? null
                    : isWon === true
                        ? <p className="text-2xl text-secondary my-2">Hurray!!! You have scored a 50.<br />YOU WON</p>
                        : <p className="text-2xl text-secondary my-2">GAME OVER!!! </p>}
            </div>

            <button onClick={resetPlayer} disabled={isWon === null} className="btn-primary">Replay</button>

        </div>
    );

}

export default Reach50;