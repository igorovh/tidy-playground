import { expect, test } from "bun:test";
import { slugify, titleCase, truncate, wordCount } from "./text";

test("slugify", () => {
  expect(slugify("Hello, World!")).toBe("hello-world");
});

test("truncate", () => {
  expect(truncate("short", 10)).toBe("short");
  expect(truncate("hello world", 5)).toBe("hell…");
  expect(truncate("hello world", 5).length).toBeLessThanOrEqual(5);
  expect(truncate("hello", 5)).toBe("hello");
  expect(truncate("hello world", 1)).toBe("…");
});

test("wordCount", () => {
  expect(wordCount("one two three")).toBe(3);
  expect(wordCount("")).toBe(0);
  expect(wordCount("   ")).toBe(0);
  expect(wordCount("  hello  ")).toBe(1);
});

test("titleCase", () => {
  expect(titleCase("hello world")).toBe("Hello World");
});
