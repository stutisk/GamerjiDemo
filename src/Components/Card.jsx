import { CardContainer } from "../Styles/Card.style";
import ReactPlayer from "react-player";

export const Card = () => {
    return(
        <CardContainer>
            <ReactPlayer
          controls
          url={"https://www.youtube.com/watch?v=o3q35XrW2Jk"}
          height="100%"
          width="100%"
          className='react-player'
          
         
        />
        </CardContainer>
    )
}