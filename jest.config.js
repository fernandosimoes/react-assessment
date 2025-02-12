module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  testPathIgnorePatterns: [
    "/node_modules/",
    "/__mocks__",
    "<rootDir>/src/types/",
  ],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/hooks/",
    "<rootDir>/src/types/",
    "<rootDir>/src/App.tsx",
  ],
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "<rootDir>"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.tsx",
    "src/**/*.ts",
    "!src/main.tsx",
    "!src/vite-env.d.ts",
    "!src/**/_app.tsx",
    "!src/**/_app.tsx",
    "!src/**/_document.tsx",
    "!src/services/*",
  ],
  coverageReporters: ["lcov", "json", "html", "text-summary"],

  moduleNameMapper: {
    "\\.module\\.css$": "identity-obj-proxy",
    "\\.(css|scss)$": "<rootDir>/src/test-utils/styleMock.js",
  },
};
