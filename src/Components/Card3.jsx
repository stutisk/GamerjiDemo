import { Card3Container, CardSubText, CardText,CardButton, Container, ContainerCard } from "../Styles/Card.style";
import { Card } from "./Card";

const cards = [
  {
    title: "   Hydra||Dynmo",
    color: "#130e2d",
    subTitle:"5189  followers"
  },
  {
    title: "Get Out",
    color: "#130e2d",
    subTitle:"3267  followers"
  },
];

export const Card3 = () => {
  return (
    <>
      {cards.map((card) => (
        <Container >
        <Card3Container className="padding" style={{ backgroundColor: card.color }}>
          <CardText>{card.title}</CardText>
          <CardSubText>{card.subTitle}</CardSubText>
        
        </Card3Container>
          <CardButton>Follow</CardButton>
          </Container>
      ))}
    </>
  );
};
