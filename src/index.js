import './index.html';
import './index.scss';
import code from './img/keyboard.svg';
import { mult, sum } from './modules/calc';

const imgWrap = document.querySelector('.img');
const img = new Image();
img.src = code;

imgWrap.append(img);

mult(2, 4);
sum(2, 4);
