import React from "react";
import styled from "styled-components";

const BuyBtnsWrap = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    button {
        padding: 20px 0;
        cursor: pointer;
        box-sizing: border-box;
        font-size: 18px;
    }
`

const BuyButton = styled.button`
    width: 50%;
    color: #fff;
    background-color: #333;
    border : 1px solid #333;
`

const BasketButton = styled.button`
    width: 25%;
    border: 1px solid #aaa;
`

function BuyBtns () {
    return(
        <BuyBtnsWrap>
            <BuyButton>바로 구매하기</BuyButton>
            <BasketButton>장바구니 담기</BasketButton>
            <BasketButton>관심상품등록</BasketButton>
        </BuyBtnsWrap>
    )
}

export default BuyBtns;