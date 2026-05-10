import { describe, expect, it } from "vitest";
import { publicAsset } from "./assets";

describe("publicAsset", () => {
  it("prefixes public asset paths with the Vite base path", () => {
    expect(publicAsset("images/mms/mms-logo.svg")).toBe(`${import.meta.env.BASE_URL}images/mms/mms-logo.svg`);
  });

  it("normalizes leading slashes", () => {
    expect(publicAsset("/images/mms/mms-fahrzeug-hero.jpg")).toBe(
      `${import.meta.env.BASE_URL}images/mms/mms-fahrzeug-hero.jpg`,
    );
  });
});
