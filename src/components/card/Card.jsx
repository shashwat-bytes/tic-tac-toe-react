import Icon from "../icons/Icon";
import './Card.css';
function Card({  onPlay, player, index }) {

    let icon = <Icon />
           if(player === 'X') {
              icon = <Icon name = 'cross' />
           } else if (player === 'O') { 
                 icon = <Icon name = 'circle' />      
        }
        

    return (
        <div className ="card" onClick={() => onPlay(index)} >   
       
            {icon} 


        </div>
    )
}
 // onClick={() => playMove()} can also be written as onclick ={playMove}
export default Card;