import {ValidationHint} from '../../../utils/types';

export const PASSWORD_HINTS = [
  {text: '• Use from 8 to 15 characters', rule: 'min' || 'max'},
  {
    text: '• Use both uppercase and lowercase letters',
    rule: 'uppercase' && 'lowercase',
  },
  {
    text: '• Use a combination of numbers, letters, and symbols',
    rule: 'combination',
  },
] as ValidationHint[];
