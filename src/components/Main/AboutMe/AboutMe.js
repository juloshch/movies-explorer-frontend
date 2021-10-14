import '../../../vendor/index.css';
import photoImage from '../../../images/photo-pic.jpg';

function AboutMe() {
    return (
        <section className="about-me">
            <div className="about-project__container">
                <p className="about-project__title">Студент</p>
                <hr className="about-project__line"></hr>
            </div>
            <div className="about-me__description about-project__container">
                <div>
                    <h2 className="about-me__name">Виталий</h2>
                    <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
                    <p className="about-me__info">Я родился и живу в Саратове, закончил факультет экономики СГУ. 
                        У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь 
                        бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». 
                        После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <button onClick={() => { window.location.href = 'https://facebook.com';}} className="about-me__link">Facebook</button>
                    <button onClick={() => { window.location.href = 'https://github.com';}} className="about-me__link">Github</button>
                </div>
                <img className="about-me__photo" src={photoImage} alt={"Фото"} />
            </div>
        </section>
    );
}

export default AboutMe;