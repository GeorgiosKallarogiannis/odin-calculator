const { add, subtract } = require("./script");

test("adds 1 + 2 to equal 3", () => {
    expect(add(1, 2)).toBe(3);
});

describe("subtract", () => {
    test("subtract 2 - 1 to equal 1", () => {
        expect(subtract(2, 1)).toBe(1);
    });
    test("subtract 1 - 2 to equal -1", () => {
        expect(subtract(1, 2)).toBe(-1);
    });
});
