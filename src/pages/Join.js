import styled from "styled-components";
import CurrentPage from "../components/shared/CurrentPage";

import { useForm } from "react-hook-form";

import Maintitle from "../components/shared/MainTitle";
import InputMaker from "../components/InputContainer";
import JoinCheck from "../components/JoinCheckBox";
import SubTitle from "../components/shared/SubTitle";

// ========================================================================================

// Style
const Main = styled.div`
  margin-top: 100px;
`;

const Container = styled.div`
  width: 65%;
  height: 250vh;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
`;

const Btn = styled.button`
  width: 20%;
  margin: 0 auto;
  margin-top: 80px;
  padding: 8px 10px;
  background-color: black;
  color: white;
  font-size: 1.8em;
  cursor: pointer;
`;

// ========================================================================================

function Join() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    if (data.confirmPassword !== data.password) {
      return alert("비밀번호와 비밀번호 확인이 다릅니다!");
    }
  };
  const oninvalid = (errors) => {
    if (errors.id) {
      return alert(errors.id.message);
    }
    if (errors.password) {
      return alert(errors.password.message);
    }
    if (errors.name) {
      return alert(errors.name.message);
    }
    if (errors.address) {
      return alert(errors.address.message);
    }
    if (errors.phonNumber) {
      return alert(errors.phonNumber.message);
    }
    if (errors.email) {
      return alert(errors.email.message);
    }
    if (errors.first_Agree) {
      return alert(errors.first_Agree.message);
    }
    if (errors.second_Agree) {
      return alert(errors.second_Agree.message);
    }
  };
  return (
    <Main>
      <Container>
        <CurrentPage currentPage="회원 가입" />
        <Maintitle title="회원가입" />
        <SubTitle title="기본정보" />
        <Form onSubmit={handleSubmit(onValid, oninvalid)}>
          <InputMaker
            type="text"
            register={register}
            label="아이디"
            name="id"
            required={true}
            minLength={5}
            maxLength={10}
            errorMsg={errors.id?.message}
          />
          <InputMaker
            type="password"
            register={register}
            label="비밀번호"
            name="password"
            required={true}
            minLength={8}
            maxLength={16}
            errorMsg={errors.password?.message}
          />
          <InputMaker
            type="password"
            register={register}
            label="비밀번호 확인"
            name="confirmPassword"
            required={true}
            minLength={8}
            maxLength={16}
            errorMsg={errors.confirmPassword?.message}
          />
          <InputMaker
            type="text"
            register={register}
            label="이름"
            name="name"
            required={true}
            minLength={0}
            maxLength={6}
            errorMsg={errors.name?.message}
          />
          <InputMaker
            type="text"
            register={register}
            label="주소"
            name="address"
            required={true}
            errorMsg={errors.address?.message}
          />
          <InputMaker
            type="text"
            register={register}
            label="핸드폰"
            name="phonNumber"
            required={true}
            minLength={0}
            maxLength={11}
            errorMsg={errors.phonNumber?.message}
          />
          <InputMaker
            type="email"
            register={register}
            label="이메일"
            name="email"
            required={true}
            minLength={0}
            maxLength={15}
            errorMsg={errors.email?.message}
          />

          <JoinCheck register={register} />
          <Btn>로그인</Btn>
        </Form>
      </Container>
    </Main>
  );
}

export default Join;
