import { useState } from "react"

export const useDice = () => {
    const [diceValue, setDiceValue] = useState(0);

    const rollDice = (event) => {
        event.preventDefault();
        const newDiceValue = Math.floor(Math.random() * 6) + 1;
        setDiceValue(newDiceValue);
    };

    return [diceValue, rollDice]
}