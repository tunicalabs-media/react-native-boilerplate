# AGENTS.md

This file gives AI coding agents the local context needed to work productively in this React Native app. Keep it updated when architecture, tooling, or conventions change.

## Project Overview

This app was generated from the Tunica React Native Boilerplate. It is a React Native CLI app with TypeScript, React Navigation, Redux Toolkit, AsyncStorage-backed preferences, React Native Unistyles, SVG icons, toast notifications, skeleton loading UI, and Montserrat fonts already wired in.

Use the existing structure and patterns before adding new abstractions.

## Included Stack

- React Native `0.85.3`
- React `19.2.3`
- TypeScript
- React Navigation native stack and bottom tabs
- Redux Toolkit and React Redux
- AsyncStorage for persisted preferences
- React Native Unistyles for styling
- React Native SVG for local icon components
- React Native Simple Toast for notification feedback
- React Native Skeleton Placeholder for loading states
- React Native Safe Area Context and Screens
- React Native Linear Gradient
- React Native Tab View and Pager View
- Montserrat font family linked through `react-native.config.js`
- ESLint, Prettier, Jest, React Test Renderer, and Husky

## App Structure

```text
src/
  App.tsx                         App providers and preference bootstrap
  components/                     Shared UI components
  font/                           Bundled Montserrat fonts
  icons/                          react-native-svg icon components
  lib/                            Shared helpers
  navigation/                     Root stack, tabs, and typed route params
  screens/                        App screens
  store/                          Redux store, hooks, and slices
  theme/                          Theme provider, colors, fonts, common styles
```

Native project files live in `android/` and `ios/`. Avoid editing generated native files unless the requested change requires native configuration.

## Development Commands

Run these from the app root:

```sh
npm start
npm run start-reset
npm run android
npm run ios
npm run pods
npm run lint
npm run lint-fix
npm run check-format
npm run format
npm test
```

Android helpers:

```sh
npm run android-clean
npm run android-apk-debug
npm run android-apk-release
npm run android-release
```

When fonts or other native assets change, run:

```sh
npm run assets
```

## Coding Conventions

- Prefer functional components and typed props.
- Use the typed Redux hooks from `src/store/hooks.ts`.
- Add Redux state through focused slices under `src/store/slices/`.
- Keep route params typed in `src/navigation/types.ts`.
- Use `ScreenFrame` for standard screen layout.
- Use `react-native-unistyles` `StyleSheet.create`, not React Native's built-in `StyleSheet`.
- Pull colors from `useThemeColors()` and font names from `src/theme/fonts.ts`.
- Keep reusable styling in `src/theme/commonStyles.ts` or small local `createStyles` functions.
- Use existing SVG icon components or add new icons in `src/icons/` and export them from `src/icons/index.ts`.
- Keep UI accessible with meaningful `accessibilityRole`, `accessibilityState`, and readable button labels where relevant.

## Navigation Notes

- `RootNavigator` owns the native stack.
- `Splash` starts the app and routes into `MainTabs`.
- `MainTabs` contains `Home`, `Profile`, and `Settings`.
- `Details` is a root stack screen presented over the tabs.
- If you add screens, update `src/navigation/types.ts` first, then wire the navigator.

## State And Preferences

Redux is configured in `src/store/store.ts`.

The `preferences` slice persists these settings with AsyncStorage:

- theme: `system`, `light`, or `dark`
- notifications enabled or disabled

The settings screen demonstrates saving preferences, updating Redux state, and showing toast feedback.

## Styling And Theme

The theme system resolves the selected preference against the device color scheme in `src/theme/ThemeProvider.tsx`.

- Colors live in `src/theme/colors.ts`.
- Font names live in `src/theme/fonts.ts`.
- Shared styles live in `src/theme/commonStyles.ts`.
- Variant examples live in `src/screens/SettingsScreen.tsx`.

When adding new UI, support both light and dark themes.

## Testing And Quality

Before finishing changes, run the smallest useful verification:

```sh
npm test
npm run lint
```

For style-only or documentation-only changes, explain if tests were not run.

## AI Agent Guidance

- Read nearby files before changing patterns.
- Keep edits scoped to the user request.
- Do not remove template features unless explicitly asked.
- Do not introduce a new state, styling, navigation, or icon library when the existing stack can handle the task.
- Preserve TypeScript route and Redux types.
- Prefer incremental, easy-to-review changes over broad rewrites.
- Treat this boilerplate as AI-friendly starter code: keep file names clear, screens focused, styles local or shared deliberately, and conventions documented here when they change.
