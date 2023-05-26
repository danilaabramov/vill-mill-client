import {fetchRegister, isAuth} from "../redux/slices/auth";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

export default function Registration() {

    const dispatch = useDispatch();
    const handleRegister = async () => {
        const {payload} = await dispatch(fetchRegister({
            fullName: name + ' ' + surname,
            number,
            email,
            address,
            password: 'password',
        }))
        console.log(payload)
        window.localStorage.setItem("token", payload.token);
    }

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')


    return (
        <div style={{height: 722, padding: '22px 75px 135px', background: '#015546', width: 'calc(100% - 150px)'}} id='registration'>
            <div style={{height: '100%', width: '100%', border: '2px solid #87B44D'}}>
                <div style={{fontWeight: 700, margin: '83px 0 0 75px', fontSize: 30}}>Регистрация</div>

                <div style={{display: 'flex', margin: '18px 0 0 75px', fontSize: 23}}>
                    <div>Уже есть аккаунт?</div>
                    <div style={{fontWeight: 700, marginLeft: 8, color: '#FFBB37', cursor: 'pointer'}}>Войти</div>
                </div>

                <div className='register-forms' style={{marginRight: 75}}>
                    <div className='register-form'>
                        <div style={{margin: '26px 0 0 75px', fontSize: 23}}>Имя*</div>
                        <input className="register-input" type='text'
                               style={{color: '#F3E7D4', fontSize: 23, background: '#015546', height: 77,
                                   border: '1px solid #87B44D', margin: '0 0 0 75px'}}
                            value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div className='register-form'>
                        <div style={{margin: '26px 0 0 75px', fontSize: 23}}>Фамилия*</div>
                        <input className="register-input" type='text'
                               style={{color: '#F3E7D4', fontSize: 23, background: '#015546', height: 77,
                                   border: '1px solid #87B44D', margin: '0 0 0 75px'}}
                               value={surname} onChange={(e) => setSurname(e.target.value)}/>
                    </div>

                    <div className='register-form'>
                        <div style={{margin: '26px 0 0 75px', fontSize: 23}}>Телефон*</div>
                        <input className="register-input" type='text'
                               style={{color: '#F3E7D4', fontSize: 23, background: '#015546', height: 77,
                                   border: '1px solid #87B44D', margin: '0 0 0 75px',}}
                               value={number} onChange={(e) => setNumber(e.target.value)}/>
                    </div>

                    <div className='register-form'>
                        <div style={{margin: '26px 0 0 75px', fontSize: 23}}>Email</div>
                        <input className="register-input" type='text'
                               style={{color: '#F3E7D4', fontSize: 23, background: '#015546', height: 77,
                                   border: '1px solid #87B44D', margin: '0 0 0 75px'}}
                               value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>

                <div style={{marginRight: 75}}>
                    <div style={{margin: '26px 0 0 75px', fontSize: 23}}>Адрес доставки*</div>
                    <input className="register-input" type='text'
                           style={{color: '#F3E7D4', fontSize: 23, background: '#015546', height: 77,
                               border: '1px solid #87B44D', margin: '0 0 0 75px', width: 'calc(100% - 75px)'}}
                           value={address} onChange={(e) => setAddress(e.target.value)}/>
                </div>

                <div style={{margin: '26px 0 0 75px', fontSize: 15}}>* Поля для обязательного заполнения</div>


                <div className='button-bar register-sub-button-bar' onClick={handleRegister}>
                    <div className='text-button-bar'>
                        <div className='text-container-button-bar'>
                            Отправить
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}