import KEYS from './keys';

const keyboardFunctions = () => {
  const app = document.querySelector('.app');
  let isCaps = false;
  let isShift = false;

  const generateKeyboard = () => {
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
  };

  generateKeyboard();

  const keyboard = document.querySelector('.keyboard');
  const symbols = keyboard.querySelectorAll('.symbol');
  const textArea = document.querySelector('.app__textarea');

  function addText(keyValue, keyCode) {
    let newText = keyValue;
    if (keyCode === 'Enter') newText = '\n';
    if (keyCode === 'Tab') newText = '\t';
    if (keyCode === 'Space') newText = ' ';
    if ((keyCode === 'CapsLock')
        || (keyCode === 'Delete')
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

  function doCaps(code, isActive) {
    if (code === 'CapsLock') {
      isCaps = isActive;
      symbols.forEach((element) => {
        if (isCaps) {
          if (element.classList.contains('symbol_caps')) {
            element.classList.remove('symbol_hidden');
            element.classList.add('symbol_active');
          }
          if (element.classList.contains('symbol_down') || element.classList.contains('symbol_shift')) {
            element.classList.add('symbol_hidden');
            element.classList.remove('symbol_active');
          }
        } else {
          if (element.classList.contains('symbol_caps') || element.classList.contains('symbol_shift')) {
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
  }

  function doShift(code, isActive) {
    if ((code === 'ShiftLeft') || (code === 'ShiftRight')) {
      isShift = isActive;
      symbols.forEach((element) => {
        if (isShift) {
          if (element.classList.contains('symbol_shift')) {
            element.classList.remove('symbol_hidden');
            element.classList.add('symbol_active');
          }
          if (element.classList.contains('symbol_down') || element.classList.contains('symbol_caps')) {
            element.classList.add('symbol_hidden');
            element.classList.remove('symbol_active');
          }
        } else {
          if (element.classList.contains('symbol_shift') || element.classList.contains('symbol_caps')) {
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
  }

  document.addEventListener('keydown', (e) => {
    e.stopPropagation();
    const activeCode = e.code;
    const activeButton = document.getElementById(activeCode);
    if (activeButton) {
      activeButton.classList.add('key_active');
      doCaps(e.code, e.getModifierState('CapsLock'));
      doShift(e.code, e.getModifierState('Shift'));
      const newText = activeButton.querySelector('.symbol_active').innerText;
      addText(newText, e.code);
    }
  });

  document.addEventListener('keyup', (e) => {
    e.stopPropagation();
    const activeCode = e.code;
    const acitveButton = document.getElementById(activeCode);
    if (acitveButton) {
      acitveButton.classList.remove('key_active');
      doShift(e.code, e.getModifierState('Shift'));
    }
  });

  keyboard.addEventListener('mousedown', (e) => {
    e.stopPropagation();
    const activeElement = e.target;
    if (activeElement !== keyboard) {
      const activeButton = activeElement.closest('.key');
      if (activeButton) {
        activeButton.classList.add('key_active');

        doCaps(activeButton.id, !isCaps);
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
};

export default keyboardFunctions;
