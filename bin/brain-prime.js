#!/usr/bin/env node

import startEngine from '../src/index.js';
import { generateQA, gameRules } from './games/prime.js';

startEngine(generateQA, gameRules);
