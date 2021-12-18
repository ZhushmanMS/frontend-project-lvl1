#!/usr/bin/env node
import run from '../src/index.js';
import { gameRule, prime } from '../src/games/prime.js';

run(gameRule, prime);
