#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function renameIfNeeded(from, to) {
  try {
    if (fs.existsSync(from) && !fs.existsSync(to)) {
      fs.renameSync(from, to);
    }
  } catch (error) {
    console.error(`Failed to rename ${path.basename(from)}:`, error);
  }
}

const npmrcSource = path.join(process.cwd(), '_npmrc');
const npmrcTarget = path.join(process.cwd(), '.npmrc');

const nvmrcSource = path.join(process.cwd(), '_nvmrc');
const nvmrcTarget = path.join(process.cwd(), '.nvmrc');

renameIfNeeded(npmrcSource, npmrcTarget);
renameIfNeeded(nvmrcSource, nvmrcTarget);

const red = '\x1b[38;2;244;15;15m';
const white = '\x1b[97m';
const dim = '\x1b[2m';
const reset = '\x1b[0m';

const banner = [
'████████╗██╗   ██╗███╗   ██╗██╗ ██████╗ █████╗ ',
'╚══██╔══╝██║   ██║████╗  ██║██║██╔════╝██╔══██╗',
'   ██║   ██║   ██║██╔██╗ ██║██║██║     ███████║',
'   ██║   ██║   ██║██║╚██╗██║██║██║     ██╔══██║',
'   ██║   ╚██████╔╝██║ ╚████║██║╚██████╗██║  ██║',
'   ╚═╝    ╚═════╝ ╚═╝  ╚═══╝╚═╝ ╚═════╝╚═╝  ╚═╝',
].join('\n');

const lines = [
  '',
  `${red}${banner}${reset}`,
  '',
  `${white}🚀 Tunica React Native Boilerplate initialized successfully.${reset}`,
  '',
  `${dim}Included:${reset}`,
  '  • React Native 0.85.3',
  '  • TypeScript enabled by default',
  '  • React Navigation',
  '  • Redux Toolkit',
  '  • Unistyles',
  '  • Montserrat fonts',
  '',
  `${dim}Repository:${reset}`,
  '  https://github.com/tunicalabs-media/react-native-boilerplate',
  '',
];

console.log(lines.join('\n'));