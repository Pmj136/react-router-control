module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    roots: ["<rootDir>/tests/"],
    verbose: true,
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    moduleNameMapper: {
        "@/(.*)": "<rootDir>/src/$1"
    }
};