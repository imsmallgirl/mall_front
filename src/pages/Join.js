import { Link } from "react-router-dom";
import styled from "styled-components";
import { HomeIcon } from "../components/HomeIconStyle";
import InputContainer from "../components/InputContainer";
import { category } from "../type";

// ========================================================================================

// Style
const Main = styled.div`
  margin-top: 100px;
`;

const Container = styled.div`
  width: 50%;
  height: 100vh;
  margin: 0 auto;
`;

// ========================================================================================

function Join() {
  return (
    <Main>
      <Container>
        <HomeIcon>
          <Link to="/">홈</Link>
          <span>{">"}</span>
          <span>회원가입</span>
        </HomeIcon>
        <InputContainer type={category.join} />
      </Container>
    </Main>
  );
}

export default Join;
