export const ReactSvg = ()=>{
    return (
        <svg
            className="header-logo-icon"
            viewBox="0 0 100 100"
            fill="none"
            aria-hidden="true"
        >
            {[0, 60, 120].map((angle) => (
                <ellipse
                    key={angle}
                    cx="50"
                    cy="50"
                    rx="47"
                    ry="17"
                    stroke="currentColor"
                    strokeWidth="3"
                    transform={`rotate(${angle} 50 50)`}
                />
            ))}
            <circle cx="50" cy="50" r="8" fill="currentColor" />
        </svg>
    )
}