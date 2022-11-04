import styled from "styled-components";
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
        <InputContainer type={category.userinfo} />
      </Container>
    </Main>
  );
}

export default UserInfo;
