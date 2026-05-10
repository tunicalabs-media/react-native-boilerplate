#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const npmrcSource = path.join(process.cwd(), '_npmrc');
const npmrcTarget = path.join(process.cwd(), '.npmrc');

if (fs.existsSync(npmrcSource) && !fs.existsSync(npmrcTarget)) {
  fs.renameSync(npmrcSource, npmrcTarget);
}

const lines = [
  '',
  '  TUNICA REACT NATIVE BOILERPLATE',
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
