const jestConfig = {
  collectCoverageFrom: ["src/**/*.ts"],
  coverageThreshold: {
    global: {
      branches: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleFileExtensions: ["js", "ts"],
  verbose: true,
};

module.exports = jestConfig;
