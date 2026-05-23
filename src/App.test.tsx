import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { App } from "./App";
import { company } from "./data/company";

describe("App", () => {
  it("renders the primary landing page and contact CTAs", () => {
    render(<App />);

    expect(screen.getByRole("heading", { level: 1, name: /MMS Umzug Bremen/i })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /anrufen/i })[0]).toHaveAttribute("href", company.phoneHref);
    expect(screen.getAllByRole("link", { name: /whatsapp/i })[0]).toHaveAttribute("href", company.whatsappHref);
    expect(screen.getByRole("link", { name: /angebot bei MMS Umzug anfragen/i })).toHaveAttribute("href", "#kontakt");
    expect(screen.getAllByText(company.address).length).toBeGreaterThan(0);
  });

  it("validates the contact form before submission", async () => {
    const user = userEvent.setup();
    render(<App />);

    const submitBtn = screen.getByRole("button", { name: /jetzt unverbindlich anfragen/i });
    await user.click(submitBtn);

    expect(screen.getByText(/bitte geben sie ihren namen ein/i)).toBeInTheDocument();
    expect(screen.getByText(/bitte geben sie ihre telefonnummer ein/i)).toBeInTheDocument();
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
