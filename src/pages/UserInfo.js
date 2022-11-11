import { Link } from "react-router-dom";
import styled from "styled-components";
import { HomeIcon } from "../components/HomeIconStyle";
import InputContainer from "../components/InputContainer";
import { category } from "../type";

const Main = styled.div`
  margin-top: 100px;
`;

const Container = styled.div`
  width: 50%;
  height: 100vh;
  margin: 0 auto;
`;

function UserInfo() {
  return (
    <Main>
      <Container>
        <HomeIcon>
          <Link to="/">홈</Link>
          <span>{">"}</span>
          <span>회원 정보 수정</span>
        </HomeIcon>
        <InputContainer type={category.userinfo} />
      </Container>
    </Main>
  );
}

export default UserInfo;
