'use client';
import { useState } from 'react';

export default function Counter({ initialCount = 0, initialStep = 1}) {
    const [count, setCount] = useState(initialCount);
    const [step, setStep] = useState(initialStep);

    function handleIncrease() {
        setCount(prev => prev + step);
    }


function handleDecrease() {
    if (count - step >= 0) {
        setCount(prev => prev - step);
    }
}

function handleReset() {
    setCount(0);
}

function handleStepChange(e) {
    const newStep = Number(e.target.value);
    if (newStep >= 1) {
        setStep(newStep);
    }
}

return (
    <div>
        <p aria-live="polite">Current Count: {count}</p>
        <button onClick={handleIncrease}>+{step}</button>
        <button onClick={handleDecrease} disabled={count - step < 0}>-{step}</button>
        <button onClick={handleReset}>Reset</button>
        <div>
            <label htmlFor="step">Step: </label>
            <input
                id="step"
                type="number"
                value={step}
                onChange={handleStepChange}
                min="1"
                />
        </div>
    </div>
    );
}