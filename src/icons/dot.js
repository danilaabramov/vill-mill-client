export default function Dot({color}) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="none" style={{cursor: 'pointer'}}>
            <circle cx={25} cy={25} r={15} fill={color}/>
            <circle cx={25} cy={25} r={24.5} stroke={color}/>
        </svg>)
}
