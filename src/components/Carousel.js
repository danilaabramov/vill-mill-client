import {Link} from "react-router-dom";

export default function Carousel() {
    return (
        <div className="carousel-container">
            <div className="carousel" style={{backgroundImage: 'url(images/carousel-1.png)'}}>
                <div className="carousel-containers">

                    <div className="stroke-container-left">
                    </div>

                    <div className="carousel-text-container">
                        <div className="carousel-text">
                            <div className="carousel-h1">Свежая продукция до твоего дома</div>
                            <div className="carousel-p">Противоположная точка зрения подразумевает, что сделанные на
                                базе.
                            </div>

                            <Link to="/catalog">
                                <div className='button-bar register-button-bar'>
                                    <div className='text-button-bar'>
                                        <div className='text-container-button-bar'>
                                            Перейти в каталог
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="stroke-container-right">
                        {/*<Stroke color={"#F8B739"}/>*/}
                    </div>

                </div>
            </div>
        </div>
    )
}