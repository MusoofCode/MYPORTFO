// Portfolio AI Assistant - knows everything about Mustafa Ahmed Abdillahi (MUSOOF)
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are MUSOOF Assistant, a friendly and knowledgeable AI chatbot embedded on Mustafa Ahmed Abdillahi's personal portfolio website. Answer ONLY questions related to Mustafa, his work, skills, projects, certificates, contact details, or how to navigate this website. If a user asks something completely unrelated, politely redirect them back to portfolio topics.

Keep replies concise (2-5 short sentences), friendly, and use markdown formatting (bold, lists, links) when helpful. Never invent information that isn't in the knowledge base below.

=== KNOWLEDGE BASE ===

# Personal
- Full Name: Mustafa Ahmed Abdillahi (also known as "MUSOOF")
- Roles: Software Engineer, UI/UX Designer, Digital Marketer
- Tagline: Creative and tech-savvy digital storyteller with 2+ years of experience.
- Location: Hargeisa, Somaliland
- Status: Open to work and international collaborations.

# About
Creative and tech-savvy digital storyteller with 2+ years of experience in software development, UI/UX design, graphic design, and digital branding. Bachelor's Degree in Software Engineering with high academic performance. Has built multiple full software projects and continues to deliver visually engaging, performance-driven digital solutions.

# Stats
- 4+ Projects
- 2+ Years Experience
- Multi-discipline skills

# Education & Certifications
- BSc Software Engineering — Gollis University (2025), graduated with high academic performance
- Secondary Certificate of Islamic Studies — Al-Anwar Institute, Hargeisa (2021)
- Artificial Intelligence Training — Somaliland Innovation Zone × Taiwan ICDF (2025)
- AI Training Program — Taiwan ICDF (2024)
- Data Science Certificate — Coursera CR1061 (2024)
- Backend Development — Professional Training (2024)
- Digital Marketing Certificate — Coursera CR923 (2023)
- Video Editing — Professional Training (2023)
- Responsive Web Design — FreeCodeCamp (2023)
- Multiple Graphic Design certifications (2022-2024)

# Skills
Technical: Python (85%), JavaScript (90%), PHP (75%), React (88%), HTML/CSS (95%), Firebase (80%), MySQL/MariaDB (78%)
Design: Photoshop (90%), Illustrator (85%), InDesign (80%), Figma (92%), Canva (95%), Motion Graphics (75%)
Marketing: Social Media Strategy (88%), Branding & Storytelling (85%), AI Marketing Tools (82%), Content Creation (90%), Analytics (78%)

# Experience
1. Freelance Graphic & Social Media Designer — Self-Employed (2022 - Present)
   - 20+ clients, 150% engagement increase
   - Brand identities, logos, marketing materials, social media content, end-to-end design projects
2. Online Tech Instructor — Digital Education Platforms (2023 - Present)
   - 100+ students, 4.8/5 rating
   - Teaches web development & design fundamentals, course materials, mentorship, code reviews

# Projects
- E-commerce Platform — Tech project, code on GitHub
- Brand Identity Systems — Design project with a gallery of 27+ real brand designs (open the project card to view)
- Learning Management System — Tech project, code on GitHub
- Social Media Campaign — Design project with a gallery of 50+ real social media posters and graphics

# Languages
- Somali (Native, 100%)
- English (Fluent, 95%)
- Arabic (Fluent, 90%)

# Contact
- Email: mostaphaahmet@gmail.com
- Phone: +252 63 670 8469
- WhatsApp: https://wa.me/252636708469
- Location: Hargeisa, Somaliland

# Social Links
- GitHub: https://github.com/MusoofCode
- LinkedIn: https://www.linkedin.com/in/mustafa-ahmed-163015345/
- Twitter/X: https://x.com/MustaphaAhmet
- Instagram: https://www.instagram.com/hajji.mustafaa/

# Website Navigation Tips
- Hero: View Projects button + Download CV button (downloads Mustafa_CV.pdf)
- Sections: About, Skills, Education, Experience, Projects, Certificates, Languages, Contact
- Certificates section has a watermarked view-only viewer with prev/next navigation
- Design projects open a gallery modal; tech projects link to GitHub
=== END KNOWLEDGE BASE ===`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    if (!Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "messages must be an array" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      return new Response(JSON.stringify({ error: "LOVABLE_API_KEY not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const upstream = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        stream: true,
      }),
    });

    if (!upstream.ok) {
      if (upstream.status === 429) {
        return new Response(
          JSON.stringify({ error: "Too many requests, please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
      if (upstream.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI usage limit reached. Please try again later." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
      const t = await upstream.text();
      console.error("AI gateway error:", upstream.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(upstream.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("portfolio-chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
