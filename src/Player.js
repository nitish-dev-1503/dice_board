import { useState, useEffect } from "react";
import { useDice } from './hooks/useDice';

const Player = () => {
    const [score, setScore] = useState(0);
    const [diceValue, rollDice] = useDice();

    useEffect(() => {
        setScore(score => score + diceValue);
    }, [diceValue]);

    return (
        <div className='Game-section'>
            <div className='Player1'>
                <form>
                    <p>Your Total Score: {score} </p>
                    <button onClick={rollDice}>Roll the dice</button>
                    <p>You got: {diceValue}</p>
                </form>
            </div>
        </div>
    );

}

export default Player;