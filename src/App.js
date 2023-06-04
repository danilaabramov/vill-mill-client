import {useEffect, useState} from "react";
import {Routes, Route, Link} from 'react-router-dom';
import ButtonBar from "./components/ButtonBar";
import MenuIcon from "./icons/menu";
import HomePage from "./pages/HomePage";
import Logo from "./icons/logo";
import {fetchAuthMe, isAuth, logout} from "./redux/slices/auth";
import {useDispatch, useSelector} from "react-redux";

export default function App() {
    const dispatch = useDispatch();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [activeBar, setActiveBar] = useState(false)

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        dispatch(fetchAuthMe())
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    const IsAuth = useSelector(isAuth);
    const {data} = useSelector(({auth}) => auth);

    const handleLogout = () => {
        if (window.confirm("Вы действительно хотите выйти?")) {
            dispatch(logout())
            window.localStorage.removeItem("token")
        }
    };

    return (<div className='App' style={{
        overflow: activeBar && windowWidth <= 920 ? 'hidden' : '',
        height: activeBar && windowWidth <= 920 ? '100vh' : ''
    }}>

        <header className={activeBar ? 'active-header' : 'header'}>
            <div className='header-container'>
                <div className='left-header-container'>
                    <Link to='/' onClick={() => setActiveBar(false)}>
                        <div className='logo-container'>
                            <div className='logo'>
                                <Logo/>
                            </div>
                            <div className="logo-text">
                                vill mill
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='main-header-container'>
                    {
                        !IsAuth && !window.localStorage.getItem("token") ?
                            <div className='main-header-links'>
                                <Link to="/">
                                    <div className='button-bar button-bar-mobile login-button-bar'>
                                        <div className='text-button-bar'>
                                            <div className='text-container-button-bar'>
                                                Главная
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/catalog">
                                    <div className='button-bar button-bar-mobile login-button-bar'>
                                        <div className='text-button-bar'>
                                            <div className='text-container-button-bar'>
                                                Каталог
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <a href="#registration" style={{marginLeft: 80}}>
                                    <div className='button-bar button-bar-mobile login-button-bar'>
                                        <div className='text-button-bar'>
                                            <div className='text-container-button-bar'>
                                                Войти
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#registration">
                                    <div className='button-bar button-bar-mobile register-button-bar'>
                                        <div className='text-button-bar'>
                                            <div className='text-container-button-bar'>
                                                Регистрация
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            :
                            <div className="main-header-links">
                                <Link to="/">
                                    <div className='button-bar button-bar-mobile login-button-bar'>
                                        <div className='text-button-bar'>
                                            <div className='text-container-button-bar'>
                                                Главная
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/catalog">
                                    <div className='button-bar button-bar-mobile login-button-bar'>
                                        <div className='text-button-bar'>
                                            <div className='text-container-button-bar'>
                                                Каталог
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <div style={{marginTop: 5, display: 'flex'}}>
                                    <div style={{fontSize: '18px', marginLeft: 80, fontWeight: 700}}>{data?.login}</div>
                                    <div style={{fontSize: '18px', fontWeight: 700, marginLeft: 20, cursor: 'pointer'}}
                                         onClick={handleLogout}>X
                                    </div>
                                </div>
                            </div>
                    }
                </div>
                <div className='right-header-container'>
                    <div className='menu-right' onClick={() => setActiveBar(a => !a)}>
                        <MenuIcon color='#F3E7D4'/>
                    </div>
                </div>
            </div>

            <div className={activeBar ? 'top-active-mobile-buttons' : 'top-mobile-buttons'}>
                <div>
                    <Link to="/" onClick={() => setActiveBar(a => !a)}>
                        <ButtonBar text='Главная' menu/>
                    </Link>
                    <Link to="/catalog" onClick={() => setActiveBar(a => !a)}>
                        <ButtonBar text='Каталог' menu/>
                    </Link>
                    <a href="#registration" onClick={() => setActiveBar(a => !a)}>
                        <ButtonBar text='Войти' menu/>
                    </a>
                    <a href="#registration" onClick={() => setActiveBar(a => !a)}>
                        <ButtonBar text='Регистрация' menu/>
                    </a>
                </div>
            </div>
        </header>

        <main className='main' style={{paddingTop: activeBar && windowWidth <= 920 ? 75 : 0}}>
            <div className='main-container'>
                <Routes>
                    <Route path="/" exact element={<HomePage/>}/>
                    <Route path="/catalog" element={
                        <div style={{width: '100vw', minHeight: 1000, background: '#015546', display: 'flex',
                       alignItems: 'center', flexDirection: 'column'}}>
                            <div style={{fontSize: 40, marginTop: 75}}>Скоро здесь будет каталог ...</div>
                            <img style={{width: 700}} src={require('./images/tech.png')} alt=""/>
                        </div>
                    }/>
                </Routes>
            </div>

        </main>
    </div>);
}

