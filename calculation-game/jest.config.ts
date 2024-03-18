const config = {
  clearMocks: true,
  testEnvironment: 'jsdom',

  // Specify a setup file for Jest
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // Handle module aliases and file imports
  moduleNameMapper: {
    // Handle CSS imports (if you're using CSS modules)
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    // Handle image imports
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    // Handle module path aliases (if you're using them in your project)
    '^@components/(.*)$': '<rootDir>/components/$1'
  },

  // Transform settings
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // This will respect your babel.config.js
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },

  // Match test files
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)'
  ]
};

export default config;
