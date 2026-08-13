import { caveat } from '@/app/fonts'

export default function Logo({ size = 40 }: { size?: number }) {
    return (
        <svg
            width={size * 3.6}
            height={size}
            viewBox="0 0 360 100"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <text
                x="180"
                y="62"
                fontSize="52"
                className={caveat.className}
                fill="#ffffff"
                textAnchor="middle"
            >
                Hrant Sardaryan
            </text>
        </svg>
    )
}