import { Card } from "../Components/Card";
import { Cards } from "../Components/Cards";
import {
  MainPageContainer,
  MainPageTitleSection,
  MainPageLinks,
  Title,
  MainPageCardsSection,
} from "../Styles/Mainpage.style";
export const Mainpage = () => {
  return (
    <MainPageContainer>
      <Title>Featured Video</Title>
      <Card />
      <MainPageTitleSection>
        <div className="margin-auto"></div>
        <Title>Popular Videos</Title>
        <MainPageLinks>View All</MainPageLinks>
      </MainPageTitleSection>
      <MainPageCardsSection>
        <Cards/>
      </MainPageCardsSection>
    </MainPageContainer>
  );
};
