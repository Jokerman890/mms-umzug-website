import { describe, it, expect } from "vitest";
import { buildInquiryMailto } from "./mailto";

describe("buildInquiryMailto", () => {
  it("URL-encodes the company email address (encodes '@' as '%40')", () => {
    const result = buildInquiryMailto({
      name: "Max Mustermann",
      phone: "0160 1234567",
      email: "foo@example.com",
      service: "Umzug",
      message: "Hallo",
    });

    expect(result.startsWith("mailto:mms.umzug%40web.de?")).toBe(true);
    expect(result).not.toContain("mailto:mms.umzug@web.de");
  });

  it("URL-encodes the subject and body parameters with special characters", () => {
    const result = buildInquiryMailto({
      name: "Müller",
      phone: "",
      email: "",
      service: "Entrümpelung",
      message: "Ich brauche Hilfe!",
    });

    /* The function first builds a body string by joining with \n, then applies
       encodeURIComponent to that body. Verify each piece appears encoded. */
    const subject =
      "subject=" + encodeURIComponent("Anfrage über www.mms-umzug.de");
    const nameField = "Name%3A%20M%C3%BCller";
    const serviceField = "Leistung%3A%20Entr%C3%BCmpelung";
    const msgField = "Ich%20brauche%20Hilfe";

    expect(result).toContain(subject);
    expect(result).toContain(nameField);
    expect(result).toContain(serviceField);
    expect(result).toContain(msgField);
  });

  it("produces a well-formed mailto URI", () => {
    const result = buildInquiryMailto({
      name: "Test",
      phone: "",
      email: "",
      service: "Umzug",
      message: "Testnachricht",
    });

    expect(result.startsWith("mailto:")).toBe(true);
    expect(result).toContain("?subject=");
    expect(result).toContain("&body=");
  });
});
