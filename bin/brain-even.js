#!/usr/bin/env node

import isEven from '../src/games/evenGame.js';
import gameLogic from '../src/gameLogic.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
gameLogic(isEven, rules);
