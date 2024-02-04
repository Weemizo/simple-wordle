import Keyboard from './components/Keyboard/Keyboard';
import RenderWordleTextboxes from './components/RenderWordleTextBoxes/RenderWordleTextBoxes';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const regex = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/;
    const handleKeyPress = (event: KeyboardEvent) => {
      const activeTextBox = document.querySelector("input.tb-active");
      const key = activeTextBox?.getAttribute('alt').split('-');
      if (regex.test(event.key) && event.key.length < 2 && (activeTextBox.value == "" || (activeTextBox.value != "" && key[1] != 5))) {
        activeTextBox.value = event.key.toUpperCase();
        if (key[1] != 5) {
          activeTextBox?.classList.remove('tb-active');
          const nextTextBox = document.querySelector(`input[alt="1-${Number(key[1])+1}"]`);
          nextTextBox.classList.add('tb-active');
        }

      }
      else if (event.key == "Backspace") {
        if (activeTextBox.value != "") {
          activeTextBox.value = "";
        }
        else {
          if (key[1] != 1) {
            activeTextBox?.classList.remove('tb-active');
            const previousTextBox = document.querySelector(`input[alt="1-${Number(key[1])-1}"]`);
            previousTextBox?.classList.add('tb-active');
            previousTextBox.value = "";
          }
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  });
  return (
    <>
      <h1>Pierdolony wordle :~~PP</h1>
      <h4>Zgadnij słuwko ćwoku</h4>
      <div id="textboxes">
      <RenderWordleTextboxes/>
      <Keyboard/>
      </div>
    </>
    
  )
}

export default App

