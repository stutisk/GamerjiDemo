import {
  Cards2Container,
  Cards2Image,
  Cards2text,
  Cardmarqueetext,
} from "../Styles/Card.style";
import axios from "axios";

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

const fetchData = async () => {
  const headers = {
    "x-access-token":
      "AYCe6lL4KhkuVTzJ31f/siKMucPrOdLE1LZfXv/oYGvFS7RF2JWr7OZijNIaz3TtrFvXZD1kpvWLAnUPln7WvQ==",
    "company-code": "GJ",
    "content-type": "application/json",
    country: "611e04284ac17121fd8b1a54",
  };

  const body = {
    // skip: 0,
    // limit: 2,
    // sort: "desc",
    // sortBy: "createdAt",
  };

  const response = await axios.post(
    "https://api.gamerji.tech/api/blogs/list",
    body,
    { headers }
  );
  console.log(response.data.list);
};
fetchData();

export const Cards2 = () => {
  return (
    <>
      {cards.map((card) => (
        <Cards2Container style={{ backgroundColor: card.color }}>
          <Cards2Image>
            <img
              src={card.image}
              height="85px"
              width="100%"
              className="border-radius"
            />
          </Cards2Image>
          <Cardmarqueetext>
            <div className="marqueeText">{card.title}</div>
          </Cardmarqueetext>
          <Cards2text>{card.title}</Cards2text>
        </Cards2Container>
      ))}
    </>
  );
};
