import React from "react";

function MoviesCard({ card, saved }) {

    const [isCardLiked, setIsCardLiked] = React.useState(false);

    function handleHeartClick() {
        setIsCardLiked(!isCardLiked);
    }

    return (
        <article>
            <div className="movies-card">
                <img className="movies-card__image" src={"./" + card.movie_img} alt="картинка"/>
                <div className="movies-card__title-block">
                    <h2 className="movies-card__title">{card.title}</h2>
                    {!saved && <button onClick={handleHeartClick} className={`movies-card__like ${isCardLiked ? 'movies-card__like_isLiked' : ''}`}></button>}
                    {saved && <button className="movies-card__delete-button"></button>}
                </div>
                <hr className="movies-card__line"></hr>
                <p className="movies-card__duration">{card.duration}</p>
            </div>
        </article>
    );
}

export default MoviesCard;