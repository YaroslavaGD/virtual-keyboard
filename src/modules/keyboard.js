import KEYS from './keys';

function keyboardFunctions() {
  const app = document.querySelector('.app');
  let isCaps = false;

  function generateKeyboard() {
    const appContainer = document.createElement('div');
    appContainer.classList.add('app__container');

    const newTextArea = document.createElement('textarea');
    newTextArea.classList.add('app__textarea');
    appContainer.appendChild(newTextArea);

    const newKeyboard = document.createElement('div');
    newKeyboard.classList.add('keyboard');

    KEYS.forEach((keyRow) => {
      const row = document.createElement('div');
      row.classList.add('keyboard__row');

      keyRow.forEach((key) => {
        function createButton() {
          function createSymbol(symbolMode, isHidden) {
            const newSymbol = document.createElement('span');

            newSymbol.classList.add('symbol');
            if (isHidden) {
              newSymbol.classList.add('symbol_hidden');
            } else {
              newSymbol.classList.add('symbol_active');
            }

            newSymbol.classList.add(`symbol_${symbolMode}`);
            newSymbol.innerText = key.eng[symbolMode];

            return newSymbol;
          }

          const newButton = document.createElement('button');
          newButton.classList.add('key');
          newButton.classList.add(key.class);
          newButton.id = key.keyId;

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
      newKeyboard.appendChild(row);
    });

    appContainer.appendChild(newKeyboard);
    app.appendChild(appContainer);
  }

  generateKeyboard();

  const keyboard = document.querySelector('.keyboard');
  const symbols = keyboard.querySelectorAll('.symbol');
  const textArea = document.querySelector('.app__textarea');

  function addText(keyValue, keyCode) {
    let newText = keyValue;
    if (keyCode === 'Enter') newText = '\n';
    if (keyCode === 'Space') newText = ' ';
    if ((keyCode === 'CapsLock')
        || (keyCode === 'Delete')
        || (keyCode === 'Tab')
        || (keyCode === 'AltLeft')
        || (keyCode === 'AltRight')
        || (keyCode === 'ShiftLeft')
        || (keyCode === 'ShiftRight')
        || (keyCode === 'ControlLeft')
        || (keyCode === 'ControlRight')
        || (keyCode === 'Backspace')
        || (keyCode === 'MetaLeft')) {
      newText = '';
    }
    textArea.value += newText;
  }
  function doCommand(e) {
    if (e.code === 'CapsLock') {
      isCaps = e.getModifierState('CapsLock');
      symbols.forEach((element) => {
        if (isCaps) {
          if (element.classList.contains('symbol_caps')) {
            element.classList.remove('symbol_hidden');
            element.classList.add('symbol_active');
          }
          if (element.classList.contains('symbol_down')) {
            element.classList.add('symbol_hidden');
            element.classList.remove('symbol_active');
          }
        } else {
          if (element.classList.contains('symbol_caps')) {
            element.classList.add('symbol_hidden');
            element.classList.remove('symbol_active');
          }
          if (element.classList.contains('symbol_down')) {
            element.classList.remove('symbol_hidden');
            element.classList.add('symbol_active');
          }
        }
      });
    }

    // if ((e.code === "ShiftLeft") || (e.code === "ShiftRight")) {

    // }
  }

  document.addEventListener('keydown', (e) => {
    e.stopPropagation();
    const activeCode = e.code;
    const acitveButton = document.getElementById(activeCode);
    if (acitveButton) {
      acitveButton.classList.add('key_active');
      doCommand(e);
      addText(e.key, e.code);
    }
  });

  document.addEventListener('keyup', (e) => {
    e.stopPropagation();
    const activeCode = e.code;
    const acitveButton = document.getElementById(activeCode);
    if (acitveButton) {
      acitveButton.classList.remove('key_active');
    }
  });

  keyboard.addEventListener('mousedown', (e) => {
    e.stopPropagation();
    const activeElement = e.target;
    if (activeElement !== keyboard) {
      const activeButton = activeElement.closest('.key');
      if (activeButton) {
        activeButton.classList.add('key_active');
        addText(activeButton.querySelector('.symbol_active').innerText, activeButton.id);
      }
    }
  });

  keyboard.addEventListener('mouseup', (e) => {
    e.stopPropagation();
    const activeElement = e.target;
    if (activeElement !== keyboard) {
      const activeButton = activeElement.closest('.key');

      if (activeButton) activeButton.classList.remove('key_active');
    }
  });
}

export default keyboardFunctions;
