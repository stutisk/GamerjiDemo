import {
  Card3Container,
  CardSubText,
  CardText,
  CardButton,
  Container,
  Avtarimage
} from "../Styles/Card.style";


const cards = [
  {
    title: "   Hydra||Dynmo",
    color: "#130e2d",
    subTitle: "5189  followers",
  },
  {
    title: "Get Out",
    color: "#130e2d",
    subTitle: "3267  followers",
  },
];

export const Card3 = () => {
  return (
    <>
      {cards.map((card) => (
        <Container>
            <Avtarimage>
          <img
            src="https://res.cloudinary.com/dvbw8xujd/image/upload/v1652635707/w-1_c_mev7zg.jpg"
            height="50px"
            width="50px"
            className="border-radius2"
          />
          </Avtarimage>
          <Card3Container
         
            style={{ backgroundColor: card.color }}
          >
            <CardText>{card.title}</CardText>
            <CardSubText>{card.subTitle}</CardSubText>
          </Card3Container>
          <CardButton>Follow</CardButton>
        </Container>
      ))}
    </>
  );
};
