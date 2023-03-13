import styled from "styled-components";

export const CardContainer = styled.div`
  height: 200px;
  border:10px solid  #ffc609;
  border-radius: 10px;
  

`;


export const CardsContainer = styled.div`
  height: 150px;
  display: flex;

  width: 100%;
  padding: 7px 7px 0 7px;
  background-color: #ff8c00;
  border-radius: 10px;
  flex-direction: column;
`;

export const Card3Container = styled.div`
  height: 155px;
  display: flex;

  width: 100%;


  border-radius: 10px;
  flex-direction: column;
`;

export const Container = styled.div`
  height: 170px;
  display: flex;

  width: 100%;
 

  border-radius: 10px;
  flex-direction: column;
  position: relative;
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
  width: 150px;
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

export const CardText = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 55px;
  text-transform: uppercase;
  font-size: 1rem;
`;

export const CardSubText = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  font-weight: 700;
  font-size: 1rem;
`;

export const CardButton = styled.button`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  font-weight: 700;
  font-size: 1rem;
  width: 20%;
  padding: 10px 4rem;
  background-color: white;
  color: #130e2d;
  border: 2px solid #130e2d;
  border-radius: 10px;
  position: absolute;
  bottom: -2%;
  left: 20%;
  cursor: pointer;
`;

export const Avtarimage = styled.div`
  
  position: absolute;
 top:-10%;
  left: 37%;
  border-radius: 50%;
  border: 3px solid white;
  
`;
