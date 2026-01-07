"use client";

import { useEffect, useState } from "react";

interface ScrambleTextProps {
    text: string;
    className?: string;
    speed?: number;
    scrambleSpeed?: number;
    characters?: string;
    delay?: number;
}

export default function ScrambleText({
    text,
    className = "",
    speed = 50,
    scrambleSpeed = 30,
    characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*",
    delay = 0
}: ScrambleTextProps) {
    const [displayText, setDisplayText] = useState("");
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let currentIndex = 0;
        let scrambleInterval: NodeJS.Timeout;
        let revealTimeout: NodeJS.Timeout;

        const startAnimation = () => {
            // Initial scramble phase
            scrambleInterval = setInterval(() => {
                setDisplayText(
                    text
                        .split("")
                        .map((char, index) => {
                            if (index < currentIndex) {
                                return text[index];
                            }
                            if (char === " ") return " ";
                            return characters[Math.floor(Math.random() * characters.length)];
                        })
                        .join("")
                );
            }, scrambleSpeed);

            // Reveal characters one by one
            const revealNext = () => {
                if (currentIndex < text.length) {
                    currentIndex++;
                    revealTimeout = setTimeout(revealNext, speed);
                } else {
                    clearInterval(scrambleInterval);
                    setDisplayText(text);
                    setIsComplete(true);
                }
            };

            revealTimeout = setTimeout(revealNext, speed);
        };

        const initialDelay = setTimeout(startAnimation, delay);

        return () => {
            clearTimeout(initialDelay);
            clearInterval(scrambleInterval);
            clearTimeout(revealTimeout);
        };
    }, [text, speed, scrambleSpeed, characters, delay]);

    return (
        <span className={className}>
            {displayText}
            {!isComplete && <span className="animate-pulse">|</span>}
        </span>
    );
}
