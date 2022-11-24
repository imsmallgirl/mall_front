import React from "react";
import styled from "styled-components";
import { Container } from "../header/HeaderStyle";
import "./footer.css";

const FooterWrap = styled.div`
  border-top: 1px solid #333;
  height: 40vh;
`;

const FooterMenuUl = styled.ul`
  display: flex;
  list-style: none;
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
  li:first-child {
    margin-left: 0;
  }
`;
const FooterMenuLi = styled.li`
  font-size: 14px;
  margin: 0 20px;
  color: #444;
`;

const FooterContentWrap = styled.ul`
  padding: 30px 0;
  display: flex;
  border-bottom: 1px solid #ccc;
  justify-content: space-between;
  list-style: none;
  li:first-child {
    padding-left: 0;
  }
  li:last-child {
    padding-right: 0;
    border-right: none;
  }
`;

const FooterContent = styled.li`
  width: ${(props) => props.width};
  border-right: 1px solid #ccc;
  padding: 10px 40px;
  span::after {
    content: "";
    position: absolute;
    bottom: 15px;
    left: 0;
    width: 15px;
    height: 1px;
    background-color: #333;
  }
`;

const FooterContentTit = styled.span`
  display: inline-block;
  position: relative;
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 30px;
`;
const FooterSelect = styled.select`
  margin-top: 10px;
  width: 70%;
  padding: 5px 3px;
  border: 1px solid #999;
`;

const FooterBottomWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  list-style: none;
`;

const FooterBottomContent = styled.li`
  width: 50%;
  span::after {
    content: "";
    position: absolute;
    bottom: 15px;
    left: 0;
    width: 15px;
    height: 1px;
    background-color: #333;
  }
`;

const FooterBottomContentUl = styled.ul`
  display: flex;
  list-style: none;
  margin-bottom: 10px;
`;

const FooterBottomContentLi = styled.li`
  margin-right: 20px;
  font-size: 14px;
  color: #333;
  span {
    color: #999;
    margin-right: 10px;
  }
`;

function Footer() {
  return (
    <FooterWrap>
      <Container>
        <FooterMenuUl>
          <FooterMenuLi>회사소개</FooterMenuLi>
          <FooterMenuLi>이용약관</FooterMenuLi>
          <FooterMenuLi>쇼핑몰 이용안내</FooterMenuLi>
          <FooterMenuLi>
            <strong>개인정보취급방침</strong>
          </FooterMenuLi>
          <FooterMenuLi>고객센터</FooterMenuLi>
          <FooterMenuLi>제휴/도매문의</FooterMenuLi>
          <FooterMenuLi>채용정보</FooterMenuLi>
        </FooterMenuUl>
        <FooterContentWrap>
          <FooterContent width="25%">
            <FooterContentTit>고객만족센터</FooterContentTit>
            <dl className="footer-content1">
              <dt>070-7732-7799</dt>
              <dd>
                <strong>평일</strong>오전 10:00 ~ 오후 15:00
              </dd>
              <dd>
                <strong>휴무</strong>토 / 일 / 공휴일은 휴무
              </dd>
            </dl>
          </FooterContent>
          <FooterContent width="25%">
            <FooterContentTit>은행계좌안내</FooterContentTit>
            <dl className="footer-content1">
              <dt></dt>
              <dd>
                <strong>코린은행</strong>1234567-89-101112
              </dd>
              <dd>
                <strong>예금주</strong>코린이(코린이방)
              </dd>
            </dl>
            <FooterSelect name="footerBank">
              <option value="first">인터넷 뱅킹 바로가기</option>
            </FooterSelect>
          </FooterContent>
          <FooterContent width="40%">
            <li className="footer-content2">
              <ul>
                <li>
                  <span>배송조회</span>
                  <dl>
                    <dt>
                      코린택배 (TEL:1234-5678){" "}
                      <button>배송위치 조회하기</button>
                    </dt>
                    <dd>배송 정보는 해당 택배사를 통해 조회가 가능하십니다.</dd>
                  </dl>
                </li>
                <li>
                  <span>반품 & 교환</span>
                  <dl>
                    <dt>
                      <strong>반품배송지</strong>코린특별시 코린구 코린2길 15
                    </dt>
                    <dd>
                      공지사항 및 이용안내를 참고하셔서 지정 택배사로 반품
                      요청해주세요.
                    </dd>
                  </dl>
                </li>
              </ul>
            </li>
          </FooterContent>
          <FooterContent width="15%">
            <FooterContentTit>쇼핑 메뉴</FooterContentTit>
            <ul className="footer-content3">
              <li>자주 묻는 질문</li>
              <li>고객 만족 센터</li>
              <li>회원 등급 안내</li>
              <li>브랜드 스토리</li>
            </ul>
          </FooterContent>
        </FooterContentWrap>
        <FooterBottomWrap>
          <FooterBottomContent>
            <FooterContentTit>회사정보</FooterContentTit>
            <FooterBottomContentUl>
              <FooterBottomContentLi>
                <span>회사명</span>개발자쇼핑몰
              </FooterBottomContentLi>
              <FooterBottomContentLi>
                <span>대표</span>개발자
              </FooterBottomContentLi>
              <FooterBottomContentLi>
                <span>대표전화</span>123-4567-8910
              </FooterBottomContentLi>
              <FooterBottomContentLi>
                <span>팩스</span>12-345-6789
              </FooterBottomContentLi>
            </FooterBottomContentUl>
            <FooterBottomContentUl>
              <FooterBottomContentLi>
                <span>주소</span>코린특별시 코린구 코린2길 15
              </FooterBottomContentLi>
            </FooterBottomContentUl>
            <FooterBottomContentUl>
              <FooterBottomContentLi>
                <span>사업자 등록번호</span>123-45-67891
              </FooterBottomContentLi>
              <FooterBottomContentLi>
                <span>통신판매업 신고</span>제 2022-코린이구-1234 호
              </FooterBottomContentLi>
            </FooterBottomContentUl>
            <FooterBottomContentUl>
              <FooterBottomContentLi>
                <span>개인정보관리책임자</span>개발자(coding@naver.com)
              </FooterBottomContentLi>
              <FooterBottomContentLi>
                <span>이메일</span>coding@naver.com
              </FooterBottomContentLi>
            </FooterBottomContentUl>
          </FooterBottomContent>
          <FooterBottomContent className="footer-right">
            <p>
              <span>KG 에스크로 이니페이</span> 를 통해 고객님은 안전한 거래를
              위해 현금 등으로
              <br />
              결제시 저희 쇼핑몰 에서 가입한 구매안전 서비스를 이용하실 수
              있습니다.
            </p>
            <button>서비스 가입사실 확인</button>
          </FooterBottomContent>
        </FooterBottomWrap>
      </Container>
    </FooterWrap>
  );
}

export default Footer;
