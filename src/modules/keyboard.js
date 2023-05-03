import KEYS from './keys';

const keyboardFunctions = () => {
  const app = document.querySelector('.app');
  let isCaps = false;
  let isShift = false;
  let isCtrl = false;
  let language = 'eng';
  const switchText = 'Switching Language: left CTRL + ALT';
  const windowsText = 'The keyboard was created in the Windows OS';

  const setLocalStorage = () => {
    localStorage.setItem('language', language);
  };
  window.addEventListener('beforeunload', setLocalStorage);

  const getLocalStorage = () => {
    const languageLocalStorage = localStorage.getItem('language');

    if (languageLocalStorage) language = languageLocalStorage;
  };

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
        const createButton = () => {
          const createSymbol = (symbolMode, isHidden, symbolLang) => {
            const newSymbol = document.createElement('span');

            newSymbol.classList.add('symbol');
            if (isHidden) {
              newSymbol.classList.add('symbol_hidden');
            } else {
              newSymbol.classList.add('symbol_active');
            }

            newSymbol.classList.add(`symbol_${symbolMode}`);
            newSymbol.innerText = key[symbolLang][symbolMode];

            return newSymbol;
          };

          const createInnerContainer = (innerLang) => {
            const innerContainer = document.createElement('span');
            innerContainer.classList.add('key-inner');
            if (innerLang !== language) innerContainer.classList.add('key-inner_hidden');
            innerContainer.classList.add(`key_${innerLang}`);

            const symbolDown = createSymbol('down', false, innerLang);
            const symbolShift = createSymbol('shift', true, innerLang);
            const symbolCaps = createSymbol('caps', true, innerLang);

            innerContainer.appendChild(symbolDown);
            innerContainer.appendChild(symbolShift);
            innerContainer.appendChild(symbolCaps);

            return innerContainer;
          };

          const newButton = document.createElement('button');
          newButton.classList.add('key');
          newButton.classList.add(key.class);
          newButton.id = key.keyId;

          const innerContainerEng = createInnerContainer('eng');
          const innerContainerRus = createInnerContainer('rus');

          newButton.appendChild(innerContainerEng);
          newButton.appendChild(innerContainerRus);
          return newButton;
        };

        const button = createButton();
        row.appendChild(button);
      });

      newKeyboard.appendChild(row);
    });

    appContainer.appendChild(newKeyboard);
    app.appendChild(appContainer);

    const languageInstructions = document.createElement('p');
    languageInstructions.classList.add('description');
    languageInstructions.innerText = switchText;
    app.append(languageInstructions);

    const description = document.createElement('p');
    description.classList.add('description');
    description.innerText = windowsText;
    app.append(description);
  };

  getLocalStorage();
  generateKeyboard();

  const keyboard = document.querySelector('.keyboard');
  const keyInnerAll = document.querySelectorAll('.key-inner');
  const symbols = keyboard.querySelectorAll('.symbol');
  const textArea = document.querySelector('.app__textarea');

  const addText = (activeButton, keyCode, e) => {
    if (e) e.preventDefault();

    const currentSymbols = activeButton.querySelector(`.key_${language}`);
    let newText = currentSymbols.querySelector('.symbol_active').innerText;

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

    if (keyCode === 'Backspace') {
      const startPosition = textArea.selectionStart;
      const endPosition = textArea.selectionEnd;
      let newPosition = 0;

      if (startPosition !== 0 || endPosition !== 0) {
        const altStr = textArea.value;

        // удаляем выделенное
        if (startPosition === endPosition) {
          textArea.value = altStr.slice(0, startPosition - 1)
                           + altStr.slice(startPosition, textArea.value.length);
        } else if (startPosition === 0) {
          textArea.value = altStr.slice(endPosition, textArea.value.length);
        } else {
          textArea.value = altStr.slice(0, startPosition)
                           + altStr.slice(endPosition, textArea.value.length);
        }

        // ставим курсор в нужную позицию
        textArea.focus();
        if (startPosition === endPosition) {
          newPosition = startPosition === 0 ? 0 : startPosition - 1;
        } else {
          newPosition = startPosition === 0 ? 0 : startPosition;
        }

        textArea.selectionStart = newPosition;
        textArea.selectionEnd = newPosition;
      }
    }

    if (keyCode === 'Delete') {
      const startPosition = textArea.selectionStart;
      const endPosition = textArea.selectionEnd;
      let newPosition = 0;

      if (startPosition !== textArea.value.length || endPosition !== textArea.value.length) {
        const altStr = textArea.value;

        // удаляем выделенное
        if (startPosition === endPosition) {
          textArea.value = altStr.slice(0, startPosition)
                           + altStr.slice(startPosition + 1, textArea.value.length);
        } else if (startPosition === 0) {
          textArea.value = altStr.slice(endPosition, textArea.value.length);
        } else {
          textArea.value = altStr.slice(0, startPosition)
                           + altStr.slice(endPosition, textArea.value.length);
        }

        // ставим курсор в нужную позицию
        textArea.focus();
        if (startPosition === endPosition) {
          newPosition = startPosition === 0 ? 0 : startPosition;
        } else {
          newPosition = startPosition === 0 ? 0 : startPosition;
        }

        textArea.selectionStart = newPosition;
        textArea.selectionEnd = newPosition;
      }
    } else {
      textArea.value += newText;
    }
  };

  const doCaps = (code, isActive) => {
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
  };

  const doShift = (code, isActive) => {
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
  };

  const switchLanguage = () => {
    language = (language === 'eng') ? 'rus' : 'eng';
    setLocalStorage();

    keyInnerAll.forEach((element) => {
      const elementClassList = element.classList;

      if (elementClassList.contains(`key_${language}`)) {
        elementClassList.remove('key-inner_hidden');
      } else {
        elementClassList.add('key-inner_hidden');
      }
    });
  };

  const checkSwitchLanguage = (keyCode) => {
    if (keyCode === 'ControlLeft') isCtrl = true;
    if (keyCode === 'AltLeft' && isCtrl) {
      isCtrl = false;
      switchLanguage();
    }
  };

  document.addEventListener('keydown', (e) => {
    e.stopPropagation();
    e.preventDefault();
    const activeCode = e.code;
    const activeButton = document.getElementById(activeCode);
    if (activeButton) {
      activeButton.classList.add('key_active');
      doCaps(e.code, e.getModifierState('CapsLock'));
      doShift(e.code, e.getModifierState('Shift'));
      checkSwitchLanguage(e.code);
      addText(activeButton, e.code, e);
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
        addText(activeButton, activeButton.id);
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
