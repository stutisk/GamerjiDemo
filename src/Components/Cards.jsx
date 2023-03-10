import { CardsContainer, Cardmarqueetext } from "../Styles/Card.style";
import ReactPlayer from "react-player";


const cards = [
  {
    video:
      "https://www.youtube.com/watch?v=o3q35XrW2Jk&t=1s",
    title: "ESFI Announces National Esports",
    color: "#43f2ff",
  },
  {
    video:
      "https://www.youtube.com/watch?v=7TKQLxZ-d_0",
    title: "Indian LAN Gaming Announced Season 4 of ILG Cup",
    color: "#4add8a",
  },
];

export const Cards = () => {
  return (
    <>
      {cards.map((card) => (
        <CardsContainer style={{ backgroundColor: card.color}}>
          <ReactPlayer
            controls
            url={card.video}
            height="80%"
            width="100%"
            className="react-player"
          />
          <Cardmarqueetext>
            <div className="marqueeText">{card.title}</div>
          </Cardmarqueetext>
        </CardsContainer>
      ))}
    </>
  );
};
