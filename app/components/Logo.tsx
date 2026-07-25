export default function Logo({ size = 40 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <defs>
                <linearGradient id="hsGradientSimple" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#e879f9" />
                </linearGradient>
            </defs>
            <g transform="translate(100,100)">
                <circle
                    cx="0"
                    cy="0"
                    r="82"
                    fill="none"
                    stroke="url(#hsGradientSimple)"
                    strokeWidth="6"
                    strokeDasharray="205 55"
                    strokeLinecap="round"
                    transform="rotate(-52)"
                />
                <text
                    x="-16"
                    y="24"
                    fontSize="92"
                    fontWeight="800"
                    fill="#f4f4f5"
                    fontFamily="Arial, sans-serif"
                    textAnchor="middle"
                >
                    H
                </text>
                <text
                    x="22"
                    y="24"
                    fontSize="92"
                    fontWeight="800"
                    fill="url(#hsGradientSimple)"
                    fontFamily="Arial, sans-serif"
                    textAnchor="middle"
                >
                    S
                </text>
            </g>
        </svg>
    );
}