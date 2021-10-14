import Header from '../Header/header';
import Footer from '../Footer/Footer';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList  from '../Movies/MoviesCardList/MoviesCardList';
import Preloader from '../Movies/Preloader/Preloader';
import Navigation from '../Navigation/navigation';
import React from 'react';

function Movies() {

    const [isNavMenuOpen, setIsNavMenuOpen] = React.useState(false);

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
            <MoviesCardList saved={true} />
            <Navigation isOpen={isNavMenuOpen} onClose={handleMenuClose}></Navigation>
            <Preloader></Preloader>
            <Footer></Footer>
        </section>
    );
}

export default Movies;