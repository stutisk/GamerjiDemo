
import { CardsContainer } from "../Styles/Card.style";
import ReactPlayer from "react-player";

const cards = ["https://www.youtube.com/watch?v=o3q35XrW2Jk&t=1s","https://www.youtube.com/watch?v=7TKQLxZ-d_0","https://www.youtube.com/watch?v=GM7ki_3kXgc"]



export const Cards = () => {
return(
<>
        {
            cards.map((card)=> (
                <CardsContainer>
                <ReactPlayer
                controls
                url={card}
                height="100%"
                width="100%"
                className='react-player'
                
               
              />
                  </CardsContainer>
            ))
        }
    
    </>
)
}