#!/usr/bin/env node

import startEngine from '../src/index.js';
import { generateQA, gameRules } from './games/gcd.js';

startEngine(generateQA, gameRules);
