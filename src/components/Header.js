import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import user from "../UserDB";
import {
  HeaderWrap,
  Container,
  TopHeader,
  InfoUl,
  InfoSearch,
  InfoInput,
  InfoBtn,
  InfoLi,
  MidHeader,
  MidH1,
  BottomHeader,
  MainUl,
  MainLi,
} from "./HeaderStyle";

function Header({ logined }) {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  const handleScroll = () => {
    if (window.scrollY >= 188) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const onClick = () => {};

  return (
    <HeaderWrap>
      <TopHeader>
        <Container>
          <InfoUl>
            {user.logined ? (
              <div>
                <Link to="/">
                  <InfoLi onClick={onClick}>로그아웃</InfoLi>
                </Link>
                <Link to={`/user/${user.id}`}>
                  <InfoLi>회원정보수정</InfoLi>
                </Link>
              </div>
            ) : (
              <div>
                <Link to="/login">
                  <InfoLi>로그인</InfoLi>
                </Link>
                <Link to="/join">
                  <InfoLi>회원가입</InfoLi>
                </Link>
              </div>
            )}

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
        <MidH1>개발자 쇼핑몰</MidH1>
      </MidHeader>
      <BottomHeader
        style={scroll ? { position: "fixed" } : { position: "relative" }}
      >
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
      <div style={scroll ? { height: "50px" } : null}></div>
    </HeaderWrap>
  );
}

export default Header;
