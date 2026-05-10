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

const lines = [
  '',
  '  _______             _',
  ' |__   __|           (_)',
  '    | |_   _ _ __  _  ___ __ __ _',
  "    | | | | | '_ \\| |/ __/ _` |",
  '    | | |_| | | | | | (_| (_| |',
  '    |_|\\__,_|_| |_|_|\\___\\__,_|',
  '',
  '  Tunica React Native Boilerplate',
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
