import styled from "styled-components";
import Header from "./components/Header";

const Main = styled.main`
  margin-top: 200px;
`;

const Container = styled.div`
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  border: 1px solid red;
`;

const LoginForm = styled.div`
  width: 400px;
  height: 600px;
  border: 1px solid red;
  margin: 0 auto;
  text-align: center;
`;

const LoginTitle = styled.div`
  margin-bottom: 14px;
  h1 {
    font-size: 4.5em;
    margin-bottom: 12px;
  }
  h2 {
    font-size: 1.4em;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 6px;
  margin-bottom: 5px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  outline: none;
  transition: 0.5s ease-in-out;
  &:focus {
    border-color: black;
  }
`;

const Btn = styled.button`
  padding: 6px;
  background-color: black;
  color: white;
`;

function Login() {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <LoginForm>
            <LoginTitle>
              <h1>Login</h1>
              <h2>WELCOM BACK</h2>
            </LoginTitle>
            <Form>
              <Input placeholder="아이디" />
              <Input type="password" placeholder="비밀번호" />
              <Btn>로그인</Btn>
            </Form>
          </LoginForm>
        </Container>
      </Main>
    </>
  );
}

export default Login;
