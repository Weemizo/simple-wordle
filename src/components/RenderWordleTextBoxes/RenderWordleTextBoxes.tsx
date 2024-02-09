import Squares from "../Squares/Squares";
import { useEffect } from "react";

const RenderWordleTextBoxes = () => {
  useEffect(() => {
    const firstTextbox = document.querySelector('input[alt="1-1"]');
    if (firstTextbox) firstTextbox.classList.add("tb-active");
  });

  const rows = 6;
  const cols = 5;

  const x = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(<Squares word={`${i + 1}-${j + 1}`} />);
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
