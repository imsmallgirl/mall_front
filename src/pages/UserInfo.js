import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import CurrentPage from "../components/shared/CurrentPage";
import Maintitle from "../components/shared/MainTitle";

import user from "../UserDB";
import SubTitle from "../components/shared/SubTitle";
import InputMaker from "../components/InputContainer";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import loginedAtom from "../atom";

const Main = styled.div`
  margin-top: 100px;
`;

const Container = styled.div`
  width: 65%;
  height: 130vh;
  margin: 0 auto;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  height: 90px;
  border: 1px solid black;
  margin-bottom: 50px;
  padding: 10px 15px;
`;

const UserIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 68px;
  margin-right: 15px;
  svg {
    color: white;
  }
  background-color: #8c98aa;
`;

const UserWelecom = styled.div`
  padding-left: 10px;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  height: 68px;
  display: flex;
  align-items: center;
  font-size: 1.2em;
  span {
    color: #008bcc;
    font-weight: bold;
  }
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

function UserInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const logined = useRecoilValue(loginedAtom);

  const onValid = (data) => {
    if (data.new_password !== data.new_password_confirm) {
      return alert("새 비밀번호와 새 비밀번호 확인이 다릅니다!");
    }
  };
  const oninvalid = () => {
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
  };
  return (
    <Main>
      <Container>
        <CurrentPage currentPage="회원 정보 수정" />
        <Maintitle title="회원 정보 수정" />.
        <UserContainer>
          <UserIcon>
            <FontAwesomeIcon icon={faUser} size="4x" />
          </UserIcon>
          <UserWelecom>
            <div>
              어서오세요 <span>{user.name}</span>님 저희 쇼핑몰을 찾아주셔서
              감사합니다.
            </div>
          </UserWelecom>
        </UserContainer>
        <SubTitle title="회원 정보" />
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
            value={logined ? user.userId : null}
          />
          <InputMaker
            type="password"
            register={register}
            label="새 비밀번호"
            name="new_password"
            required={false}
            minLength={8}
            maxLength={16}
            errorMsg={errors.new_password?.message}
            value={null}
          />
          <InputMaker
            type="password"
            register={register}
            label="새 비밀번호 확인"
            name="new_password_confirm"
            required={false}
            minLength={8}
            maxLength={16}
            errorMsg={errors.new_password_confirm?.message}
            value={null}
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
            value={logined ? user.name : null}
          />
          <InputMaker
            type="text"
            register={register}
            label="주소"
            name="address"
            required={true}
            errorMsg={errors.address?.message}
            value={logined ? user.address : null}
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
            value={logined ? user.phonNumber : null}
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
            value={logined ? user.email : null}
          />
          <Btn>수정하기</Btn>
        </Form>
      </Container>
    </Main>
  );
}

export default UserInfo;
