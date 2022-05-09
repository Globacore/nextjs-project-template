/* eslint-disable */
const nextJest = require("next/jest")

const createJestConfig = nextJest({ dir: "./" })

const config = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  collectCoverageFrom: [
    "components/**/*.tsx?",
    "pages/**/*.tsx?",
    "lib/**/*.tsx?",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
}
