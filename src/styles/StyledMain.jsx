import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  text-align: center;
  position: relative;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  background: #fff;
  width: 393px;
  min-height: 100vh;

  .startPage {
    width: 100%;
    background-color: #ffb627;
    .logo {
      margin-top: 350px;
    }
  }
`;

export const TodayR = styled.div`
  .mainLogo {
    display: block;
    margin-left: 0; /* 왼쪽 정렬 */
    margin-top: 10px; /* 오른쪽 여백 자동 */
  }
  h4 {
    font-size: 16px;
    text-align: left;
    margin: 20px;
  }
  .todayR {
    display: flex;
    justify-content: space-around;
    gap: 12px;
    margin: 20px;
  }
  .recipe-box {
    width: 79px;
    height: 79px;
    border-radius: 5px;
    background-color: #ededed;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  span {
    font-size: 10px;
    text-align: center;
  }
`;

export const Famous = styled.div`
  display: block;

  h4 {
    font-size: 16px;
    text-align: left;
    margin: 0 20px 20px 20px;
  }

  .famousR {
    display: flex;
    flex-wrap: wrap; /* 한 줄이 넘치면 다음 줄로 이동 */
    justify-content: space-evenly; /* 간격 조정 */
    row-gap: 20px;
    margin-bottom: 40px;

    img {
      width: 160px;
      height: 160px;
      border-radius: 5px;
    }

    p {
      font-size: 14px;
      margin: 10px 0 0 3px;
      text-align: left; /* 왼쪽 정렬 */
      width: 100%;
    }
  }
`;

export const Reaction = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 14px !important;
    height: 14px !important;
    margin: 0 5px 0 3px;
  }
  span {
    margin: 0 10px 0 0;
  }
`;

export const Nav = styled.div`
  position: fixed; /* 하단에 고정 */
  bottom: 0; /* 화면의 맨 아래로 위치 */
  z-index: 1000; /* 다른 요소 위에 표시 */
  display: flex;
  flex-direction: column;
  width: 391px;
  height: 81px;
  flex-shrink: 0;
  border-radius: 0px 0px 30px 30px;
  background: #fff;
`;

export const Hr = styled.div`
  width: 391px;
  height: 1px;
  flex-shrink: 0;
  stroke-width: 1px;
  background: #ebeaea;
`;

export const Item = styled.div`
  display: flex;
  felx-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 15px;
  gap: 50px;
`;

export const Maker = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 6px;

  img {
    width: 24.746px;
    height: 24.746px;
    flex-shrink: 0;
  }

  div {
    color: #363636;
    text-align: center;
    font-family: "Instrument Sans";
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const Search = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 6px;

  img {
    width: 24.746px;
    height: 24.746px;
    flex-shrink: 0;
  }

  div {
    color: #363636;
    text-align: center;
    font-family: "Instrument Sans";
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 6px;

  img {
    width: 24.746px;
    height: 24.746px;
    flex-shrink: 0;
  }

  div {
    color: #363636;
    text-align: center;
    font-family: "Instrument Sans";
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Write = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 6px;

  img {
    width: 24.746px;
    height: 24.746px;
    flex-shrink: 0;
  }

  div {
    color: #363636;
    text-align: center;
    font-family: "Instrument Sans";
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Me = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 6px;

  img {
    width: 24.746px;
    height: 24.746px;
    flex-shrink: 0;
  }

  div {
    color: #363636;
    text-align: center;
    font-family: "Instrument Sans";
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const LogoutButton = styled.div``;
