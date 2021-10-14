import { Link } from 'react-router-dom';
import Header from '../Header/header';

function Profile() {
    return (
        <section >
            <Header></Header>
            <div className="profile">
                <h2 className="profile__greeting">Привет, Виталий!</h2>
                <form className="profile__form">
                    <div className="profile__form_fields">
                        <p className="profile__form_name">Имя</p>
                        <input type="text" placeholder="Имя" value="Виталий" className="profile__form_field" minLength="2" maxLength="30" required/>
                    </div>
                    <hr className="profile__line"></hr>
                    <div className="profile__form_fields">
                        <p className="profile__form_name">E-mail</p>
                        <input type="email" placeholder="Email" value="pochta@yandex.ru" className="profile__form_field" required/>
                    </div>
                </form>
                <p className="profile__change">
                    Редактировать
                </p>
                <Link to="/" className="profile__logout-link">
                    Выйти из аккаунта
                </Link>
                <button className="profile__save-button" type="submit">
                    Сохранить
                </button>
                <p className="profile__change-error">При обновлении профиля произошла ошибка.</p>
                <button className="profile__save-button_inactive" disabled="disabled" type="submit">
                    Сохранить
                </button>
            </div>
        </section>
    );
}

export default Profile;