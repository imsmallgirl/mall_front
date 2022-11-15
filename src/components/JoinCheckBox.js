import { useState } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.8em;
  margin: 35px 0px 8px 0px;
`;
const Container = styled.div`
  width: 100%;
  background-color: #fbfafa;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: none;
`;
const ContainerBox = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 1.2em;
  padding: 16px;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
`;
const AllagreeInput = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
const Label = styled.label`
  font-weight: bold;
`;

const TitleAgree = styled.h2`
  margin-bottom: 10px;
  font-weight: bold;
`;

const TextArea = styled.div`
  width: 100%;
  height: 150px;
  padding: 15px;
  overflow: auto;
  margin-bottom: 10px;

  p {
    margin-bottom: 15px;
    line-height: 1.5;
  }
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.5);
  background-color: white;
`;

const AgreeInput = styled.input``;

function JoinCheck({ register }) {
  const [allCheck, setAllCheck] = useState(false);
  const onClick = () => {
    setAllCheck(!allCheck);
  };
  return (
    <>
      <Title>전체 동의</Title>
      <Container>
        <ContainerBox>
          <InputBox>
            <AllagreeInput
              id="all_check"
              type="checkbox"
              onClick={onClick}
              {...register("all_check")}
            ></AllagreeInput>
            <Label for="all_check">
              이용약관 및 개인 개인정보 수집 및 이용, 쇼핑정보 수신(선택)에 모두
              동의합니다.
            </Label>
          </InputBox>
        </ContainerBox>
        <ContainerBox>
          <TitleAgree>[필수] 이용약관 동의</TitleAgree>
          <TextArea>
            <p>
              제1조(목적)
              <br />이 약관은 U.P.C (전자상거래 사업자)가 운영하는 쥬비코 사이버
              몰(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하
              “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리 의무 및
              책임사항을 규정함을 목적으로 합니다.
              <br />
              ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에
              반하지 않는 한 이 약관을 준용합니다.」
            </p>
            <p>
              제2조(정의)
              <br />① “몰”이란 U.P.C 가 재화 또는 용역(이하 “재화 등”이라 함)을
              이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화
              등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러
              사이버몰을 운영하는 사업자의 의미로도 사용합니다.
              <br />② “이용자”란 “몰”에 접속하여 이 약관에 따라 “몰”이 제공하는
              서비스를 받는 회원 및 비회원을 말합니다.
              <br />③ ‘회원’이라 함은 “몰”에 회원등록을 한 자로서, 계속적으로
              “몰”이 제공하는 서비스를 이용할 수 있는 자를 말합니다.
              <br />④ ‘비회원’이라 함은 회원에 가입하지 않고 “몰”이 제공하는
              서비스를 이용하는 자를 말합니다.
            </p>
            <p>
              제3조 (약관 등의 명시와 설명 및 개정)
              <br />① “몰”은 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지
              주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함), 전화번호,
              모사전송번호, 전자우편주소, 사업자등록번호, 통신판매업 신고번호,
              개인정보보호책임자등을 이용자가 쉽게 알 수 있도록 쥬비코
              사이버몰의 초기 서비스화면(전면)에 게시합니다. 다만, 약관의 내용은
              이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.
              <br />② “몰은 이용자가 약관에 동의하기에 앞서 약관에 정하여져 있는
              내용 중 청약철회, 배송책임, 환불조건 등과 같은 중요한 내용을
              이용자가 이해할 수 있도록 별도의 연결화면 또는 팝업화면 등을
              제공하여 이용자의 확인을 구하여야 합니다.
              <br />③ “몰”은 「전자상거래 등에서의 소비자보호에 관한 법률」,
              「약관의 규제에 관한 법률」, 「전자문서 및 전자거래기본법」,
              「전자금융거래법」, 「전자서명법」, 「정보통신망 이용촉진 및
              정보보호 등에 관한 법률」, 「방문판매 등에 관한 법률」,
              「소비자기본법」 등 관련 법을 위배하지 않는 범위에서 이 약관을
              개정할 수 있습니다.
              <br />④ “몰”이 약관을 개정할 경우에는 적용일자 및 개정사유를
              명시하여 현행약관과 함께 몰의 초기화면에 그 적용일자 7일 이전부터
              적용일자 전일까지 공지합니다. 다만, 이용자에게 불리하게 약관내용을
              변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고
              공지합니다. 이 경우 “몰“은 개정 전 내용과 개정 후 내용을 명확하게
              비교하여 이용자가 알기 쉽도록 표시합니다.
              <br />⑤ “몰”이 약관을 개정할 경우에는 그 개정약관은 그 적용일자
              이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에
              대해서는 개정 전의 약관조항이 그대로 적용됩니다. 다만 이미 계약을
              체결한 이용자가 개정약관 조항의 적용을 받기를 원하는 뜻을 제3항에
              의한 개정약관의 공지기간 내에 “몰”에 송신하여 “몰”의 동의를 받은
              경우에는 개정약관 조항이 적용됩니다.
              <br />⑥ 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는
              전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제 등에 관한
              법률, 공정거래위원회가 정하는 전자상거래 등에서의 소비자 보호지침
              및 관계법령 또는 상관례에 따릅니다.
            </p>
          </TextArea>
          <InputBox>
            <span>이용약관에 동의하십니까?</span>
            <AgreeInput
              id="first_Agree"
              type="checkbox"
              checked={allCheck ? true : null}
              {...register("first_Agree", {
                required: "이용약관에 동의해주세요!",
              })}
            />
            <Label for="first_Agree">동의함</Label>
          </InputBox>
        </ContainerBox>
        <ContainerBox>
          <TitleAgree>[필수] 개인정보 수집 및 이용 동의</TitleAgree>
          <TextArea>
            <p>
              ** 본 양식은 쇼핑몰 운영에 도움을 드리고자 샘플로 제공되는
              서식으로 쇼핑몰 운영형태에 따른 수정이 필요합니다. 쇼핑몰에
              적용하시기 전, 쇼핑몰 운영 사항 등을 확인하시고 적절한 내용을
              반영하여 사용하시기 바랍니다. **
            </p>
            <p>1. 개인정보 수집목적 및 이용목적</p>
            <p>
              가. 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산
            </p>
            <p>
              콘텐츠 제공 , 구매 및 요금 결제 , 물품배송 또는 청구지 등 발송 ,
              금융거래 본인 인증 및 금융 서비스
            </p>
            <p>나. 회원 관리</p>
            <p>
              회원제 서비스 이용에 따른 본인확인 , 개인 식별 , 불량회원의 부정
              이용 방지와 비인가 사용 방지 , 가입 의사 확인 , 연령확인 , 만14세
              미만 아동 개인정보 수집 시 법정 대리인 동의여부 확인, 불만처리 등
              민원처리 , 고지사항 전달
            </p>
            <p>
              2. 수집하는 개인정보 항목 : 이름 , 생년월일 , 성별 , 로그인ID ,
              비밀번호 , 자택 전화번호 , 휴대전화번호 , 이메일 , 14세미만
              가입자의 경우 법정대리인의 정보
            </p>
          </TextArea>
          <InputBox>
            <span>개인정보 수집 및 이용에 동의하십니까?</span>
            <AgreeInput
              id="second_Agree"
              type="checkbox"
              checked={allCheck ? true : null}
              {...register("second_Agree", {
                required: "개인정보 수집 및 이용에 동의해주세요!",
              })}
            />
            <Label for="second_Agree">동의함</Label>
          </InputBox>
        </ContainerBox>
        <ContainerBox>
          <TitleAgree>[선택] 개인정보 처리 위탁 동의</TitleAgree>
          <TextArea>
            <p>
              아래 내용의 동의 여부는 회원가입에 영향을 미치지 않습니다. 단,
              동의 거부시 서비스 이용에 제한이 있을 수 있습니다.
            </p>
            <br />
            <p>
              - 위탁받는 자(수탁업체) : 택배사
              <br />
              <br />- 위탁업무의 내용: 고객의 이름, 주소, 연락처 등 물품 배송을
              위한 정보
            </p>
          </TextArea>
          <InputBox>
            <span>개인정보 처리 위탁에 동의하십니까?</span>
            <AgreeInput
              id="third_Agree"
              type="checkbox"
              checked={allCheck ? true : null}
              {...register("third_Agree", { required: false })}
            />
            <Label for="third_Agree">동의함</Label>
          </InputBox>
        </ContainerBox>
        <ContainerBox>
          <TitleAgree>[선택] 쇼핑정보 수신 동의</TitleAgree>
          <TextArea>
            <br />
            <p>
              할인쿠폰 및 혜택, 이벤트, 신상품 소식 등 쇼핑몰에서 제공하는
              유익한 쇼핑정보를 SMS나 이메일로 받아보실 수 있습니다.
            </p>
            <p>
              단, 주문/거래 정보 및 주요 정책과 관련된 내용은 수신동의 여부와
              관계없이 발송됩니다.
            </p>
            <p>
              선택 약관에 동의하지 않으셔도 회원가입은 가능하며, 회원가입 후
              회원정보수정 페이지에서 언제든지 수신여부를 변경하실 수 있습니다.
            </p>
          </TextArea>

          <InputBox>
            <span>SMS 수신을 동의하십니까?</span>
            <AgreeInput
              id="sms_Agree"
              type="checkbox"
              checked={allCheck ? true : null}
              {...register("sms_Agree", { required: false })}
            />
            <Label for="sms_Agree">동의함</Label>
          </InputBox>
          <InputBox>
            <span>이메일 수신을 동의하십니까?</span>
            <AgreeInput
              id="email_Agree"
              type="checkbox"
              checked={allCheck ? true : null}
              {...register("email_Agree", { required: false })}
            />
            <Label for="email_Agree">동의함</Label>
          </InputBox>
        </ContainerBox>
      </Container>
    </>
  );
}

export default JoinCheck;
