import "./Squares.css";

interface SquaresProps {
  rowcol: string;
  class: string;
}

function Squares(props: SquaresProps) {
  return (
    <input
      className={props.rowcol === "1-1" ? "textbox tb-active" : props.class}
      type="text"
      maxLength={1}
      alt={props.rowcol}
      disabled
    />
  );
}

export default Squares;
