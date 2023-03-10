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
      <div className="margin-auto"></div>
        <Title>Popular Videos</Title>
        <MainPageLinks>View All</MainPageLinks>

      </MainPageContainerSection>
    </MainPageContainer>
  );
};
