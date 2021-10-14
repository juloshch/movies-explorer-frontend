import React from "react";
import PromoHeader from "../Main/PromoHeader/PromoHeader";
import Promo from '../Main/Promo/Promo';
import Navtab from '../Main/NavTab/Navtab';
import AboutProject from '../Main/AboutProject/AboutProject';
import Techs from '../Main/Techs/Techs';
import AboutMe from '../Main/AboutMe/AboutMe';
import Portfolio from "../Main/Portfolio/Portfolio";
import Footer from '../../components/Footer/Footer';

function Main() {
    
    return (
        <div className="main"> 
            <PromoHeader></PromoHeader>
            <Promo></Promo>
            <Navtab></Navtab>
            <AboutProject></AboutProject>
            <Techs></Techs>
            <AboutMe></AboutMe>
            <Portfolio></Portfolio>
            <Footer></Footer>
        </div>
    )
}

export default Main;