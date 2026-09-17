import {useId} from "react";

export function ReactArt({ className }) {
    const glow = useId();
    return (
        <svg className={className} viewBox="0 0 480 250" aria-hidden="true">
            <defs>
                <radialGradient id={glow}>
                    <stop stopColor="#00c5ef" stopOpacity=".18" />
                    <stop offset="1" stopColor="#00c5ef" stopOpacity="0" />
                </radialGradient>
            </defs>
            <ellipse cx="240" cy="120" rx="180" ry="110" fill={`url(#${glow})`} />
            {[
                [-15, "#009dfb"],
                [16, "#7d69e5"],
                [33, "#e0a33a"],
            ].map(([angle, color]) => (
                <ellipse
                    key={angle}
                    cx="240"
                    cy="130"
                    rx="224"
                    ry="70"
                    fill="none"
                    stroke={color}
                    strokeOpacity=".4"
                    strokeWidth=".7"
                    transform={`rotate(${angle} 240 130)`}
                />
            ))}
            <g fill="#00bdea">
                <circle cx="32" cy="156" r="6" />
                <circle cx="350" cy="28" r="6" />
                <circle cx="408" cy="111" r="3" />
            </g>
            <g fill="#9b62ff">
                <circle cx="92" cy="60" r="3" />
                <circle cx="205" cy="14" r="3" />
                <circle cx="452" cy="69" r="6" />
            </g>
            <g fill="#efa623">
                <circle cx="427" cy="187" r="5" />
                <circle cx="326" cy="227" r="4" />
            </g>
            <g transform="translate(169 47) scale(1.46)" color="#00bdea">
                {[0, 60, 120].map((angle) => (
                    <ellipse
                        key={angle}
                        cx="50"
                        cy="50"
                        rx="47"
                        ry="17"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.2"
                        transform={`rotate(${angle} 50 50)`}
                    />
                ))}
                <circle cx="50" cy="50" r="8" fill="currentColor" />
            </g>
        </svg>
    );
}