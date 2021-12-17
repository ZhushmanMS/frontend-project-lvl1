#!/usr/bin/env node
import run from '../src/index.js';
import { gameRule, evenCheck } from '../src/games/evenCheck.js';

run(gameRule, evenCheck);
