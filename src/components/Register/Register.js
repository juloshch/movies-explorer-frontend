import { Link } from 'react-router-dom';
import registerLogoImage from '../../images/registerLogo.svg';

function Register() {
    return (
        <div className="register">
            <div className="register__container">
                <img className="register__logo" src={ registerLogoImage } alt={"Лого"} />
                <form className="register__form">
                        <h2 className="register__title">Добро пожаловать!</h2>
                        <p className="register__field_name">Имя</p>
                        <input type="text" placeholder="Имя" className="register__field" minLength="2" maxLength="30" required/>
                        <p className="register__field_name">E-mail</p>
                        <input type="E-mail" placeholder="E-mail" className="register__field" required/>
                        <p className="register__field_name">Пароль</p>
                        <input type="password" placeholder="" className="register__field register__field_last" required/>
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