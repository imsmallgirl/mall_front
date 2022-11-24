import styled from "styled-components";

// ========================================================================================

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

// ========================================================================================

function InputMaker({
  type,
  register,
  label,
  name,
  required,
  minLength,
  maxLength,
  errorMsg,
  value,
}) {
  return (
    <InputBox>
      <Label>
        {label}
        <span>{required ? "*" : null}</span>
      </Label>
      <Input
        type={type}
        {...register(name, {
          value: value,
          required: { value: required, message: `${label}를 입력해주세요!` },
          minLength: {
            value: minLength,
            message: `${minLength}~${maxLength}글자로 입력해주세요!`,
          },
          maxLength: {
            value: maxLength,
            message: `${maxLength}글자 이하로 입력해 주세요!`,
          },
        })}
      />
      <span>{errorMsg}</span>
    </InputBox>
  );
}

export default InputMaker;
