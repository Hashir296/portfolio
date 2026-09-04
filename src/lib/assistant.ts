import { profile } from "@/data/profile";

/** Offline fallback when Gemini is unavailable */
export function answerAboutHashir(question: string): string {
  const q = question.toLowerCase().trim();

  const wantsUrdu =
    /[\u0600-\u06FF]/.test(question) ||
    /(kon hai|kaun hai|batao|bataye|kya hai|kaise|uske|mera|hashir ka|bary|baray)/i.test(q);

  if (!q) {
    return wantsUrdu
      ? `Hashir ke bare mein poochhein — skills, projects, experience, ya contact.`
      : `Ask about Hashir’s skills, projects, experience, education, or how to contact him.`;
  }

  if (/(who|about|introduce|profile|summary|kon hai|kaun hai|bare|bary|baray)/i.test(q)) {
    return wantsUrdu
      ? `${profile.name} — ${profile.title}, ${profile.location}.\n\n${profile.summary}\n\nContact: ${profile.email}`
      : `${profile.name} is a ${profile.title} based in ${profile.location}.\n\n${profile.summary}\n\nContact: ${profile.email} | ${profile.phone}`;
  }

  if (/(year|experience|1\+|one year|kitna)/i.test(q) && !/(project)/i.test(q)) {
    return `${profile.name} has 1+ year of professional experience shipping full-stack production apps for international clients (AlphaNUIX Technologies; Softelio intern).`;
  }

  if (/(skill|stack|tech|toolkit|technologies)/i.test(q)) {
    const body = Object.entries(profile.skills)
      .map(([k, v]) => `• ${k}: ${v.join(", ")}`)
      .join("\n");
    return `Tech stack:\n${body}`;
  }

  if (/(project|built|apps?|portfolio work|10\+)/i.test(q)) {
    const body = profile.projects
      .map(
        (p, i) =>
          `${i + 1}. ${p.title}${p.url !== "#" ? ` (${p.url})` : " — Live soon"}\n   ${p.description}\n   Stack: ${p.stack.join(", ")}`
      )
      .join("\n\n");
    return `Hashir has delivered 10+ projects. Highlights:\n\n${body}`;
  }

  if (/(contact|email|phone|hire|reach|available|call|freelance)/i.test(q)) {
    return `Contact ${profile.name}:\n• Email: ${profile.email}\n• Phone: ${profile.phone}\n• GitHub: ${profile.socials.github}\n• LinkedIn: ${profile.socials.linkedin}\n• Location: ${profile.location}\n\nHe is open to developer roles and freelance projects.`;
  }

  if (/(experience|job|alpha|softelio|company|role|internship)/i.test(q)) {
    const body = profile.experience
      .map((e) => `• ${e.role} — ${e.company} (${e.period}, ${e.type})\n  ${e.points.join("; ")}`)
      .join("\n\n");
    return `Professional experience:\n\n${body}`;
  }

  if (/(educat|university|degree|college|study|air university|fsc)/i.test(q)) {
    const body = profile.education
      .map((e) => `• ${e.degree} — ${e.school} (${e.period})`)
      .join("\n");
    return `Education:\n${body}`;
  }

  if (/(language|speak|english|fluent)/i.test(q)) {
    return profile.languages.map((l) => `${l.name} — ${l.level}`).join(", ");
  }

  const projectHit = profile.projects.find((p) => q.includes(p.title.toLowerCase().split(" ")[0]!));
  if (projectHit) {
    return `${projectHit.title}: ${projectHit.description}\nHighlights: ${projectHit.highlights.join("; ")}\nStack: ${projectHit.stack.join(", ")}${
      projectHit.url !== "#" ? `\nLive: ${projectHit.url}` : "\nLive soon."
    }`;
  }

  return `${profile.name} is a ${profile.title} in ${profile.location}. ${profile.summary}\n\nAsk about projects, skills, experience, education, or contact (${profile.email}).`;
}
