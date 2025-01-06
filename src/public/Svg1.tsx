import React, { useState, useRef } from "react";

interface SvgProps {
    text: string | number;
    id: string | number;
}

interface TooltipPosition {
    left: number;
    top: number;
}

const Svg1: React.FC<SvgProps> = ({ text, id }) => {
    const [showTooltip, setShowTooltip] = useState<string | number | null>(null);
    const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition>({ left: 0, top: 0 });
    const iconRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = (id: string | number) => {
        if (iconRef.current) {
            const rect = iconRef.current.getBoundingClientRect();
            const viewportWidth = window.innerWidth;

            // Calculate left position
            let left = rect.left;
            if (left + 150 > viewportWidth) {
                left = viewportWidth - 100;
            }
            left = Math.max(10, left);

            setTooltipPosition({
                left: left,
                top: rect.bottom + window.scrollY + 5
            });
        }
        setShowTooltip(id);
    };

    const handleMouseLeave = () => {
        setShowTooltip(null);
    };

    return (
        <div className="relative" ref={iconRef}>
            <svg
                onMouseEnter={() => handleMouseEnter(id)}
                onMouseLeave={handleMouseLeave}
                width="30px"
                height="30px"
                style={{ margin: "1px" }}
                viewBox="0 0 92 92"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M45.386 0.00399741C19.983 0.343997 -0.332988 21.215 0.00501155 46.619C0.345012 72.012 21.214 92.334 46.616 91.996C72.014 91.654 92.334 70.783 91.996 45.381C91.656 19.986 70.786 -0.335003 45.386 0.00399741ZM45.25 74L44.996 73.996C41.084 73.88 38.326 70.998 38.437 67.144C38.546 63.356 41.371 60.606 45.154 60.606L45.381 60.61C49.402 60.729 52.129 63.582 52.016 67.547C51.904 71.346 49.123 74 45.25 74ZM61.705 41.341C60.785 42.648 58.762 44.271 56.213 46.257L53.406 48.195C51.865 49.393 50.935 50.52 50.586 51.629C50.311 52.502 50.176 52.733 50.152 54.509L50.148 54.96H39.43L39.461 54.053C39.592 50.325 39.684 48.132 41.229 46.32C43.653 43.474 49 40.031 49.227 39.885C49.993 39.308 50.639 38.651 51.12 37.949C52.245 36.398 52.743 35.177 52.743 33.977C52.743 32.312 52.249 30.772 51.272 29.401C50.333 28.078 48.549 27.408 45.969 27.408C43.41 27.408 41.658 28.22 40.61 29.886C39.532 31.599 38.987 33.398 38.987 35.236V35.693H27.936L27.956 35.216C28.241 28.447 30.657 23.573 35.134 20.729C37.947 18.918 41.447 18 45.531 18C50.877 18 55.39 19.299 58.943 21.861C62.543 24.457 64.369 28.345 64.369 33.417C64.369 36.254 63.473 38.919 61.705 41.341Z"
                    fill="#007bff"
                />
            </svg>
            {showTooltip && (
                <div
                    style={{
                        width: "150px",
                        position: "fixed",
                        backgroundColor: "#333",
                        color: "#fff",
                        padding: "8px",
                        borderRadius: "4px",
                        zIndex: "1000",
                        textAlign: "center",
                        left: `${tooltipPosition.left}px`,
                        top: `${tooltipPosition.top}px`,
                        transform: "translateX(-50%)",
                        maxWidth: "calc(100vw - 20px)",
                        wordWrap: "break-word"
                    }}
                >
                    {text}
                </div>
            )}
        </div>
    );
};

export default Svg1;






