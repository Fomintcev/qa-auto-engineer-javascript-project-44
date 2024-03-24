#!/usr/bin/env node

import gcdGame from '../src/games/gcdGame.js';
import gameLogic from '../src/gameLogic.js';

const rules = 'Find the greatest common divisor of given numbers.';

gameLogic(gcdGame, rules);
