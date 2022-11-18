import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const ProductCard = styled.li`
    margin: 5px 20px 40px 0;
`

const ProductColorUl = styled.ul`
    padding: 10px 5px 0px 5px;
    li:first-child {
        margin-left: 0;
    }
`

const ProductColorLi = styled.li`
    background-color: ${(props) => props.background};
    display: inline-block;
    width: 20px;
    height: 10px;
    margin:0 5px;
`

const ProductCardDl = styled.dl`
    padding: 10px 5px;
    dd:first-of-type {
        padding: 10px 0;
    }
    dd:nth-of-type(2) {
        text-decoration: line-through;
    }
`

const ProductCardDt = styled.dt`
    font-size: 16px;
    font-weight: 500;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
`

const ProductCardDd = styled.dd`
    font-size: 14px;
    color:#999;
    font-weight: bold;
`
const ProductCardPriceDd = styled.dd`
    font-size: 15px;
    color:#555;
    font-weight: bold;
`


function Product ({productColorChart, productId, productImg, productTit, productInfo , productSalePrice, productOriginPrice }) {
    return(
        <ProductCard>
            <Link to={`/detail/${productId}`}><img src={productImg} alt={productTit} style={{width : 300}}/></Link>
            <ProductColorUl>
                {productColorChart.map((item, index) => {
                    return <ProductColorLi key={index} background={item}></ProductColorLi>
                })}
            </ProductColorUl>
            <ProductCardDl>
                <ProductCardDt>
                    {productTit}
                </ProductCardDt>
                <ProductCardDd>
                    {productInfo}
                </ProductCardDd>
                <ProductCardDd>
                    정가 : {productOriginPrice}
                </ProductCardDd>
                <ProductCardPriceDd>
                    할인가 : {productSalePrice}
                </ProductCardPriceDd>
            </ProductCardDl>
        </ProductCard>
    )
}

export default Product;