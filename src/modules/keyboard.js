import KEYS from './keys';

function keyboardFunctions() {
  const app = document.querySelector('.app');

  function generateKeyboard() {
    const appContainer = document.createElement('div');
    appContainer.classList.add('app__container');

    const textArea = document.createElement('textarea');
    textArea.classList.add('app__textarea');
    appContainer.appendChild(textArea);

    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');

    KEYS.forEach((keyRow) => {
      const row = document.createElement('div');
      row.classList.add('keyboard__row');

      keyRow.forEach((key) => {
        function createButton() {
          
          function createSymbol(symbolMode, isHidden) {
            const newSymbol = document.createElement('span');

            newSymbol.classList.add('symbol');
            if (isHidden) newSymbol.classList.add('symbol_hidden');

            newSymbol.classList.add(`symbol_${symbolMode}`);
            newSymbol.innerText = key.eng[symbolMode];

            return newSymbol;
          }

          const newButton = document.createElement('button');
          newButton.classList.add('key');
          newButton.classList.add(key.keyId);

          const innerContainerEng = document.createElement('span');
          innerContainerEng.classList.add('key-inner');
          innerContainerEng.classList.add('key_eng');

          const symbolDown = createSymbol('down', false);
          const symbolShift = createSymbol('shift', true);
          const symbolCaps = createSymbol('caps', true);

          innerContainerEng.appendChild(symbolDown);
          innerContainerEng.appendChild(symbolShift);
          innerContainerEng.appendChild(symbolCaps);

          newButton.appendChild(innerContainerEng);
          return newButton;
        }

        const button = createButton();
        row.appendChild(button);
      });
      keyboard.appendChild(row);
    });

    appContainer.appendChild(keyboard);
    app.appendChild(appContainer);
  }

  generateKeyboard();
  // console.log(app);
}

export default keyboardFunctions;
