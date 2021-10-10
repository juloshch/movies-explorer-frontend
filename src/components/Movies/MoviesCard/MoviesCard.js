function MoviesCard({card}) {
    return (
        <article>
            <div className="movies-card">
                <img src={"./" + card.movie_img} alt="картинка"/>
                <h2 className="movies-card__title">{card.title}</h2>
                <hr className="movies-card__line"></hr>
                <p className="movies-card__duration">{card.duration}</p>
            </div>
        </article>
    );
}

export default MoviesCard;