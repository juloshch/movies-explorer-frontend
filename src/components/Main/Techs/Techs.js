import React from "react";
import '../../../vendor/index.css';

function Techs() {
    return (
        <section className="techs">
            <div className="about-project__container">
                <p className="about-project__title">Технологии</p>
                <hr className="about-project__line"></hr>
                <p className="techs__title">7 технологий</p>
                <p className="techs__paragraph">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <div className="techs__blocks">
                    <div className="techs__block">HTML</div>
                    <div className="techs__block">CSS</div>
                    <div className="techs__block">JS</div>
                    <div className="techs__block">React</div>
                    <div className="techs__block">Git</div>
                    <div className="techs__block">Express.js</div>
                    <div className="techs__block">mongoDB</div>
                </div>
            </div>
        </section>
    )
}

export default Techs;