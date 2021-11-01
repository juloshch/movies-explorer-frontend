import { Link, useHistory } from 'react-router-dom';
import registerLogoImage from '../../images/registerLogo.svg';
import React from "react";
import {register} from '../../utils/auth';

function Register() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const history = useHistory();

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }


    function onSubmit(evt) {
        evt.preventDefault();
        register(name, email, password)
            .then ((res) => {
                setTimeout(() => {
                    history.push('/sign-in')
                }, 3000)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="register">
            <div className="register__container">
                <img className="register__logo" src={ registerLogoImage } alt={"Лого"} />
                <form className="register__form" onSubmit={onSubmit}>
                        <h2 className="register__title">Добро пожаловать!</h2>
                        <p className="register__field_name">Имя</p>
                        <input type="text" placeholder="Имя" onChange={handleChangeName} className="register__field" minLength="2" maxLength="30" required/>
                        <p className="register__field_name">E-mail</p>
                        <input type="E-mail" placeholder="E-mail" onChange={handleChangeEmail} className="register__field" required/>
                        <p className="register__field_name">Пароль</p>
                        <input type="password" placeholder="" onChange={handleChangePassword} className="register__field register__field_last" required/>
                        <span className="register__input-error">Что-то пошло не так...</span>
                        <button className="register__save-button" type="submit">
                            Зарегистрироваться
                        </button>
                </form>
                <div className="register__sign-in">
                    <p className="register__sign-in_par">Уже зарегистрированы?</p>
                    <Link to="/sign-in" className="register__link">
                        Войти
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Register;