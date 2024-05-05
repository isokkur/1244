import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [count, setCount] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prevCount => prevCount - 1);
        }, 1000);

        if (count === 0) {
            clearInterval(timer);
        }

        return () => clearInterval(timer);
    }, [count]);

    return <div>{count}</div>;
};

export default Timer;