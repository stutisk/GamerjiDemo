import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MainPageContainer = styled.div`
  -webkit-box-shadow: 0px 0px 273px -69px rgba(84, 85, 89, 1);
  -moz-box-shadow: 0px 0px 273px -69px rgba(84, 85, 89, 1);
  box-shadow: 0px 0px 273px -69px rgba(84, 85, 89, 1);
  max-width: 450px;

 
  border-radius: 35px;
 
`;
export const Section = styled.div`
 
  padding: 0 25px 20px 25px;
 
`;


export const MainPageTitleSection = styled.div`
  display: flex;
  padding: 0 10px;

  justify-content: space-between;
`;

export const MainPageCardsSection = styled.div`
  display: flex;

  gap:11px;
`;

export const MainPageLinks = styled(NavLink)`
  align-self: center;
  color: #f92c2c;
  font-weight: 700;
  font-size: 1rem;
  margin-left: auto;
`;

export const Title = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 1.3rem;
  margin: 1.5rem;
`;

export const MainSection = styled.div`
background-color: red;
    height: 420px;
    position: absolute;
    width: 450px;
    z-index: -1;
    border-top-left-radius:35px;
    border-top-right-radius:35px;
    border-bottom-left-radius:40px
`;

export const YellowInnerSection = styled.div`
background-color: #ffc609;
    position: absolute;
    width: 450px;
    z-index: -1;
    border-top-left-radius:35px;
    border-top-right-radius:35px;
    height: 220px;
    top:50%;
`;
export const WhiteInnerSection = styled.div`
background-color: white;
    position: absolute;
    width: 450px;
    z-index: -1;
    border-top-left-radius:20px;
    border-top-right-radius:20px;
    height: 220px;
    top:100%;
`;