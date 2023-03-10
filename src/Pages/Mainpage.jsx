import { Card } from "../Components/Card";
import {
  MainPageContainer,
  MainPageContainerSection,
  MainPageLinks,
  Title,
} from "../Styles/Mainpage.style";
export const Mainpage = () => {
  return (
    <MainPageContainer>
      <Title>Featured Video</Title>
      <Card />
      <MainPageContainerSection>
        <Title>Featured Video</Title>
        <MainPageLinks>View</MainPageLinks>

      </MainPageContainerSection>
    </MainPageContainer>
  );
};
