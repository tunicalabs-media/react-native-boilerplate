# Tunica React Native Boilerplate

```text
████████╗██╗   ██╗███╗   ██╗██╗ ██████╗ █████╗
╚══██╔══╝██║   ██║████╗  ██║██║██╔════╝██╔══██╗
   ██║   ██║   ██║██╔██╗ ██║██║██║     ███████║
   ██║   ██║   ██║██║╚██╗██║██║██║     ██╔══██║
   ██║   ╚██████╔╝██║ ╚████║██║╚██████╗██║  ██║
   ╚═╝    ╚═════╝ ╚═╝  ╚═══╝╚═╝ ╚═════╝╚═╝  ╚═╝
```

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
It also includes a `.nvmrc` pinned to Node `v24.15.0`, the current Node 24 LTS release.

## Requirements

- Node `>= 22.11.0`
- React Native development environment for Android and/or iOS
- Android Studio and Android SDK for Android
- Xcode and CocoaPods for iOS

For macOS and Windows setup, follow the official React Native environment setup guide and choose your development OS and target platform:

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
- React Native Simple Toast for notification feedback
- React Native Skeleton Placeholder for loading states
- Custom Montserrat fonts
- ESLint, Prettier, Jest, and Husky
- `AGENTS.md` with AI-agent development guidance for generated apps
- npm `legacy-peer-deps=true` configured for generated apps
- `.nvmrc` pinned to Node `v24.15.0`

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
AGENTS.md          AI-agent context, stack inventory, and coding conventions
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

## Changing the App Name

Prefer choosing the final app name when creating the project:

```sh
npx @react-native-community/cli@latest init MyNewApp --template https://github.com/tunicalabs-media/react-native-boilerplate.git
```

If the app has already been generated, update the display name in these files:

- `app.json`: change `displayName`
- `android/app/src/main/res/values/strings.xml`: change `app_name`
- `ios/<CurrentAppName>/Info.plist`: change `CFBundleDisplayName`
- `ios/<CurrentAppName>/LaunchScreen.storyboard`: change the launch screen label text, if you want it to match

Then rebuild the native apps:

```sh
npm run android-clean
npm run android

npm run pods
npm run ios
```

To fully rename the native project/module name after generation, use a React Native rename tool and then reinstall pods:

```sh
npx react-native-rename "My New App" -b com.example.mynewapp
npm run pods
```

After a full rename, check `app.json`, `package.json`, Android package paths, iOS target names, and bundle identifiers before shipping.

## Local Template Development

Clone this repository:

```sh
git clone https://github.com/tunicalabs-media/react-native-boilerplate.git
cd react-native-boilerplate
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
template/AGENTS.md     AI-agent development guide copied into generated apps
template/_gitignore    Becomes .gitignore in generated apps
template/_npmrc        Becomes .npmrc in generated apps
template/_nvmrc        Becomes .nvmrc in generated apps
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
