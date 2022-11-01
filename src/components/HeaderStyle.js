import styled from "styled-components";

export const HeaderWrap = styled.header`
  width: 100%;
  background-color: #fff;
  position: relative;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
`;

export const TopHeader = styled.div`
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
  div:first-child {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 30;
`;

export const InfoUl = styled.ul`
  display: flex;
  list-style: none;
  margin-right: 15px;
  li:first-child {
    font-weight: bold;
  }
  li:last-child {
    font-weight: bold;
  }
`;

export const InfoLi = styled.li`
  font-size: 1.4em;
  margin-left: 15px;
  cursor: pointer;
  color: #666;
`;

export const InfoSearch = styled.div`
  display: flex;
`;

export const InfoInput = styled.input`
  background-color: rgba(0, 0, 0, 0.2);
  border: none;
  padding: 10px;
  border-radius: 5px 0 0 5px;
  color: #333;
  outline: none;
`;
export const InfoBtn = styled.button`
  width: 35px;
  height: 35.5px;
  background-color: #eee;
  border: none;
  border-radius: 0 5px 5px 0;
  font-size: 1.6em;
  cursor: pointer;
`;

export const MidHeader = styled.div`
  position: relative;
  top: 66.5px;
  width: 100%;
  height: 188px;
`;

export const MidH1 = styled.h1`
  font-size: 2.4em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const BottomHeader = styled.div`
  position: relative;
  top: 64px;
  left: 0;
  right: 0;
  padding: 20px 0;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
`;

export const MainUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  justify-content: center;
  li:hover {
    font-weight: bold;
  }
`;

export const MainLi = styled.li`
  width: 10%;
  text-align: center;
  font-size: 1.4em;
  margin: 0 15px;
  color: #666;
  cursor: pointer;
`;
