module.exports = {
  preset: '@react-native/jest-preset',
  moduleNameMapper: {
    '^@react-native-async-storage/async-storage$':
      '@react-native-async-storage/async-storage/jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native|@react-navigation|@reduxjs|react-redux|@react-native-async-storage|immer|redux|reselect)/)',
  ],
};
