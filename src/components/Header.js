import { useState, useEffect } from "react";
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

function Header() {
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
