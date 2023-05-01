const KEYS = [
  [
    {
      keyId: 'key_backquote',
      eng: { down: '`', shift: '~', caps: '`' },
      rus: { down: '`', shift: '~', caps: '`' },
    },
    {
      keyId: 'key_1',
      eng: { down: '1', shift: '!', caps: '1' },
      rus: { down: '1', shift: '!', caps: '1' },
    },
    {
      keyId: 'key_2',
      eng: { down: '2', shift: '@', caps: '2' },
      rus: { down: '2', shift: '@', caps: '2' },
    },
    {
      keyId: 'key_3',
      eng: { down: '3', shift: '#', caps: '3' },
      rus: { down: '3', shift: '#', caps: '3' },
    },
    {
      keyId: 'key_4',
      eng: { down: '4', shift: '$', caps: '4' },
      rus: { down: '4', shift: '$', caps: '4' },
    },
    {
      keyId: 'key_5',
      eng: { down: '5', shift: '%', caps: '5' },
      rus: { down: '5', shift: '%', caps: '5' },
    },
    {
      keyId: 'key_6',
      eng: { down: '6', shift: '^', caps: '6' },
      rus: { down: '6', shift: '^', caps: '6' },
    },
    {
      keyId: 'key_7',
      eng: { down: '7', shift: '&', caps: '7' },
      rus: { down: '7', shift: '&', caps: '7' },
    },
    {
      keyId: 'key8',
      eng: { down: '8', shift: '*', caps: '8' },
      rus: { down: '8', shift: '*', caps: '8' },
    },
    {
      keyId: 'key_9',
      eng: { down: '9', shift: '(', caps: '9' },
      rus: { down: '9', shift: '(', caps: '9' },
    },
    {
      keyId: 'key_0',
      eng: { down: '0', shift: ')', caps: '0' },
      rus: { down: '0', shift: ')', caps: '0' },
    },
    {
      keyId: 'key_minus',
      eng: { down: '-', shift: '_', caps: '-' },
      rus: { down: '-', shift: '_', caps: '-' },
    },
    {
      keyId: 'key_equal',
      eng: { down: '=', shift: '+', caps: '=' },
      rus: { down: '=', shift: '+', caps: '=' },
    },
    {
      keyId: 'key_backspace',
      eng: { down: 'backspace', shift: 'backspace', caps: 'backspace' },
      rus: { down: 'backspace', shift: 'backspace', caps: 'backspace' },
    },
  ],
  [
    {
      keyId: 'key_tab',
      eng: { down: 'tab', shift: 'tab', caps: 'tab' },
      rus: { down: 'tab', shift: 'tab', caps: 'tab' },
    },
    {
      keyId: 'key_q',
      eng: { down: 'q', shift: 'Q', caps: 'Q' },
      rus: { down: 'q', shift: 'Q', caps: 'Q' },
    },
    {
      keyId: 'key_w',
      eng: { down: 'w', shift: 'W', caps: 'W' },
      rus: { down: 'w', shift: 'W', caps: 'W' },
    },
    {
      keyId: 'key_e',
      eng: { down: 'e', shift: 'E', caps: 'E' },
      rus: { down: 'e', shift: 'E', caps: 'E' },
    },
    {
      keyId: 'key_r',
      eng: { down: 'r', shift: 'R', caps: 'R' },
      rus: { down: 'r', shift: 'R', caps: 'R' },
    },
    {
      keyId: 'key_t',
      eng: { down: 't', shift: 'T', caps: 'T' },
      rus: { down: 't', shift: 'T', caps: 'T' },
    },
    {
      keyId: 'key_y',
      eng: { down: 'y', shift: 'Y', caps: 'Y' },
      rus: { down: 'y', shift: 'Y', caps: 'Y' },
    },
    {
      keyId: 'key_u',
      eng: { down: 'u', shift: 'U', caps: 'U' },
      rus: { down: 'u', shift: 'U', caps: 'U' },
    },
    {
      keyId: 'key_i',
      eng: { down: 'i', shift: 'I', caps: 'I' },
      rus: { down: 'i', shift: 'I', caps: 'I' },
    },
    {
      keyId: 'key_o',
      eng: { down: 'o', shift: 'O', caps: 'O' },
      rus: { down: 'o', shift: 'O', caps: 'O' },
    },
    {
      keyId: 'key_p',
      eng: { down: 'p', shift: 'P', caps: 'P' },
      rus: { down: 'p', shift: 'P', caps: 'P' },
    },
    {
      keyId: 'key_bracket-left',
      eng: { down: '[', shift: '{', caps: '[' },
      rus: { down: '[', shift: '{', caps: '[' },
    },
    {
      keyId: 'key_bracket-right',
      eng: { down: ']', shift: '}', caps: ']' },
      rus: { down: ']', shift: '}', caps: ']' },
    },
    {
      keyId: 'key_backslash',
      eng: { down: '\\', shift: '|', caps: '\\' },
      rus: { down: '\\', shift: '|', caps: '\\' },
    },
    {
      keyId: 'key_delete',
      eng: { down: 'delete', shift: 'delete', caps: 'delete' },
      rus: { down: 'delete', shift: 'delete', caps: 'delete' },
    },
  ],
  [
    {
      keyId: 'key_capslock',
      eng: { down: 'capslock', shift: 'capslock', caps: 'capslock' },
      rus: { down: 'capslock', shift: 'capslock', caps: 'capslock' },
    },
    {
      keyId: 'key_a',
      eng: { down: 'a', shift: 'A', caps: 'A' },
      rus: { down: 'a', shift: 'A', caps: 'A' },
    },
    {
      keyId: 'key_s',
      eng: { down: 's', shift: 'S', caps: 'S' },
      rus: { down: 's', shift: 'S', caps: 'S' },
    },
    {
      keyId: 'key_d',
      eng: { down: 'd', shift: 'D', caps: 'D' },
      rus: { down: 'd', shift: 'D', caps: 'D' },
    },
    {
      keyId: 'key_f',
      eng: { down: 'f', shift: 'F', caps: 'F' },
      rus: { down: 'f', shift: 'F', caps: 'F' },
    },
    {
      keyId: 'key_g',
      eng: { down: 'g', shift: 'G', caps: 'G' },
      rus: { down: 'g', shift: 'G', caps: 'G' },
    },
    {
      keyId: 'key_h',
      eng: { down: 'h', shift: 'H', caps: 'H' },
      rus: { down: 'h', shift: 'H', caps: 'H' },
    },
    {
      keyId: 'key_j',
      eng: { down: 'j', shift: 'J', caps: 'J' },
      rus: { down: 'j', shift: 'J', caps: 'J' },
    },
    {
      keyId: 'key_k',
      eng: { down: 'k', shift: 'K', caps: 'K' },
      rus: { down: 'k', shift: 'K', caps: 'K' },
    },
    {
      keyId: 'key_l',
      eng: { down: 'l', shift: 'L', caps: 'L' },
      rus: { down: 'l', shift: 'L', caps: 'L' },
    },
    {
      keyId: 'key_semicolon',
      eng: { down: ';', shift: ':', caps: ';' },
      rus: { down: ';', shift: ':', caps: ';' },
    },
    {
      keyId: 'key_quote',
      eng: { down: '\'', shift: '"', caps: '\'' },
      rus: { down: '\'', shift: '"', caps: '\'' },
    },
    {
      keyId: 'key_enter',
      eng: { down: 'enter', shift: 'enter', caps: 'enter' },
      rus: { down: 'enter', shift: 'enter', caps: 'enter' },
    },
  ],
  [
    {
      keyId: 'key_shift',
      eng: { down: 'shift', shift: 'shift', caps: 'shift' },
      rus: { down: 'shift', shift: 'shift', caps: 'shift' },
    },
    {
      keyId: 'key_backslash-left',
      eng: { down: '\\', shift: '|', caps: '\\' },
      rus: { down: '\\', shift: '|', caps: '\\' },
    },
    {
      keyId: 'key_z',
      eng: { down: 'z', shift: 'Z', caps: 'Z' },
      rus: { down: 'z', shift: 'Z', caps: 'Z' },
    },
    {
      keyId: 'key_x',
      eng: { down: 'x', shift: 'X', caps: 'X' },
      rus: { down: 'x', shift: 'X', caps: 'X' },
    },
    {
      keyId: 'key_c',
      eng: { down: 'c', shift: 'C', caps: 'C' },
      rus: { down: 'c', shift: 'C', caps: 'C' },
    },
    {
      keyId: 'key_v',
      eng: { down: 'v', shift: 'V', caps: 'V' },
      rus: { down: 'v', shift: 'V', caps: 'V' },
    },
    {
      keyId: 'key_b',
      eng: { down: 'b', shift: 'B', caps: 'B' },
      rus: { down: 'b', shift: 'B', caps: 'B' },
    },
    {
      keyId: 'key_n',
      eng: { down: 'n', shift: 'N', caps: 'N' },
      rus: { down: 'n', shift: 'N', caps: 'N' },
    },
    {
      keyId: 'key_m',
      eng: { down: 'm', shift: 'M', caps: 'M' },
      rus: { down: 'm', shift: 'M', caps: 'M' },
    },
    {
      keyId: 'key_comma',
      eng: { down: ',', shift: '<', caps: ',' },
      rus: { down: ',', shift: '<', caps: ',' },
    },
    {
      keyId: 'key_period',
      eng: { down: '.', shift: '>', caps: '.' },
      rus: { down: '.', shift: '>', caps: '.' },
    },
    {
      keyId: 'key_slash',
      eng: { down: '/', shift: '?', caps: '/' },
      rus: { down: '/', shift: '?', caps: '/' },
    },
    {
      keyId: 'key_up',
      eng: { down: '►', shift: '►', caps: '►' },
      rus: { down: '►', shift: '►', caps: '►' },
    },
    {
      keyId: 'key_shift',
      eng: { down: 'shift', shift: 'shift', caps: 'shift' },
      rus: { down: 'shift', shift: 'shift', caps: 'shift' },
    },
  ],
  [
    {
      keyId: 'key_ctrl',
      eng: { down: 'ctrl', shift: 'ctrl', caps: 'ctrl' },
      rus: { down: 'ctrl', shift: 'ctrl', caps: 'ctrl' },
    },
    {
      keyId: 'key_win',
      eng: { down: 'win', shift: 'win', caps: 'win' },
      rus: { down: 'win', shift: 'win', caps: 'win' },
    },
    {
      keyId: 'key_alt',
      eng: { down: 'alt', shift: 'alt', caps: 'alt' },
      rus: { down: 'alt', shift: 'alt', caps: 'alt' },
    },
    {
      keyId: 'key_space',
      eng: { down: '', shift: '', caps: '' },
      rus: { down: '', shift: '', caps: '' },
    },
    {
      keyId: 'key_alt',
      eng: { down: 'alt', shift: 'alt', caps: 'alt' },
      rus: { down: 'alt', shift: 'alt', caps: 'alt' },
    },
    {
      keyId: 'key_left',
      eng: { down: '►', shift: '►', caps: '►' },
      rus: { down: '►', shift: '►', caps: '►' },
    },
    {
      keyId: 'key_down',
      eng: { down: '►', shift: '►', caps: '►' },
      rus: { down: '►', shift: '►', caps: '►' },
    },
    {
      keyId: 'key_right',
      eng: { down: '►', shift: '►', caps: '►' },
      rus: { down: '►', shift: '►', caps: '►' },
    },
    {
      keyId: 'key_ctrl',
      eng: { down: 'ctrl', shift: 'ctrl', caps: 'ctrl' },
      rus: { down: 'ctrl', shift: 'ctrl', caps: 'ctrl' },
    }],
];

export default KEYS;
