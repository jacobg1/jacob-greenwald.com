import type { Config } from "jest";

const config: Config = {
  transform: {
    "^.+\\.[jt]sx?$": "<rootDir>/jest-preprocess.ts",
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/file-mock.ts",
    "^@reach/router(.*)": `<rootDir>/node_modules/@gatsbyjs/reach-router$1`,
  },
  testPathIgnorePatterns: ["node_modules", "\\.cache", "<rootDir>.*/public"],
  transformIgnorePatterns: [
    "node_modules/(?!(gatsby|gatsby-script|gatsby-link)/)",
  ],
  globals: {
    __PATH_PREFIX__: "",
  },
  testEnvironmentOptions: {
    url: "http://localhost",
  },
  setupFiles: [
    "<rootDir>/loadershim.ts",
    "<rootDir>/__mocks__/gatsby-mock.ts",
    "<rootDir>/__mocks__/use-navlinks-query-mock.ts",
  ],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  clearMocks: true,
  displayName: {
    name: ":)",
    color: "green",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/themes/**",
    "!**/types/**",
    "!**/context/**",
    "!**/.cache/**",
    "!**/*.d.ts",
    "!**/jest*",
    "!**/gatsby*",
    "!**/__utils__/**",
    "!**/*index.{ts,tsx}",
    "**/pages/index.tsx",
  ],
  coverageThreshold: {
    // Starting these a bit lower
    // Will bump these up as more coverage is added
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
};

export default config;
