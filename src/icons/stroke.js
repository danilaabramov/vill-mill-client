export default function Stroke({color}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={31} height={50} fill="none">
            <path
                fill={color}
                fillRule="evenodd"
                d="M0 5.833 19.27 25 0 44.167 5.865 50 31 25 5.865 0 0 5.833Z"
                clipRule="evenodd"
            />
        </svg>
    )
}
