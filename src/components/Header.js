import { useState , useRef, useEffect } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const HeaderWrap = styled.header`
    width: 100%;
    background-color: #fff;
    position: relative;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1320px;
    margin: 0 auto;
`;

const TopHeader = styled.div`
    display :flex;
    padding: 15px 0;
    border-bottom: 1px solid #ddd;
    div:first-child{
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 30;
`;

const InfoUl = styled.ul`
    display: flex;
    list-style: none;
    margin-right: 15px;
    li:first-child {
        font-weight: bold;
    }
    li:last-child {
        font-weight:bold;
    }
`

const InfoLi = styled.li`
    font-size: 14px;
    margin-left: 15px;
    cursor: pointer;
    color:#666;
`

const InfoSearch = styled.div`
    display: flex;
`

const InfoInput = styled.input`
    background-color: rgba(0,0,0,0.2);
    border: none;
    padding: 10px;
    border-radius: 5px 0 0 5px;
    color: #333;
    outline: none;
`
const InfoBtn = styled.button`
    width: 35px;
    height: 35.5px;
    background-color: #eee;
    border: none;
    border-radius: 0 5px 5px 0;
    font-size: 16px;
    cursor: pointer;
`

const MidHeader = styled.div`
    position: relative;
    top: 66.5px;
    width: 100%;
    height: 188px;
`

const MidH1 = styled.h1`
    font-size: 24px;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
`

export const BottomHeader = styled.div`
    position: relative;
    top: 58px;
    left: 0;
    right: 0;
    padding: 20px 0;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    z-index: 30;
`;

const MainUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    list-style: none;
    justify-content: center;
    li:hover{
        font-weight: bold;
    }
`

const MainLi = styled.li`
    width: 10%;
    text-align: center;
    font-size: 14px;
    margin: 0 15px;
    color: #666;
    cursor: pointer;
`

function Header() {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    const handleScroll = () => {
        if(window.scrollY >= 188){
            setScroll(true);
        }else {
            setScroll(false)
        }
    }

    return (
        <HeaderWrap>
            <TopHeader>
                <Container>
                    <InfoUl>
                        <InfoLi>로그인</InfoLi>
                        <InfoLi>회원가입</InfoLi>
                        <InfoLi>장바구니</InfoLi>
                        <InfoLi>마이샵</InfoLi>
                    </InfoUl>
                    <InfoSearch>
                        <InfoInput type="search" placeholder="검색어를 입력해주세요" />
                        <InfoBtn className="xi-search"></InfoBtn>
                    </InfoSearch>
                </Container>
            </TopHeader>
            <MidHeader>
                <Link to={'/'}><MidH1>개발자 쇼핑몰</MidH1></Link>
            </MidHeader>
            <BottomHeader style={scroll ? {position: "fixed"} : {position: "relative"}}>
            {/* <BottomHeader className={scroll ? "headerFixed" : ""}> */}
            <Container>
                    <MainUl>
                        <MainLi>Top</MainLi>
                        <MainLi>One-piece</MainLi>
                        <MainLi>All in one</MainLi>
                        <MainLi>Outer</MainLi>
                        <MainLi>Couple</MainLi>
                        <MainLi>Acc</MainLi>
                    </MainUl>
                </Container>
            </BottomHeader>
        </HeaderWrap>
    )
}

export default Header;