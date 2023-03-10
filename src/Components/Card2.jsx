import { Cards2Container, Cards2Image } from "../Styles/Card.style";
import ReactPlayer from "react-player";

const cards = [
  "https://res.cloudinary.com/dvbw8xujd/image/upload/v1678435181/aflyuyrfatyfzemnhxut.jpg",

  ,
  "https://res.cloudinary.com/dvbw8xujd/image/upload/v1678435319/mkesrc9xylnbnyvplj4r.jpg",
];

export const Cards2 = () => {
  return (
    <>
      {cards.map((image) => (
        <Cards2Container>
          <Cards2Image>
            <img src={image} height="85px" width="100%" className="border-radius" />
          </Cards2Image>
        </Cards2Container>
      ))}
    </>
  );
};
