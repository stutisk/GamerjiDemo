import { Card } from "../Components/Card";
import { Cards2 } from "../Components/Card2";
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
       <MainPageTitleSection>
        <div className="margin-auto"></div>
        <Title>Featured Video</Title>
        <div className="margin-auto"></div>
      </MainPageTitleSection>
      <Card />
      <MainPageTitleSection>
        <div className="margin-auto"></div>
        <Title>Popular Videos</Title>
        <MainPageLinks>View All</MainPageLinks>
      </MainPageTitleSection>
      <MainPageCardsSection>
        <Cards/>
      </MainPageCardsSection>
      <MainPageTitleSection>
        <div className="margin-auto"></div>
        <Title>eSports News</Title>
        <MainPageLinks>View All</MainPageLinks>
      </MainPageTitleSection>
      <MainPageCardsSection>
        <Cards2/>
      </MainPageCardsSection>
    </MainPageContainer>
  );
};
