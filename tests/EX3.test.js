import { test, expect } from "vitest";
import { isPriceInRange } from "../src/EX3";

test("Le prix est dans la plage", () => {
  expect(isPriceInRange(10, 5, 15)).toBeTruthy();
});

test("Le prix est égal à la limite inférieure de la plage", () => {
  expect(isPriceInRange(5, 5, 15)).toBeTruthy();
});

test("Le prix est égal à la limite supérieure de la plage", () => {
  expect(isPriceInRange(15, 5, 15)).toBeTruthy();
});

test("Le prix est en dehors de la plage (inférieur)", () => {
  expect(isPriceInRange(3, 5, 15)).toBeFalsy();
});

test("Le prix est en dehors de la plage (supérieur)", () => {
  expect(isPriceInRange(20, 5, 15)).toBeFalsy();
});
