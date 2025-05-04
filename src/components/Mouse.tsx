"use client";

import { useEffect, useState } from "react";

const MouseFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Mark component as client-rendered
        setIsClient(true);

        const updatePosition = (e: MouseEvent) => {
            const { clientX: x, clientY: y } = e;
            setPosition({ x, y });
        };

        window.addEventListener("mousemove", updatePosition);
        return () => window.removeEventListener("mousemove", updatePosition);
    }, []);

    if (!isClient) return null; // Avoid rendering on the server

    return (
        <>
            {/* Cerchio interno */}
            <div
                className="fixed w-1 h-1 bg-black rounded-full pointer-events-none z-50"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: "translate(-50%, -50%)",
                }}
            />

            {/* Cerchio esterno */}
            <div
                className="fixed w-8 h-8 border-1 border-amber-50 shadow-sm shadow-black/50 rounded-full pointer-events-none z-40"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: "translate(-50%, -50%)",
                }}
            />
        </>
    );
};

export default MouseFollower;
