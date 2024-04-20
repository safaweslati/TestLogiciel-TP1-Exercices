import { describe, it, fail, expect } from "vitest";
import { fetchRandomUser } from "../src/EX4";

describe("fetchRandomUser function", () => {
  it("fetch user data", async () => {
    try {
      const user = await fetchRandomUser();
      expect(user).toBeDefined();
      expect(typeof user).toBe("object");
      expect(user).toHaveProperty("email");
      expect(user).toHaveProperty("name");
      expect(user).toHaveProperty("gender");
    } catch (error) {
      fail("Problem fetching data");
    }
  });
});
