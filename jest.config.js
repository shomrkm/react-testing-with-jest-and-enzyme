module.exports = {
  roots: [
    "<rootDir>/src"
  ],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  transform: {
     "^.+\\.(js|jsx|mjs)$": "babel-jest",
     "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testPathIgnorePatterns: [
    "/node_modules/",
  ],
   // Setup Enzyme
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.ts",
    "<rootDir>/src/setupEnzyme.ts"
  ],
  moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
  }
}