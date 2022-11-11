import { useForm } from "react-hook-form";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import user from "../UserDB";
import { useRecoilValue } from "recoil";
import loginedAtom from "../atom";

// ========================================================================================

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

const Btn = styled.button`
  width: 40%;
  margin: 0 auto;
  margin-top: 80px;
  padding: 5px 10px;
  background-color: black;
  color: white;
  font-size: 1.8em;
  cursor: pointer;
`;

const InputBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-right: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  span {
    font-size: 1.2em;
    color: red;
  }
`;
const Input = styled.input`
  height: 24px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-left: 8px;
  outline: none;
  margin-right: 5px;
`;
const Label = styled.label`
  width: 135px;
  height: 50px;
  font-size: 1.2em;
  padding: 10px 0px 0px 10px;
  background-color: #fbfafa;
  span {
    color: blue;
    font-size: 1.2em;
    margin-left: 5px;
  }
`;

const MainTitle = styled.div`
  display: flex;
  font-size: 2em;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  span:first-child {
    width: 5px;
    height: 15px;
    background-color: black;
    border-radius: 5px;
    margin-right: 5px;
    margin-top: 2px;
  }
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

// ========================================================================================

function InputContainer({ type }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const logined = useRecoilValue(loginedAtom);

  const onValid = (data) => {
    console.log(data);
  };

  const onInvalid = (errors) => {
    console.log(errors);
  };
  return (
    <>
      <MainTitle>
        <span></span>
        <span>{type === "join" ? "회원가입" : "회원 정보 수정"}</span>
      </MainTitle>
      {type === "info" && (
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
      )}
      <Title>
        <div>기본정보</div>
        <div>
          <span>*</span>
          <span>필수입력사항</span>
        </div>
      </Title>
      <Form method="POST" onSubmit={handleSubmit(onValid, onInvalid)}>
        <InputBox>
          <Label>
            아이디
            <span>*</span>
          </Label>
          <Input
            {...register("id", {
              required: "아이디를 입력해 주세요!",
              minLength: { value: 5, message: "5~10글자로 입력해주세요!" },
              maxLength: {
                value: 10,
                message: "10글자 이하로 입력해 주세요!",
              },
              value: logined ? user.userId : null,
            })}
          />
          <span>{errors.id?.message}</span>
        </InputBox>
        {type === "join" ? (
          <InputBox>
            <Label>
              비밀번호
              <span>*</span>
            </Label>
            <Input
              {...register("pwd", {
                required: "비밀번호를 입력해 주세요!",
                minLength: { value: 8, message: "8자 이상 입력해 주세요!" },
                maxLength: { value: 16, message: "16자 이하로 입력해 주세요!" },
              })}
              type="password"
            />
            <span>{errors.pwd?.message}</span>
          </InputBox>
        ) : (
          <InputBox>
            <Label>새 비밀번호</Label>
            <Input
              {...register("new_pwd", {
                minLength: { value: 8, message: "8자 이상 입력해 주세요!" },
                maxLength: { value: 16, message: "16자 이하로 입력해 주세요!" },
              })}
              type="password"
            />
            <span>{errors.pwd?.message}</span>
          </InputBox>
        )}
        {type === "join" ? (
          <InputBox>
            <Label>
              비밀번호 확인
              <span>*</span>
            </Label>
            <Input
              {...register("pwd2", {
                required: "비밀번호 확인을 입력해 주세요!",
              })}
              type="password"
            />
            <span>{errors.pwd2?.message}</span>
          </InputBox>
        ) : (
          <InputBox>
            <Label>새 비밀번호 확인</Label>
            <Input {...register("new_pwd2", {})} type="password" />
          </InputBox>
        )}
        <InputBox>
          <Label>
            이름
            <span>*</span>
          </Label>
          <Input
            {...register("name", {
              required: "이름을 입력해 주세요!",
              value: logined ? user.name : null,
            })}
          />
          <span>{errors.name?.message}</span>
        </InputBox>
        <InputBox>
          <Label>
            주소
            <span>*</span>
          </Label>
          <Input
            {...register("address", {
              required: "주소를 입력해 주세요!",
              value: logined ? user.address : null,
            })}
          />
          <span>{errors.address?.message}</span>
        </InputBox>
        <InputBox>
          <Label>
            이메일
            <span>*</span>
          </Label>
          <Input
            {...register("email", {
              required: "이메일을 입력해 주세요!",
              value: logined ? user.email : null,
            })}
            type="email"
          />
          <span>{errors.email?.message}</span>
        </InputBox>
        <InputBox>
          <Label>
            핸드폰
            <span>*</span>
          </Label>
          <Input
            {...register("phon", {
              required: "번호를 입력해 주세요!",
              value: logined ? user.phonNumber : null,
            })}
          />
          <span>{errors.phon?.message}</span>
        </InputBox>

        {<Btn>{type === "join" ? "가입하기" : "수정하기"}</Btn>}
      </Form>
      ;
    </>
  );
}

export default InputContainer;
