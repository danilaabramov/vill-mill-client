import Ugolok from "../icons/ugolok";

export default function Card({img, name, price}) {
    return (
        <div style={{width: '100%'}}>
            <div style={{width: 165, height: 237, margin: '60px calc((100% - 165px) / 2) 0'}}>

                <div style={{height: 0, width: 0}}>
                    <div style={{position: 'relative', bottom: 12, right: 12}}>
                        <Ugolok/>
                    </div>
                </div>

                <img style={{objectFit: 'cover', width: 165, height: 165}} src={img}
                     alt={"tovar"}/>

                <div style={{height: 0, width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
                    <div style={{position: 'relative', top: 8, left: 12, transform: 'rotate(180deg)'}}>
                        <Ugolok/>
                    </div>
                </div>

                <div style={{display: 'flex', fontSize: 15, color: '#F3E7D4', height: 72, marginTop: -7}}>
                    <div style={{width: '50%', height: '100%', display: 'flex', alignItems: 'flex-start',
                        justifyContent: 'flex-end',flexDirection: 'column'}}>
                        <div>{name}</div>
                        <div>Цена</div>
                    </div>

                    <div style={{width: '50%', alignItems: 'flex-end', justifyContent: 'flex-end', display: 'flex'}}>
                        {price[0]}P
                    </div>
                </div>
            </div>
        </div>
    );
}
