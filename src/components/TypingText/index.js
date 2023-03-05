import {useEffect, useState} from 'react';

export default function TypingText(text, speed = 50) {
    const [currentText, setCurrentText] = useState('');

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= text.length) {
                setCurrentText(text.substring(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text]);

    return currentText;
}
