import { GoogleGenerativeAI } from "@google/generative-ai";
import { profile } from "@/data/profile";
import { answerAboutHashir } from "@/lib/assistant";

export const runtime = "nodejs";
export const maxDuration = 30;

const SYSTEM = `You are the personal AI assistant on ${profile.name}'s portfolio website.
Your job: answer recruiters, clients, and collaborators accurately, warmly, and in fluent professional English (Roman Urdu only if the visitor writes in Roman Urdu).

STRICT RULES
- ONLY use the FACTS below. Never invent employers, projects, dates, or skills.
- Speak as Hashir's assistant (third person: "Hashir is…", "He has…"), not as Hashir himself.
- Prefer concrete details: years of experience, project counts, company names, stack, links.
- Keep answers clear: 2–6 short sentences, or a short bullet list when listing projects/skills.
- If asked something unknown (salary, personal life, politics), politely redirect to ${profile.email} or the Contact form.
- He is open to developer roles and freelance projects (not seeking internships as a candidate).

FACTS — IDENTITY
- Full name: ${profile.name} (goes by ${profile.shortName})
- Title: ${profile.title}
- Location: ${profile.location}
- Experience: 1+ year professional
- Projects delivered: 10+ (telehealth, finance + fraud detection, ERP, social platforms, AI chat, AI voice over, Dribbble clone, Onyx open source, travel)
- Email: ${profile.email}
- Phone: ${profile.phone}
- GitHub: ${profile.socials.github}
- LinkedIn: ${profile.socials.linkedin}
- Instagram: ${profile.socials.instagram}
- Facebook: ${profile.socials.facebook}
- Portfolio: ${profile.portfolio}
- CV: Available on the site via the “Download CV” button (${profile.cv})
- Language: English — Fluent

FACTS — SUMMARY / ABOUT
${profile.summary}

${profile.about.join("\n\n")}

FACTS — HIGHLIGHTS
${profile.highlights.map((h) => `- ${h.label}: ${h.value}`).join("\n")}

FACTS — SKILLS
${Object.entries(profile.skills)
  .map(([k, v]) => `- ${k}: ${v.join(", ")}`)
  .join("\n")}

FACTS — EXPERIENCE
${profile.experience
  .map(
    (e, i) =>
      `${i + 1}. ${e.role} | ${e.company} | ${e.period} | ${e.type}\n${e.points.map((p) => `   • ${p}`).join("\n")}`
  )
  .join("\n\n")}

FACTS — PROJECTS
${profile.projects
  .map(
    (p, i) =>
      `${i + 1}. ${p.title}${p.url !== "#" ? ` (${p.url})` : " — Live soon"}\n   ${p.description}\n   Highlights: ${p.highlights.join("; ")}\n   Stack: ${p.stack.join(", ")}`
  )
  .join("\n\n")}

FACTS — EDUCATION
${profile.education.map((e) => `- ${e.degree} — ${e.school} (${e.period})`).join("\n")}

AI / SPECIAL INTERESTS
- Expanding into AI-integrated features: conversational AI (Lumen), neural voice-over (VoiceForge), open-source Onyx (GitHub connector / RAG chat), content moderation, personalization, and sentiment analysis across recent projects (e.g. SocialSphere AI, Nexora ERP AI-assisted modules).
`;

const MODELS = [
  process.env.GEMINI_MODEL,
  "gemini-2.5-flash",
  "gemini-2.0-flash",
  "gemini-2.5-flash-lite",
  "gemini-flash-latest",
  "gemini-pro-latest",
].filter(Boolean) as string[];

async function askGemini(
  apiKey: string,
  question: string,
  history: { role: string; parts: { text: string }[] }[]
) {
  const genAI = new GoogleGenerativeAI(apiKey);
  const errors: string[] = [];

  const uniqueModels = Array.from(new Set(MODELS));
  for (const modelName of uniqueModels) {
    try {
      const model = genAI.getGenerativeModel({
        model: modelName,
        systemInstruction: SYSTEM,
      });
      const chat = model.startChat({ history });
      const result = await chat.sendMessage(question);
      const text = result.response.text()?.trim();
      if (text) return { text, model: modelName };
    } catch (e) {
      errors.push(`${modelName}: ${e instanceof Error ? e.message : "failed"}`);
    }
  }

  throw new Error(errors.join(" | ") || "Gemini unavailable");
}

export async function POST(req: Request) {
  let question = "";
  try {
    const body = await req.json();
    const messages = Array.isArray(body?.messages) ? body.messages : [];
    const lastUser = [...messages].reverse().find((m: { role?: string }) => m?.role === "user");
    question = String(lastUser?.content || body?.question || "").trim();

    if (!question) {
      return Response.json({
        role: "assistant",
        content: answerAboutHashir(""),
      });
    }

    const apiKey = (process.env.GEMINI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY || "").trim();

    if (!apiKey) {
      return Response.json({
        role: "assistant",
        content: answerAboutHashir(question),
        fallback: true,
      });
    }

    const history = messages
      .filter((m: { role: string; content: string }) => m.role === "user" || m.role === "assistant")
      .slice(0, -1)
      .map((m: { role: string; content: string }) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: String(m.content) }],
      }));

    const { text, model } = await askGemini(apiKey, question, history);

    return Response.json({
      role: "assistant",
      content: text,
      model,
    });
  } catch (e) {
    const detail = e instanceof Error ? e.message : "Gemini error";
    return Response.json({
      role: "assistant",
      content: answerAboutHashir(question),
      fallback: true,
      error: process.env.NODE_ENV === "development" ? detail : undefined,
    });
  }
}
