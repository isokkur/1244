import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [primeNumbers, setPrimeNumbers] = useState([]);

    const isPrime = num => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    };

    useEffect(() => {
        let num = 2;
        const timer = setInterval(() => {
            if (isPrime(num)) {
                setPrimeNumbers(prevNumbers => [...prevNumbers, num]);
            }
            num++;
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return <div>{primeNumbers.join(', ')}</div>;
};

export default Timer;