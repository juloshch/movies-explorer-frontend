import '../../../vendor/index.css';
import arrow from '../../../images/arrow-main.svg';


function Portfolio() {
    return (
        <section className="portfolio">
            <p className="portfolio__title">Портфолио</p>
            <div className="portfolio__block">
                <p className="portfolio__content">Статичный сайт</p>
                <img className="portfolio__arrow" src={arrow} alt={"Стрелока"} />
            </div>
            <hr className="portfolio__line"></hr>
            <div className="portfolio__block">
                <p className="portfolio__content">Адаптивный сайт</p>
                <img className="portfolio__arrow" src={arrow} alt={"Стрелока"} />
            </div>
            <hr className="portfolio__line"></hr>
            <div className="portfolio__block">
                <p className="portfolio__content">Одностраничное приложение</p>
                <img className="portfolio__arrow" src={arrow} alt={"Стрелока"} />
            </div>
        </section>
    );
}

export default Portfolio;