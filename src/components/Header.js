import styled from "styled-components";

const HeaderWrap = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
`;

const TopHeader = styled.div`
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
  div:first-child {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

const InfoUl = styled.ul`
  display: flex;
  list-style: none;
  margin-right: 15px;
  li:first-child {
    font-weight: bold;
  }
  li:last-child {
    font-weight: bold;
  }
`;

const InfoLi = styled.li`
  font-size: 1.4em;
  margin-left: 15px;
  cursor: pointer;
  color: #666;
`;

const InfoSearch = styled.div`
  display: flex;
`;

const InfoInput = styled.input`
  background-color: rgba(0, 0, 0, 0.2);
  border: none;
  padding: 10px;
  border-radius: 5px 0 0 5px;
  color: #333;
  outline: none;
`;
const InfoBtn = styled.button`
  width: 35px;
  height: 35.5px;
  background-color: #eee;
  border: none;
  border-radius: 0 5px 5px 0;
  font-size: 1.6em;
  cursor: pointer;
`;

const BottomHeader = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
`;

const MainUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  justify-content: center;
  li:hover {
    font-weight: bold;
  }
`;

const MainLi = styled.li`
  width: 10%;
  text-align: center;
  font-size: 1.4em;
  margin: 0 15px;
  color: #666;
  cursor: pointer;
`;

function Header() {
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
      <BottomHeader>
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
  );
}

export default Header;
