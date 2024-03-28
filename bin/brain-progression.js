#!/usr/bin/env node

import gameLogic from '../src/gameLogic.js';
import progressionGame from '../src/games/progressionGame.js';

const rules = 'What number is missing in the progression?';

gameLogic(progressionGame, rules);
