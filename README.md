# React Native Boilerplate

A bare React Native boilerplate with navigation, persisted Redux state, Unistyles styling, SVG icons, and custom Montserrat fonts already wired in.

## Stack

- React Native `0.85.3`
- React `19.2.3`
- TypeScript
- React Navigation with native stack and bottom tabs
- Redux Toolkit and React Redux
- AsyncStorage for persisted preferences
- React Native Unistyles with Babel plugin support
- React Native SVG
- Montserrat custom fonts linked from `src/font`
- ESLint, Prettier, Jest, Husky

## Project Structure

```text
template/
  android/          Android native project
  ios/              iOS native project
  src/
  components/       Shared UI components
  font/             Bundled Montserrat font files
  icons/            react-native-svg icon components
  navigation/       Root stack, tabs, types, and navigation styles
  screens/          App screens
  store/            Redux store, hooks, and slices
  theme/            Colors, fonts, and shared styles
```

## Create A New App From This Boilerplate

Create a new app directly from the public GitHub repository:

```sh
npx @react-native-community/cli@latest init MyApp --template https://github.com/tunicalabs-media/react-native-boilerplate.git
```

If this package is published to npm later, use the package name:

```sh
npx @react-native-community/cli@latest init MyApp --template @tunicalabs-media/react-native-boilerplate
```

To test the template from a local checkout before publishing:

```sh
npx @react-native-community/cli@latest init MyApp --template file:/absolute/path/to/react-native-boilerplate
```

The React Native CLI replaces the `NativeBoilerplate` placeholder with the app name passed to `init`.
During installation, the template prints a Tunica-branded success message before dependencies are installed.

Repository:

```text
https://github.com/tunicalabs-media/react-native-boilerplate
```

## Setup

Install dependencies:

```sh
cd template
npm install
```

Install iOS pods:

```sh
npm run pods
```

Link or refresh native assets after adding fonts:

```sh
npm run assets
```

Start Metro:

```sh
npm start
```

Run the app:

```sh
npm run android
npm run ios
```

## Useful Scripts

```sh
npm run start-reset          # Start Metro with cache reset
npm run lint                 # Run ESLint
npm run lint-fix             # Run ESLint with auto-fix
npm run check-format         # Check Prettier formatting
npm run format               # Format the project
npm run android-clean        # Clean Android Gradle build
npm run android-apk-debug    # Build debug APK
npm run android-apk-release  # Build release APK
npm run android-release      # Build Android release
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

When adding or changing font files, run:

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

## Requirements

- Node `>= 22.11.0`
- React Native development environment for Android and/or iOS
- Xcode and CocoaPods for iOS
- Android Studio and Android SDK for Android

See the official React Native environment guide for platform setup:

https://reactnative.dev/docs/set-up-your-environment
