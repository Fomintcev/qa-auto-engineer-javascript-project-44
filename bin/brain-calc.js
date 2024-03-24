#!/usr/bin/env node

import calcGame from '../src/games/calcGame.js';
import gameLogic from '../src/gameLogic.js';

const rules = 'What is the result of the expression?';

gameLogic(calcGame, rules);
