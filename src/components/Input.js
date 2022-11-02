import styled from "styled-components";

const InputBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-right: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
const Input = styled.input`
  height: 24px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-left: 8px;
  outline: none;
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

function CreateInput({ label, type }) {
  return (
    <InputBox>
      <Label>
        {label}
        <span>*</span>
      </Label>
      <Input type={type} />
    </InputBox>
  );
}

export default CreateInput;
