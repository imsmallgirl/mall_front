import styled from "styled-components";
import CurrentPage from "../components/CurrentPage";
import Footer from "../components/Footer";
import InputContainer from "../components/InputContainer";

import Maintitle from "../components/MainTitle";
import { category } from "../type";

// ========================================================================================

// Style
const Main = styled.div`
  margin-top: 100px;
`;

const Container = styled.div`
  width: 65%;
  height: 200vh;
  margin: 0 auto;
`;

// ========================================================================================

function Join() {
  return (
    <Main>
      <Container>
        <CurrentPage currentPage="회원 가입" />
        <Maintitle title="회원가입" />
        <InputContainer type={category.join} />
      </Container>
      <Footer />
    </Main>
  );
}

export default Join;
