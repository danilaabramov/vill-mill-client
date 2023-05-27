import {fetchAuth, fetchRegister, isAuth} from "../redux/slices/auth";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

export default function Registration() {

    const dispatch = useDispatch();

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const [register, setRegister] = useState(true)

    const handleRegister = async () => {
        if (password === password2) {
            setError('')
            setLoading(true)
            const {payload} = await dispatch(fetchRegister({
                fullName: name + ' ' + surname,
                number,
                email,
                address,
                password,
                login,
            }))
            if (payload?.token)
                window.localStorage.setItem("token", payload.token);
            else setError('Ошибка регистрации')
            setLoading(false)
        } else setError('Пароли не совпадают')
    }

    const handleLogin = async () => {
        setLoading(true)
        const {payload} = await dispatch(fetchAuth({
            password,
            login
        }))
        if (payload?.token)
            window.localStorage.setItem("token", payload.token);
        else setError('Ошибка Входа')
        setLoading(false)
    }

    return (
        <div style={{padding: '22px 75px 135px', background: '#015546', width: 'calc(100% - 150px)'}}
             id='registration'>
            <div style={{height: '100%', width: '100%', border: '2px solid #87B44D'}}>
                <div style={{
                    fontWeight: 700,
                    margin: '83px 0 0 75px',
                    fontSize: 30
                }}>{register ? 'Регистрация' : 'Вход'}</div>


                <div style={{display: 'flex', margin: '18px 0 0 75px', fontSize: 23, flexWrap: 'wrap'}}>
                    <div>{register ? 'Уже есть аккаунт?' : 'У вас нет аккаунта?'}</div>
                    <div style={{fontWeight: 700, marginLeft: 8, color: '#FFBB37', cursor: 'pointer'}}
                         onClick={() => setRegister(r => !r)}
                    >{register ? 'Войти' : 'Зарегистрироваться'}</div>
                </div>

                {register ?
                    <div>
                        <div className='register-forms' style={{marginRight: 75}}>
                            <div className='register-form'>
                                <div style={{margin: '26px 0 0 75px', fontSize: 23}}>Имя*</div>
                                <input className="register-input" type='text'
                                       style={{
                                           color: '#F3E7D4', fontSize: 23, background: '#015546', height: 77,
                                           border: '1px solid #87B44D', margin: '0 0 0 75px'
                                       }}
                                       value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>

                            <div className='register-form'>
                                <div style={{margin: '26px 0 0 75px', fontSize: 23}}>Фамилия*</div>
                                <input className="register-input" type='text'
                                       style={{
                                           color: '#F3E7D4', fontSize: 23, background: '#015546', height: 77,
                                           border: '1px solid #87B44D', margin: '0 0 0 75px'
                                       }}
                                       value={surname} onChange={(e) => setSurname(e.target.value)}/>
                            </div>

                            <div className='register-form'>
                                <div style={{margin: '26px 0 0 75px', fontSize: 23}}>Телефон*</div>
                                <input className="register-input" type='text'
                                       style={{
                                           color: '#F3E7D4', fontSize: 23, background: '#015546', height: 77,
                                           border: '1px solid #87B44D', margin: '0 0 0 75px',
                                       }}
                                       value={number} onChange={(e) => setNumber(e.target.value)}/>
                            </div>

                            <div className='register-form'>
                                <div style={{margin: '26px 0 0 75px', fontSize: 23}}>Email</div>
                                <input className="register-input" type='text'
                                       style={{
                                           color: '#F3E7D4', fontSize: 23, background: '#015546', height: 77,
                                           border: '1px solid #87B44D', margin: '0 0 0 75px'
                                       }}
                                       value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                        </div>

                        <div style={{marginRight: 75}}>
                            <div style={{margin: '26px 0 0 75px', fontSize: 23}}>Адрес доставки*</div>
                            <input className="register-input" type='text'
                                   style={{
                                       color: '#F3E7D4', fontSize: 23, background: '#015546', height: 77,
                                       border: '1px solid #87B44D', margin: '0 0 0 75px', width: 'calc(100% - 105px)'
                                   }}
                                   value={address} onChange={(e) => setAddress(e.target.value)}/>
                        </div>

                        <div className='register-forms' style={{marginRight: 75}}>
                            <div className='register-form'>
                                <div style={{margin: '26px 0 0 75px', fontSize: 23}}>Логин*</div>
                                <input className="register-input" type='text'
                                       style={{
                                           color: '#F3E7D4', fontSize: 23, background: '#015546', height: 77,
                                           border: '1px solid #87B44D', margin: '0 0 0 75px'
                                       }}
                                       value={login} onChange={(e) => setLogin(e.target.value)}/>
                            </div>
                        </div>

                        <div className='register-forms' style={{marginRight: 75}}>
                            <div className='register-form'>
                                <div style={{margin: '26px 0 0 75px', fontSize: 23}}>Пароль*</div>
                                <input className="register-input" type='password'
                                       style={{
                                           color: '#F3E7D4', fontSize: 23, background: '#015546', height: 77,
                                           border: '1px solid #87B44D', margin: '0 0 0 75px'
                                       }}
                                       value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>

                            <div className='register-form'>
                                <div style={{margin: '26px 0 0 75px', fontSize: 23}}>Повтор пароля*</div>
                                <input className="register-input" type='password'
                                       style={{
                                           color: '#F3E7D4', fontSize: 23, background: '#015546', height: 77,
                                           border: '1px solid #87B44D', margin: '0 0 0 75px'
                                       }}
                                       value={password2} onChange={(e) => setPassword2(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    : <div className='register-forms' style={{marginRight: 75}}>
                        <div className='register-form'>
                            <div style={{margin: '26px 0 0 75px', fontSize: 23}}>Логин*</div>
                            <input className="register-input" type='text'
                                   style={{
                                       color: '#F3E7D4', fontSize: 23, background: '#015546', height: 77,
                                       border: '1px solid #87B44D', margin: '0 0 0 75px'
                                   }}
                                   value={login} onChange={(e) => setLogin(e.target.value)}/>
                        </div>

                        <div className='register-form'>
                            <div style={{margin: '26px 0 0 75px', fontSize: 23}}>Пароль*</div>
                            <input className="register-input" type='password'
                                   style={{
                                       color: '#F3E7D4', fontSize: 23, background: '#015546', height: 77,
                                       border: '1px solid #87B44D', margin: '0 0 0 75px'
                                   }}
                                   value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>
                }


                <div style={{marginLeft: 75, fontSize: 15, color: 'red', height: 26}}>{error}</div>
                <div style={{marginLeft: 75, fontSize: 15}}>* Поля для обязательного заполнения</div>


                <div style={{height: 25}}>
                    <div className='button-bar register-sub-button-bar' style={{position: 'relative'}}
                         onClick={() => {
                             if (!loading) {
                                 register ? handleRegister() : handleLogin()
                             }
                         }}>
                        <div className='text-button-bar'>
                            <div className='text-container-button-bar'>
                                {loading ? 'Загрузка...' : 'Отправить'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}