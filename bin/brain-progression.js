#!/usr/bin/env node
import run from '../src/index.js';
import { gameRule, progression } from '../src/games/progression.js';

run(gameRule, progression);
