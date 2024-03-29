#!/usr/bin/env node

import gameLogic from '../src/gameLogic.js';
import primeGame from '../src/games/primeGame.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

gameLogic(primeGame, rules);
