import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import CurrentPage from "../components/CurrentPage";
import InputContainer from "../components/InputContainer";
import Maintitle from "../components/MainTitle";
import { category } from "../type";
import user from "../UserDB";
import Footer from "../components/Footer";

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

function UserInfo() {
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
        <InputContainer type={category.userinfo} />
      </Container>
      <Footer />
    </Main>
  );
}

export default UserInfo;
