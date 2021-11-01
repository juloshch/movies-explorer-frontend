import { Link } from 'react-router-dom';
import registerLogoImage from '../../images/registerLogo.svg';
import React from 'react';
import { login } from '../../utils/auth';

function Login({onLogin}) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    function onSubmit(evt) {
        evt.preventDefault();
        console.log(email);
        login(email, password)
            .then ((res) => {
                localStorage.setItem('token', res.token);
                onLogin(email)
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
                        <h2 className="register__title">Рады видеть!</h2>
                            <p className="register__field_name">E-mail</p>
                            <input type="E-mail" onChange={handleChangeEmail} placeholder="E-mail" className="register__field" required/>
                            <p className="register__field_name">Пароль</p>
                            <input type="password" onChange={handleChangePassword} className="register__field register__field_last register__placeholder" required/>
                            {/* <span className="register__input-error">Что-то пошло не так...</span> */}
                        <button className="register__save-button" type="submit">
                            Войти
                        </button>
                </form>
                <div className="register__sign-in">
                    <p className="register__sign-in_par">Ещё не зарегистрированы?</p>
                    <Link to="/sign-up" className="register__link">
                        Регистрация
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;