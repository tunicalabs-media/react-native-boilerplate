#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const npmrcSource = path.join(process.cwd(), '_npmrc');
const npmrcTarget = path.join(process.cwd(), '.npmrc');
const nvmrcSource = path.join(process.cwd(), '_nvmrc');
const nvmrcTarget = path.join(process.cwd(), '.nvmrc');

if (fs.existsSync(npmrcSource) && !fs.existsSync(npmrcTarget)) {
  fs.renameSync(npmrcSource, npmrcTarget);
}

if (fs.existsSync(nvmrcSource) && !fs.existsSync(nvmrcTarget)) {
  fs.renameSync(nvmrcSource, nvmrcTarget);
}

const red = '\x1b[38;2;244;15;15m';
const reset = '\x1b[0m';

const banner = [
  '  TTTTT  U   U  N   N  III  CCCC   AAA',
  '    T    U   U  NN  N   I  C      A   A',
  '    T    U   U  N N N   I  C      AAAAA',
  '    T    U   U  N  NN   I  C      A   A',
  '    T     UUU   N   N  III  CCCC  A   A',
].join('\n');

const lines = [
  '',
  `${red}${banner}${reset}`,
  '',
  '  Tunica React Native Boilerplate initialized successfully.',
  '',
  '  Included:',
  '  - React Native 0.85.3',
  '  - TypeScript enabled by default',
  '  - React Navigation',
  '  - Redux Toolkit',
  '  - Unistyles',
  '  - Montserrat fonts',
  '',
  '  Repository: https://github.com/tunicalabs-media/react-native-boilerplate',
  '',
];

console.log(lines.join('\n'));
