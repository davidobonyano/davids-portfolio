"use client";

import { useRef, useState, useEffect, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    strength?: number;
}

export default function MagneticButton({
    children,
    className = "",
    strength = 0.3
}: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (!ref.current) return;

            const rect = ref.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const distanceX = e.clientX - centerX;
            const distanceY = e.clientY - centerY;
            const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

            // Magnetic effect radius (in pixels)
            const magneticRadius = 150;

            if (distance < magneticRadius) {
                const force = (magneticRadius - distance) / magneticRadius;
                x.set(distanceX * strength * force);
                y.set(distanceY * strength * force);
            } else {
                x.set(0);
                y.set(0);
            }
        };

        const handleMouseLeave = () => {
            x.set(0);
            y.set(0);
            setIsHovered(false);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [x, y, strength, isMounted]);

    if (!isMounted) {
        return <div className={`inline-block ${className}`}>{children}</div>;
    }

    return (
        <motion.div
            ref={ref}
            style={{ x: springX, y: springY }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`inline-block ${className}`}
        >
            {children}
        </motion.div>
    );
}
