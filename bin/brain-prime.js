#!/usr/bin/env node
import run from '../src/index.js';
import { gameRule, game } from '../src/games/prime.js';

run(gameRule, game);