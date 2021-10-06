import '../../../vendor/index.css';

function AboutProject() {
    return (
        <section className="about-project">
            <div className="about-project__container">
                <p className="about-project__title">О проекте</p>
                <hr className="about-project__line"></hr>
                <div className="about-project__description">
                    <p className="about-project__description_title">Дипломный проект включал 5 этапов</p>
                    <p className="about-project__description_title">На выполнение диплома ушло 5 недель</p>
                    <p className="about-project__description_text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    <p className="about-project__description_text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
                <div className="about-project__rect">
                    <div className="about-project__rect_green">1 неделя</div>
                    <div className="about-project__rect_grey">4 недели</div>
                </div>
                <div className="about-project__rect">
                    <div className="about-project__rect_short">Back-end</div>
                    <div className="about-project__rect_long">Front-end</div>
                </div>
            </div>
            
        </section>
    );
}

export default AboutProject;