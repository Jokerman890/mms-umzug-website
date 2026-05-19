import { company } from "../data/company";

type InquiryMailtoInput = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

export function buildInquiryMailto({ name, phone, email, service, message }: InquiryMailtoInput) {
  const body = [
    `Name: ${name}`,
    `Telefon: ${phone}`,
    email ? `E-Mail: ${email}` : "",
    `Leistung: ${service}`,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  return `mailto:${encodeURIComponent(company.email)}?subject=${encodeURIComponent(
    `Anfrage über ${company.domain}`,
  )}&body=${encodeURIComponent(body)}`;
}
