import {
  Cards2Container,
  Cards2Image,
  Cards2text,
  Cardmarqueetext,
} from "../Styles/Card.style";


const cards = [
  {
    image:
      "https://res.cloudinary.com/dvbw8xujd/image/upload/v1678435181/aflyuyrfatyfzemnhxut.jpg",
    title: "ESFI Announces National Esports",
    color: "#ff8c00",
  },
  {
    image:
      "https://res.cloudinary.com/dvbw8xujd/image/upload/v1678435319/mkesrc9xylnbnyvplj4r.jpg",
    title: "Indian LAN Gaming Announced Season 4 of ILG Cup",
    color: "#43f2ff",
  },
];

export const Cards2 = () => {
  return (
    <>
      {cards.map((card) => (
        <Cards2Container style={{ backgroundColor: card.color}}>
          <Cards2Image>
            <img
              src={card.image}
              height="85px"
              width="100%"
              className="border-radius"
            />
          </Cards2Image>
          <Cardmarqueetext >
            <div className="marqueeText">
            {card.title}
            </div>
          </Cardmarqueetext>
          <Cards2text>{card.title}</Cards2text>
        </Cards2Container>
      ))}
    </>
  );
};
