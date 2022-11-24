import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import loginedAtom from "../atom";
import CurrentPage from "../components/shared/CurrentPage";

// ========================================================================================

// Style

const Main = styled.main`
  margin-top: 100px;
`;

const Container = styled.div`
  width: 65%;
  height: 75vh;
  margin: 0 auto;
`;

const LoginForm = styled.div`
  width: 400px;
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
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  outline: none;
  transition: 0.5s ease-in-out;
  &:focus {
    border-bottom: 1px solid black;
  }
  font-size: 1.4em;
`;

const Error = styled.div`
  font-size: 1.2em;
  color: red;
  margin-bottom: 2px;
`;

const Btn = styled.button`
  padding: 10px 6px;
  background-color: black;
  color: white;
  font-size: 1.8em;
  cursor: pointer;
  margin-top: 18px;
`;

// 회원가입 박스
const Box = styled.div`
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  margin-top: 24px;
  padding: 14px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  font-size: 12px;
  a {
    color: rgba(0, 0, 0, 0.4);
  }
  a:hover {
    color: black;
    cursor: pointer;
  }
`;

// ========================================================================================

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const setLogined = useSetRecoilState(loginedAtom);

  const navigate = useNavigate();

  const onValid = (data) => {
    console.log(data);
    setLogined(true);
    navigate("/");
  };
  const onInvalid = (data) => {
    if (data.id) {
      return alert(data.id?.message);
    }
    if (data.password) {
      return alert(data.password?.message);
    }
  };

  return (
    <Main>
      <Container>
        <CurrentPage currentPage="로그인" />
        <LoginForm>
          <LoginTitle>
            <h1>Login</h1>
            <h2>WELCOM BACK</h2>
          </LoginTitle>
          <Form onSubmit={handleSubmit(onValid, onInvalid)}>
            <Input
              {...register("id", {
                required: "아이디를 입력해주세요!",
              })}
              placeholder="아이디"
            />
            <Error>{errors.id && errors.id.message}</Error>

            <Input
              {...register("password", {
                required: "비밀번호를 입력해주세요!",
              })}
              placeholder="비밀번호"
              type="password"
            />
            <Error>{errors.password && errors.password.message}</Error>
            <Btn>로그인</Btn>
          </Form>
          <Box>
            <Link to={"/join"}>회원가입</Link>
          </Box>
        </LoginForm>
      </Container>
    </Main>
  );
}

export default Login;
