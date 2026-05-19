import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { App } from "./App";
import { company } from "./data/company";
import { buildInquiryMailto } from "./lib/mailto";

describe("App", () => {
  it("renders the primary landing page and contact CTAs", () => {
    render(<App />);

    expect(screen.getByRole("heading", { level: 1, name: /MMS Umzug Bremen/i })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /anrufen/i })[0]).toHaveAttribute("href", company.phoneHref);
    expect(screen.getAllByRole("link", { name: /whatsapp/i })[0]).toHaveAttribute("href", company.whatsappHref);
    expect(screen.getByRole("link", { name: /angebot bei MMS Umzug anfragen/i })).toHaveAttribute("href", "#kontakt");
    expect(screen.getAllByText(company.address).length).toBeGreaterThan(0);
  });

  it("prepares the quote form as an email request", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByLabelText("Name"), "Max Mustermann");
    await user.type(screen.getByLabelText("Telefon"), "0176 00000000");
    await user.selectOptions(screen.getByLabelText(/^Leistung auswählen$/i), "Umzüge");
    await user.type(screen.getByLabelText("Nachricht"), "Bitte um ein unverbindliches Angebot.");
    await user.click(screen.getByRole("button", { name: /anfrage per e-mail vorbereiten/i }));

    const mailLink = screen.getByRole("link", { name: /e-mail öffnen/i });
    const mailHref = mailLink.getAttribute("href") ?? "";

    expect(screen.getByText(/Ihre Anfrage ist vorbereitet/i)).toBeInTheDocument();
    expect(mailLink).toHaveAttribute(
      "href",
      buildInquiryMailto({
        name: "Max Mustermann",
        phone: "0176 00000000",
        email: "",
        service: "Umzüge",
        message: "Bitte um ein unverbindliches Angebot.",
      }),
    );
    expect(mailHref).toMatch(new RegExp(`^mailto:${company.email}\\?`));
    expect(mailHref).not.toContain("mailto:mailto:");
    expect(mailHref).toContain(`subject=${encodeURIComponent(`Anfrage über ${company.domain}`)}`);
    expect(mailHref).toContain("Name%3A%20Max%20Mustermann");
    expect(mailHref).toContain("Telefon%3A%200176%2000000000");
    expect(mailHref).toContain("Leistung%3A%20Umz%C3%BCge");
    expect(mailHref).toContain("Bitte%20um%20ein%20unverbindliches%20Angebot.");
  });

  it("exposes valid MovingCompany JSON-LD with central company data", () => {
    const { container } = render(<App />);
    const script = container.querySelector('script[type="application/ld+json"]');

    expect(script).not.toBeNull();
    const jsonLd = JSON.parse(script?.textContent ?? "{}") as Record<string, unknown>;

    expect(jsonLd["@type"]).toBe("MovingCompany");
    expect(jsonLd.name).toBe(company.name);
    expect(jsonLd.url).toBe(company.url);
    expect(jsonLd.email).toBe(company.email);
    expect(jsonLd.address).toMatchObject({
      addressLocality: "Bremen",
      postalCode: "28719",
    });
  });
});
