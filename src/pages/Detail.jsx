import React from "react";
import { useParams } from "react-router-dom";
import Header from '../components/Header';

function Detail ({product}) {
    const {id} = useParams();
    return (
        <div>
            <Header />
            <img src={product[id].image}></img>
            <h2></h2>
            {product[id].color}
        </div>
    )
}

export default Detail