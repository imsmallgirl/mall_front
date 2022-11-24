import styled from "styled-components";

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

export default function SubTitle({ title }) {
  return (
    <Title>
      <div>{title}</div>
      <div>
        <span>*</span>
        <span>필수입력사항</span>
      </div>
    </Title>
  );
}
