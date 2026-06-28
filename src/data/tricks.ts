import type { Trick } from '../types';
import { quantTricks } from './quant';
import { vocabTricks } from './vocab';

export const tricks: Trick[] = [...quantTricks, ...vocabTricks];

export default tricks;
