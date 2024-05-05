import React, { useState, useEffect } from 'react';

const Revert = ({ s }) => {
    const [revertedString, setRevertedString] = useState(s);

    useEffect(() => {
        const interval = setInterval(() => {
            const lastChar = revertedString.charAt(revertedString.length - 1);
            const newString =
                lastChar + revertedString.substring(0, revertedString.length - 1);
            setRevertedString(newString);
        }, 1000);

        return () => clearInterval(interval);
    }, [revertedString]);

    return <div>{revertedString}</div>;
};

export default Revert;