import { describe, expect, it } from "vitest";
import { company } from "./company";
import { allServices } from "./services";

describe("company data", () => {
  it("keeps the primary contact links in sync with the published MMS contact data", () => {
    expect(company.phone).toBe("0176 405 510 85");
    expect(company.phoneHref).toBe("tel:+4917640551085");
    expect(company.email).toBe("mms.umzug@web.de");
    expect(company.emailHref).toBe("mailto:mms.umzug@web.de");
    expect(company.url).toBe("https://www.mms-umzug.de");
    expect(company.address).toBe("Burger Heerstr. 32, 28719 Bremen");
  });

  it("contains the full service set required for lead qualification", () => {
    expect(allServices).toEqual([
      "Umzüge",
      "Entrümpelung",
      "Abrissarbeiten",
      "Gartenarbeit",
      "Möbelmontage",
      "Möbelabbau und Aufbau",
      "Transport und Lieferung",
      "Haushaltsauflösung",
      "Kleintransporte",
    ]);
  });
});
