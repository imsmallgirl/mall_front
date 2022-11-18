import React from "react";
import styled from "styled-components";
import { Container } from "./Header";
import Product from "./Product";


const ProductWrap = styled.section`
    padding: 50px 0;
`

const ProductH2 = styled.h2`
    text-align: center;
    font-size: 30px;
    font-weight: normal;
    margin-bottom: 50px;
`

const ProductUl = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

function Products({product}) {
    
    return(
        <ProductWrap>
            <Container>
                <ProductH2>OUR PRODUCTS</ProductH2>
                <ProductUl>
                    {product.map((item) => {
                        return <Product key={item.id} productId={item.id} productImg={item.image} productTit={item.name} productInfo={item.content} productSalePrice={item.salePrice} productOriginPrice={item.originPrice} productColorChart={item.colorChart}></Product>
                    })}
                </ProductUl>
            </Container>
        </ProductWrap>
    )
}

export default Products;