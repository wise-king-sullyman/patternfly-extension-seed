module.exports = {
  clearMocks: true,
  testMatch: ['**/__tests__/**/*.{js,ts}?(x)', '**/*.test.{js,ts}?(x)'],
  modulePathIgnorePatterns: [
    '<rootDir>/dist/*.*',
    '<rootDir>/public/*.*',
    '<rootDir>/.cache/*.*'
  ],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/styleMock.js'
  },
  testEnvironment: 'jsdom'
};
