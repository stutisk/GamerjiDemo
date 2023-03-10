import styled from "styled-components";

export const CardContainer = styled.div`
  height: 200px;
`;
export const CardsContainer = styled.div`
  height: 150px;
  display: flex;

  width: 100%;
  padding: 7px;
  background-color: #ff8c00;
  border-radius: 10px;
  flex-direction: column;
`;

export const Cards2Container = styled.div`
  height: 150px;
  display: flex;

  width: 100%;
  padding: 7px;

  border-radius: 10px;
  flex-direction: column;
`;

export const Cards2Image = styled.div`
  height: 85px;
  width: 100%;
`;
export const Cards2text = styled.div`
  width: 170px;
  -webkit-line-clamp: 2;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  font-size: 1rem;
  font-weight: 300;
`;
export const Cardmarqueetext = styled.div`
  font-size: 1rem;
  font-weight: 700;
  height: 25px;

  overflow: hidden;
  position: relative;
`;
