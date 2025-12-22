"use client";

import { useEffect, useState } from 'react';

export default function AetherBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#0A0E27]">
            {/* 
        Aether Grids:
        "Fine, 0.5px lines in subtle, translucent blue-grey"
      */}
            <div
                className="absolute inset-0 bg-[linear-gradient(rgba(100,150,200,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(100,150,200,0.08)_1px,transparent_1px)] bg-[size:60px_60px] opacity-100"
                style={{
                    maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)'
                }}
            />

            {/* Volumetric Light Fields - "Luminous Cyan" and "Muted Electric Violet" */}
            {/* Animated blobs using CSS inline animations for simple continuous movement */}
            <div
                className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-[#00D9FF]/10 rounded-full blur-[100px] animate-pulse"
                style={{ animationDuration: '8s' }}
            />
            <div
                className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-[#8B5CF6]/10 rounded-full blur-[100px] animate-pulse"
                style={{ animationDuration: '12s', animationDelay: '1s' }}
            />
            <div
                className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] bg-[#00D9FF]/5 rounded-full blur-[80px] animate-pulse"
                style={{ animationDuration: '15s', animationDelay: '2s' }}
            />

            {/* Abstract Animated Line Graphs (Simulated with moving gradients or thin lines) */}
            {/* We add a subtle scanning line effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00D9FF]/5 to-transparent h-[20%] w-full -translate-y-full animate-[scan_8s_linear_infinite]" />

            <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(500%); }
        }
      `}</style>
        </div>
    );
}
