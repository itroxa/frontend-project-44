#!/usr/bin/env node

import startEngine from '../src/index.js';
import { generateQA, gameRules } from './games/progression.js';

startEngine(generateQA, gameRules);
