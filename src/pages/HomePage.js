import Card from "../components/Card";
import Carousel from "../components/Carousel";
import {isProductsLoaded, fetchAllProducts} from "../redux/slices/products";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Registration from "../components/Registration";
import {isAuth} from "../redux/slices/auth";

export default function HomePage() {

    const dispatch = useDispatch();
    const IsAuth = useSelector(isAuth);

    const IsProductsLoaded = useSelector(isProductsLoaded);
    const {products} = useSelector(({products}) => products);

    useEffect(() => {
        window.scrollTo(0, 0);
        !IsProductsLoaded && dispatch(fetchAllProducts());
    }, [])


    return (
        <div style={{width: '100%'}}>
            <Carousel/>

            <div style={{padding: '0 75px', background: '#015546', width: 'calc(100% - 150px)'}}>

                <input className="register-input" type='text'
                       placeholder="Поиск"

                       style={{
                           color: '#F3E7D4',
                           background: '#015546',
                           paddingLeft: 66,
                           height: 60,
                           width: 'calc(100% - 66px)',
                           border: '2px solid #87B44D',
                           borderRadius: 25,
                           lineHeight: '60px',
                           fontSize: 24
                       }}/>

            </div>

            <div style={{
                padding: '37px 75px 56px',
                background: '#015546',
                flexWrap: 'wrap',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                {
                    IsProductsLoaded && products.items.map((item, index) => (
                        <div key={index} style={{width: '300px'}}>
                            {
                                index < 8 && <div>
                                    <Card name={item.title} price={item.price} img={item.photo}/>
                                </div>
                            }
                        </div>
                    ))
                }
            </div>

            {
                !IsAuth && !window.localStorage.getItem("token") &&
                <Registration/>
            }
        </div>
    )
}