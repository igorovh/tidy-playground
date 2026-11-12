import { expect, test } from "bun:test";
import { average, max, median } from "./stats";

test("average", () => {
  expect(average([2, 4])).toBe(3);
  expect(average([])).toBe(0);
});

test("max", () => {
  expect(max([1, 5, 3])).toBeDefined();
});

test("median", () => {
  expect(median([3, 1, 2])).toBe(2);
});
