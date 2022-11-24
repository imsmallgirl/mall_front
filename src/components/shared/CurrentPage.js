import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeIcon = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 50px;
  font-size: 1.3em;
  span {
    margin-left: 5px;
  }
`;

function CurrentPage({ currentPage }) {
  return (
    <HomeIcon>
      <Link to="/">홈</Link>
      <span>{">"}</span>
      <span>{currentPage}</span>
    </HomeIcon>
  );
}

export default CurrentPage;
