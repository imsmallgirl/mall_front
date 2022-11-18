import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header, { Container } from '../components/Header';


import underArrow from '../assets/arrow-ios-downward-outline.png'
import BuyBtns from "../components/BuyBtns";


const DetailWrap = styled.div`
    display: flex;
    padding: 60px 0;
    justify-content: space-between;
    gap: 50px;
`

const DetailImage = styled.p`
    width: 50%;
    img{
        width: 100%;
    }
`

const DetailInfo = styled.div`
    width: 50%;
`

const DetailOption = styled.div`
    border-top: 2px solid #000;
    border-bottom : 2px solid #000;
    padding: 20px 0 0 0;
`

const DetailName = styled.h2`
    font-size: 30px;
    font-weight: 400;
    color:#333;
    padding: 20px 0;
`

const DetailTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    th{
        text-align:left;
        color: #555;
    }
    td{
        width: 70%;
        text-align:left;
        letter-spacing: .1em;
    }

    tr:first-child td{
        text-decoration: line-through;
        border-top: 1px solid #eee;
    }

    tr:first-child th,td{
        border-top: 1px solid #eee;
    }

    tr:nth-child(2) td{
        color: #a93535;
    }

    th,td{
        padding: 20px 0;
        border-bottom: 1px solid #eee;
    }

    tr.total-price td.total_price {
        text-decoration: none;
        text-align: right;
        font-size: 30px;
        font-weight: bold;
    }

    tr.total-price td,th{
        border: none;
    }

    select {
        width: 60%;
        padding: 5px 10px;
        outline: none;
        border-color:#aaa;
        color:#444;
        border-radius:5px;
        -webkit-appearance:none; /* for chrome */
        -moz-appearance:none; /*for firefox*/
        appearance:none;
        background-image: url(${underArrow});
        background-size: 20px;
        background-repeat: no-repeat;
        background-position-x : 95%;
        background-position-y : center;
    }
`

const DetailDl = styled.dl`
    padding: 10px 0;
    dt{
        font-size: 14px;
        color: #888;
        margin-bottom: 10px;
    }
    dd{
        color: #a93535;
    }
    dd span{
        margin-right: 10px;
    }
`

function Detail ({product}) {
    const {id} = useParams();

    const selectChange= (event) => {
        console.log(event)
    }
    return (
        <div>
            <Header />
            <div className="mainWrap">
                <Container>
                    <DetailWrap>
                        <DetailImage><img src={product[id].image} alt={product[id].name} /></DetailImage>
                        <DetailInfo>
                            <DetailOption>
                                <DetailName>{product[id].name}</DetailName>
                                <DetailTable>
                                    <tbody>
                                        <tr>
                                            <th>원가</th>
                                            <td>₩{product[id].originPrice}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <th>세일가</th>
                                            <td>₩{product[id].salePrice}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <th>배송비</th>
                                            <td>₩3,000</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <th>제조사</th>
                                            <td>자체 제작</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <th>원산지</th>
                                            <td>국내</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <th>브랜드</th>
                                            <td>자체 브랜드</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <th>현금 / 카드 or 계산서</th>
                                            <td>
                                                <select name="cash-card" id="cash-card" onChange={selectChange}>
                                                    <option value="option">- [필수] 옵션을 선택해 주세요. -</option>
                                                    <option value="cash">CASH(현금)</option>
                                                    <option value="card">CARD(카드 or 계산서)</option>
                                                </select>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <th>색상</th>
                                            <td>
                                                <select name="color-select" id="color-select" onChange={selectChange}>
                                                    <option value="option">- [필수] 옵션을 선택해 주세요. -</option>
                                                    {product[id].color.map((item, index) => {
                                                        return <option key={index} value={item}>{item}</option>
                                                    })}
                                                </select>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <th>사이즈</th>
                                            <td>
                                                <select name="size-select" id="size-select" onChange={selectChange}>
                                                    <option value="option">- [필수] 옵션을 선택해 주세요. -</option>
                                                    {product[id].size.map((item, index) => {
                                                        return <option key={index} value={item}>{item}</option>
                                                    })}
                                                </select>
                                            </td>
                                        </tr>
                                    </tbody>
                                </DetailTable>
                                <DetailDl>
                                    <dt>(최소주문수량 1개 이상)</dt>
                                    <dd><span className="xi-info"></span>위 옵션선택 박스를 선택하시면 아래에 상품이 추가됩니다.</dd>
                                </DetailDl>
                            </DetailOption>
                            <DetailTable>
                                <tr className="total-price">
                                    <th>총 상품금액</th>
                                    <td className="total_price">0</td>
                                </tr>
                            </DetailTable>
                            <BuyBtns />
                        </DetailInfo>
                    </DetailWrap>
                </Container>
            </div>

        </div>
    )
}

export default Detail