import Keyboard from './components/Keyboard/Keyboard';
import RenderWordleTextboxes from './components/RenderWordleTextBoxes/RenderWordleTextBoxes';
import './App.css';
import { useEffect } from 'react';


function App() {
  async function fetchWord() {
    const words = await fetch('https://raw.githubusercontent.com/Hugo0/wordle/main/webapp/data/languages/pl/pl_5words.txt');
    const res = (await words.text()).split('\n');
    const generatedWord = res[Math.floor(Math.random() * res.length)];
    const textboxes = document.querySelector("div#textboxes");
    textboxes?.classList.remove('hidden');
    const but = document.querySelector("div.button-container");
    but?.classList.add('hidden');
    but?.children[0].setAttribute('data-word', generatedWord);
  }
  useEffect(() => {
    const regex = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/;
    const handleKeyPress = (event: KeyboardEvent) => {
      const activeTextBox = document.querySelector("input.tb-active");
      const key = activeTextBox?.getAttribute('alt')?.split('-');
      if (regex.test(event.key) && event.key.length < 2 && ((activeTextBox as HTMLInputElement)?.value == "" || ((activeTextBox as HTMLInputElement)?.value != "" && key && Number(key[1]) !== 5))) {
        (activeTextBox as HTMLInputElement).value = event.key.toUpperCase();
        if (key && Number(key[1]) !== 5) {
          activeTextBox?.classList.remove('tb-active');
          const nextTextBox = document.querySelector(`input[alt="1-${Number(key[1])+1}"]`);
          nextTextBox?.classList.add('tb-active');
        }
      }
      else if (event.key == "Backspace") {
        if (activeTextBox && (activeTextBox as HTMLInputElement).value != "") {
          (activeTextBox as HTMLInputElement).value = "";
        }
        else {
          if (key && Number(key[1]) !== 1) {
            activeTextBox?.classList.remove('tb-active');
            const previousTextBox = document.querySelector(`input[alt="1-${Number(key[1])-1}"]`);
            previousTextBox?.classList.add('tb-active');
            (previousTextBox as HTMLInputElement).value = "";
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
      <div className='button-container'>
        <button id="generateButton" onClick={fetchWord}>Generuj słowo</button>
      </div>
      <div id="textboxes" className="hidden">
      <RenderWordleTextboxes/>
      <Keyboard/>
      </div>
    </>
    
  )
}

export default App

