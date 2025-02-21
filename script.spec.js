const { add, subtract, multiply, divide } = require("./script");

describe("add", () => {
    test("adds 1 + 2 to equal 3", () => {
        expect(add(1, 2)).toBe(3);
    });
});

describe("subtract", () => {
    test("subtract 2 - 1 to equal 1", () => {
        expect(subtract(2, 1)).toBe(1);
    });
    test("subtract 1 - 2 to equal -1", () => {
        expect(subtract(1, 2)).toBe(-1);
    });
});

describe("multiply", () => {
    test("multiply 2 * 2 to equal 4", () => {
        expect(multiply(2, 2)).toBe(4);
    });
    test("multiply 2 * -2 to equal -4", () => {
        expect(multiply(2, -2)).toBe(-4);
    });
    test("multiply 2 * 0 to equal 0", () => {
        expect(multiply(2, 0)).toBe(0);
    });
});

describe("divide", () => {
    test("divide 2 / 2 to equal 4", () => {
        expect(divide(2, 2)).toBe(1);
    });
    test("divide 2 / -2 to equal -4", () => {
        expect(divide(2, -2)).toBe(-1);
    });
    test("divide 2 / 0 to equal 'Division by 0 not possible'", () => {
        expect(divide(2, 0)).toBe("Division by 0 not possible");
    });
    test("divide 0 / 2 to equal 'Division by 0 not possible'", () => {
        expect(divide(0, 2)).toBe(0);
    });
});
