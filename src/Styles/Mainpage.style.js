import styled from 'styled-components';
import { NavLink } from "react-router-dom";


export const MainPageContainer = styled.div`
-webkit-box-shadow: 0px 0px 273px -69px rgba(84,85,89,1);
-moz-box-shadow: 0px 0px 273px -69px rgba(84,85,89,1);
box-shadow: 0px 0px 273px -69px rgba(84,85,89,1);
max-width:475px;
 height: 100vh;
 padding: 10px 20px 25px;
 border-radius: 35px;
 margin:1rem

`;

export const MainPageContainerSection = styled.div`
display: flex;
padding: 0 10px;

justify-content: space-between;

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
