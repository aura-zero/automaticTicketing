"use client";

import React, { useRef, useCallback } from "react";

interface Ticket3DProps {
  imageSrc: string;
}

const Ticket3D: React.FC<Ticket3DProps> = ({ imageSrc }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.transform =
        "perspective(1000px) rotateY(0deg) rotateX(0deg)";
    }
  }, []);

  return (
    <div className="flex items-center justify-center p-16 m-10 bg-gray-300 rounded-xl">
      <div
        ref={containerRef}
        className="overflow-hidden transition-transform duration-200 ease-out rounded-xl"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          width: "fit-content",
          height: "fit-content",
          transform: "scale(1.2)", // Increase size by 50%
        }}
      >
        <img
          src={imageSrc}
          alt="Louvre Museum Ticket"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Ticket3D;
