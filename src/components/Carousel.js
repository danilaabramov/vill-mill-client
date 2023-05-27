import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import Stroke from "../icons/stroke";
import Dot from "../icons/dot";
import {useSelector} from "react-redux";
import {isAuth} from "../redux/slices/auth";

export default function Carousel() {

    const IsAuth = useSelector(isAuth);

    const [stateCarousel, setStateCarousel] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => setStateCarousel(c => (c + 1) % 3), 5000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="carousel-container">
            <div className="carousel" style={{
                transition: 'background-image .5s',
                backgroundImage: stateCarousel === 0 ? 'url(images/carousel-1.jpg)' :
                    stateCarousel === 1 ? 'url(images/carousel-2.jpg)' : 'url(images/carousel-3.jpg)'
            }}>
                <div className="carousel-containers">

                    <div className="stroke-container-left">
                        <div style={{
                            transform: 'translateX(-35px)',
                            display: 'flex',
                            gap: 137,
                            flexDirection: 'column'
                        }}>
                            <a href="#catalog">
                                <Dot color={"#FFBB37"}/>
                            </a>
                            <a href="#catalog">
                                <Dot color={"#3B8056"}/>
                            </a>
                            {
                                !IsAuth && !window.localStorage.getItem("token") &&
                                <a href="#registration">
                                    <Dot color={"#3B8056"}/>
                                </a>
                            }
                        </div>
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

                    <div className="stroke-container-right" onClick={() => setStateCarousel(c => (c + 1) % 3)}>
                        <Stroke color={"#F8B739"}/>
                    </div>

                </div>
            </div>
        </div>
    )
}