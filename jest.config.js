module.exports = {
    clearMocks: true,
    collectCoverageFrom: [
        '**/components/**/*.{js,jsx}'
    ],
    coverageDirectory: './coverage/',
    reporters: [
        'default'
    ],
    coveragePathIgnorePatterns: [
        './coverage',
        './dist/',
        './node_modules/',
        './test/'
    ],
    coverageReporters: [
        'json',
        'lcov',
        'text'
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
        'json'
    ],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$"': '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    testEnvironment: 'jsdom'
}