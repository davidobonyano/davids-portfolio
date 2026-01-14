"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, MotionValue, useMotionValueEvent } from 'framer-motion';

const HeroAnimation = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const frameCount = 21;

    // Load images on mount
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            img.src = `/hero-animation/ezgif-frame-${i.toString().padStart(3, '0')}.jpg`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setImages(loadedImages);
                }
            };
            loadedImages[i - 1] = img;
        }
    }, []);

    // Function to draw a specific frame
    const drawFrame = (index: number) => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        const img = images[index];

        if (canvas && context && img) {
            // Clear canvas
            context.clearRect(0, 0, canvas.width, canvas.height);

            // Calculate scale to cover canvas (like object-fit: cover)
            const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
            const x = (canvas.width / 2) - (img.width / 2) * scale;
            const y = (canvas.height / 2) - (img.height / 2) * scale;

            context.drawImage(img, x, y, img.width * scale, img.height * scale);
        }
    };

    // Update canvas on scroll using passed progress
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (images.length === frameCount) {
            const frameIndex = Math.min(
                frameCount - 1,
                Math.floor(latest * frameCount)
            );
            requestAnimationFrame(() => drawFrame(frameIndex));
        }
    });

    // Initial draw and handle resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                // Use clientWidth to exclude scrollbar width
                canvasRef.current.width = document.documentElement.clientWidth;
                canvasRef.current.height = window.innerHeight;
                if (images.length === frameCount) {
                    drawFrame(0);
                }
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [images]);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <canvas
                ref={canvasRef}
                className="w-full h-full object-cover grayscale opacity-40"
                style={{ filter: 'contrast(1.1) brightness(0.6)' }}
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-30" />
        </div>
    );
};

export default HeroAnimation;
