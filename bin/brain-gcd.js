#!/usr/bin/env node
import run from '../src/index.js';
import { gameRule, game } from '../src/games/gcd.js';

run(gameRule, game);
