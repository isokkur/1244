//не совсем понятно задание :/
import React, { useState, useEffect } from 'react';

const TrafficLight = () => {
    const [currentColor, setCurrentColor] = useState('red');

    useEffect(() => {
        const colors = ['red', 'yellow', 'green'];
        let currentIndex = 0;

        const interval = setInterval(() => {
            setCurrentColor(colors[currentIndex]);
            currentIndex = (currentIndex + 1) % colors.length;
        }, 2000); // Смена цветов каждые 2 секунды

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: currentColor,
                    borderRadius: '50%',
                    margin: '20px auto',
                }}
            />
        </div>
    );
};

export default TrafficLight;