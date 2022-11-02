import styled from "styled-components";
import CreateInput from "../components/Input";

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

const JoinTitle = styled.div`
  display: flex;
  font-size: 2em;
  margin-bottom: 50px;
  span:first-child {
    width: 5px;
    height: 15px;
    background-color: black;
    border-radius: 5px;
    margin-right: 5px;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div:first-child {
    font-size: 2em;
    margin-bottom: 15px;
  }
  div:last-child {
    display: flex;
    align-items: center;
    font-size: 1.2em;
    span:first-child {
      color: blue;
      font-size: 1.5em;
      margin-right: 3px;
      margin-top: 5px;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
`;

// ========================================================================================

function Join() {
  return (
    <Main>
      <Container>
        <JoinTitle>
          <span></span>
          <span>회원가입</span>
        </JoinTitle>

        <Title>
          <div>기본정보</div>
          <div>
            <span>*</span>
            <span>필수입력사항</span>
          </div>
        </Title>
        <Form>
          <CreateInput label="아이디" type="text" />
          <CreateInput label="비밀번호" type="password" />
          <CreateInput label="비밀번호 확인" type="password" />
          <CreateInput label="이름" type="text" />
          <CreateInput label="주소" type="text" />
          <CreateInput label="휴대전화" />
          <CreateInput label="이메일" type="email" />
        </Form>
      </Container>
    </Main>
  );
}

export default Join;
