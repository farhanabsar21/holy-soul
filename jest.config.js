/* eslint-disable @typescript-eslint/no-require-imports */
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./", // Path to your Next.js app
});

/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
