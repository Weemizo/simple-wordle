import Squares from "../Squares/Squares";

const RenderWordleTextBoxes = () => {
  const rows = 6;
  const cols = 5;

  const x = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(<Squares rowcol={`${i + 1}-${j + 1}`} class={"textbox"} />);
    }
    x.push(
      <div className="rows" data-check-guessed={false} key={i}>
        {row}
      </div>,
    );
  }
  return x;
};
export default RenderWordleTextBoxes;
