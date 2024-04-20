import { test, expect } from "vitest";
import { transformer } from "../src/EX1";

test("Test avec une chaîne vide", () => {
  const result = transformer("");
  expect(result).toBe("");
});

test("Test avec des caractères en minuscules", () => {
  const result = transformer("hello");
  expect(result).toEqual("HELLO");
});

test("Test avec des caractères spéciaux", () => {
  const result = transformer("@#abc123");
  expect(result).toContain("ABC");
});
