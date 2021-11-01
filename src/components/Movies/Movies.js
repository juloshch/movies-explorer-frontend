import Header from '../Header/header';
import Footer from '../Footer/Footer';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList  from '../Movies/MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import Navigation from '../Navigation/navigation';
import React from 'react';
import moviesApi from '../../utils/MoviesApi';

function Movies() {
    const [isNavMenuOpen, setIsNavMenuOpen] = React.useState(false);
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        // api.setToken(localStorage.getItem('token'));

        // api.getUserInfo()
        //     .then(setUserInfo)
        //     .catch((err) => {
        //         console.log(err);
        //     });

        function setAllCards(data) {
            setCards(data || []);
        }
        

        moviesApi.getAllMovies()
            .then(setAllCards)
            .catch((err) => {
                console.log(err);
            });
    }, []);

    function handleMenuOpen() {
        setIsNavMenuOpen(true);
    }
    function handleMenuClose() {
        setIsNavMenuOpen(false);
    }

    return (
        <section className="movies">
            <Header handleMenuOpen={handleMenuOpen}></Header>
            <SearchForm></SearchForm>
            <MoviesCardList saved={false} cards={cards}/>
            <Navigation isOpen={isNavMenuOpen} onClose={handleMenuClose}></Navigation>
            <Preloader></Preloader>
            <Footer></Footer>
        </section>
    );
}

export default Movies;