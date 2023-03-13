import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MainPageContainer = styled.div`
  -webkit-box-shadow: 0px 0px 273px -69px rgba(84, 85, 89, 1);
  -moz-box-shadow: 0px 0px 273px -69px rgba(84, 85, 89, 1);
  box-shadow: 0px 0px 273px -69px rgba(84, 85, 89, 1);
  max-width: 475px;

  padding: 0 10px 20px 25px;
  border-radius: 35px;
 
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
  font-weight: 700;
  font-size: 1rem;
  margin: 1.5rem;
`;
