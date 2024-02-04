import './Squares.css';

interface SquaresProps {
    word: string;
}

function Squares(props: SquaresProps) {

    return (
    <input 
    className="textbox" 
    type="text" 
    maxLength={1}
    alt={props.word}
    disabled
    />
    );
    
}

export default Squares;