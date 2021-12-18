#!/usr/bin/env node
import run from '../src/index.js';
import { gameRule, game } from '../src/games/even.js';

run(gameRule, game);
