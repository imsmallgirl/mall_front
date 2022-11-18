import React from "react";
import Header from '../components/Header';
import Banner from '../components/Banner';
import Best from '../components/Best';
import Products from "../components/Products";
import Footer from "../components/Footer";


function Home ({product}) {
    return(
        <div className="wrap">
            <Header />
            <div className='mainWrap'>
                <Banner product={product}/>
                <Best product={product}/>
                <Products product={product}/>
            </div>
            <Footer />
        </div>
    )
}

export default Home;