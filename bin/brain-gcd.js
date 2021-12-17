#!/usr/bin/env node
import run from '../src/index.js';
import { gameRule, gcd } from '../src/games/gcd.js';

run(gameRule, gcd);
