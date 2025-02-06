module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],  // Point to your src directory
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  testMatch: ['**/__tests__/**/*.test.ts'],  // Look for test files in __tests__ folders
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  }
};
