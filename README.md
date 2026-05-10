# Tunica React Native Boilerplate

A React Native CLI template with TypeScript, navigation, persisted Redux state, Unistyles, SVG icons, and Montserrat fonts already wired in.

Repository: https://github.com/tunicalabs-media/react-native-boilerplate

## Quick Start

Create a new app from the public GitHub repository:

```sh
npx @react-native-community/cli@latest init MyApp --template https://github.com/tunicalabs-media/react-native-boilerplate.git
```

Then run the generated app:

```sh
cd MyApp
npm run android
```

For iOS:

```sh
cd MyApp
npm run pods
npm run ios
```

The generated app includes a `.npmrc` with `legacy-peer-deps=true`, so normal `npm install` uses legacy peer dependency resolution by default.

## Requirements

- Node `>= 22.11.0`
- React Native development environment for Android and/or iOS
- Android Studio and Android SDK for Android
- Xcode and CocoaPods for iOS

Environment setup guide:

https://reactnative.dev/docs/set-up-your-environment

## What You Get

- React Native `0.85.3`
- React `19.2.3`
- TypeScript enabled by default
- React Navigation with native stack and bottom tabs
- Redux Toolkit and React Redux
- AsyncStorage-backed persisted preferences
- React Native Unistyles
- React Native SVG
- Custom Montserrat fonts
- ESLint, Prettier, Jest, and Husky
- npm `legacy-peer-deps=true` configured for generated apps

## Generated App Scripts

Run these inside the generated app directory:

```sh
npm start                 # Start Metro
npm run start-reset       # Start Metro with cache reset
npm run android           # Run Android debug build
npm run ios               # Run iOS debug build
npm run pods              # Install iOS pods
npm run assets            # Link or refresh native assets
npm run lint              # Run ESLint
npm run lint-fix          # Run ESLint with auto-fix
npm run check-format      # Check Prettier formatting
npm run format            # Format files
npm test                  # Run Jest
```

Android build helpers:

```sh
npm run android-clean
npm run android-apk-debug
npm run android-apk-release
npm run android-release
```

## Generated App Structure

```text
src/
  components/       Shared UI components
  font/             Bundled Montserrat font files
  icons/            react-native-svg icon components
  lib/              Shared style helpers
  navigation/       Root stack, tabs, and navigation types
  screens/          App screens
  store/            Redux store, hooks, and slices
  theme/            Theme provider, colors, fonts, and common styles
```

## Template Behavior

The React Native CLI replaces the `NativeBoilerplate` placeholder with the app name passed to `init`.

For example:

```sh
npx @react-native-community/cli@latest init ShopApp --template https://github.com/tunicalabs-media/react-native-boilerplate.git
```

This generates:

- iOS target and project names using `ShopApp`
- Android package using `com.shopapp`
- iOS bundle identifier using `com.tunicalabs.shopapp`
- `app.json` name and display name using `ShopApp`
- npm package name using `shopapp`

During installation, the template prints a Tunica-branded success message before dependencies are installed.

## Local Template Development

Clone this repository:

```sh
git clone https://github.com/tunicalabs-media/react-native-boilerplate.git
cd react-native-boilerplate
```

Test the template locally:

```sh
npx @react-native-community/cli@latest init MyApp --template file:/absolute/path/to/react-native-boilerplate
```

To work on the app contained inside the template:

```sh
cd template
npm install
npm run pods
npm run android
```

## Template Package Structure

```text
template.config.js     React Native CLI template config
post-init.js           Tunica post-init message and .npmrc rename
template/              Files copied into generated apps
template/_gitignore    Becomes .gitignore in generated apps
template/_npmrc        Becomes .npmrc in generated apps
```

## npm Package

If this template is published to npm, use:

```sh
npx @react-native-community/cli@latest init MyApp --template @tunicalabs-media/react-native-boilerplate
```

Check the package contents before publishing:

```sh
npm pack --dry-run
```

Publish publicly:

```sh
npm publish --access public
```

## Styling

The project uses `react-native-unistyles`.

- Babel plugin is configured in `babel.config.js`.
- Shared colors live in `src/theme/colors.ts`.
- Custom font names live in `src/theme/fonts.ts`.
- Shared styles live in `src/theme/commonStyles.ts`.
- Example variants are implemented in `src/screens/SettingsScreen.tsx`.

Use Unistyles `StyleSheet` instead of React Native `StyleSheet`:

```ts
import { StyleSheet } from 'react-native-unistyles';
```

## Fonts

Montserrat fonts are stored in `src/font` and linked through `react-native.config.js`.

When adding or changing font files:

```sh
npm run assets
```

Then rebuild the native app.

## Navigation

The app starts with a root native stack in `src/navigation/RootNavigator.tsx`.

- `Splash` routes into `MainTabs`.
- `MainTabs` contains `Home`, `Profile`, and `Settings`.
- `Details` is presented from the root stack.

Navigation types are defined in `src/navigation/types.ts`.

## State

Redux is configured in `src/store/store.ts`.

Preferences are persisted with AsyncStorage in `src/store/slices/preferencesSlice.ts`. The Settings screen demonstrates persisted notification and theme preferences.
