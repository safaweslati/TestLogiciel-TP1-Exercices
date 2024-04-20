import { test, expect } from "vitest";
import { trier } from "../src/EX2";

test("Tri d'un tableau vide", () => {
  const result = trier([]);
  expect(result).toEqual([]);
});

test("Tri d'un tableau déjà trié", () => {
  const result = trier([1, 2, 3]);
  expect(result).toEqual([1, 2, 3]);
});

test("Tri d'un tableau inversé", () => {
  const result = trier([3, 2, 1]);
  expect(result).toEqual([1, 2, 3]);
});

test("Tri d'un tableau avec des valeurs non numériques", () => {
  const result = trier([3, "a", 1, "b", 2]);
  expect(result).toEqual([3, "a", 1, "b", 2]);
});

test("Tri d'un tableau ordinaire", () => {
  const result = trier([3, 1, 4, 2]);
  expect(result).toEqual([1, 2, 3, 4]);
});
