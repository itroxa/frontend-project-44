#!/usr/bin/env node

import startEngine from '../src/index.js';
import { generateQA, gameRules } from './games/even.js';

startEngine(generateQA, gameRules);
