import styled from "styled-components";

const MainTitle = styled.div`
  display: flex;
  font-size: 2em;
  margin-bottom: 30px;
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

function Maintitle({ title }) {
  return (
    <MainTitle>
      <span></span>
      <span>{title}</span>
    </MainTitle>
  );
}

export default Maintitle;
