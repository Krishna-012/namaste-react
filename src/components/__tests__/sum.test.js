import { sum } from "../sum"

test("sum function should calculate the sum of two numbers", () => {

    const result = sum(4,3);
    expect(result).toBe(7);
})