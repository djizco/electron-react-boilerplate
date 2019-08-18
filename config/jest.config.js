const path = require('path');

module.exports = {
  collectCoverageFrom: ['**/*.{js,jsx}'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '^_atoms(.*)$': '<rootDir>/app/components/atoms/$1',
    '^_molecules(.*)$': '<rootDir>/app/components/molecules/$1',
    '^_organisms(.*)$': '<rootDir>/app/components/organisms/$1',
    '^_templates(.*)$': '<rootDir>/app/components/templates/$1',
    '^_pages(.*)$': '<rootDir>/app/components/pages/$1',
    '^_environment(.*)$': '<rootDir>/app/components/environment/$1',
    '^_hooks(.*)$': '<rootDir>/app/hooks/$1',
    '^_store(.*)$': '<rootDir>/app/store/$1',
    '^_actions(.*)$': '<rootDir>/app/store/actions/$1',
    '^_thunks(.*)$': '<rootDir>/app/store/thunks/$1',
    '^_reducers(.*)$': '<rootDir>/app/store/reducers/$1',
    '^_assets(.*)$': '<rootDir>/app/assets/$1',
    '^_styles(.*)$': '<rootDir>/app/styles/$1',
    '^_utils(.*)$': '<rootDir>/app/utils/$1',
    '^_api(.*)$': '<rootDir>/app/api/$1',
  },
  rootDir: path.join(__dirname, '..'),
  setupFiles: ['<rootDir>/config/jest.setup.js', '<rootDir>/config/enzyme.setup.js'],
  testEnvironment: 'jest-environment-jsdom-global',
  testMatch: [path.join(__dirname, '../**/?(*.)+(spec|test).[tj]s?(x)')],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
    // eslint-disable-next-line
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/assetsTransformer.js',
  },
};
