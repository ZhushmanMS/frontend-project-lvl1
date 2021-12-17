#!/usr/bin/env node
import run from '../src/index.js';
import { gameRule, calc } from '../src/games/calc.js';

run(gameRule, calc);
