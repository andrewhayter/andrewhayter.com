import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";

const NAV = [
  { href: "#work", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const EXPERIENCE = [
  {
    role: "Independent Product Engineer / Founding Engineer",
    org: "Self-Directed",
    time: "2021 — Present",
    bullets: [
      "Designed and operated a multi-property content automation framework spanning scheduled publishing, cross-platform distribution, and AI-assisted generation, with unit economics tracked to sub-cent cost per generated page.",
      "Built data-pipeline-backed content differentiation by ingesting public structured datasets to power calculators and current, sourced content, establishing a defensible content moat over competitors relying on static copy.",
      "Tracked and responded to a structural shift in AI answer engines (Copilot, Perplexity, ChatGPT), using citation and traffic data to redesign content architecture and preserve visibility as direct-answer behavior increased.",
      "Ran systematic competitive teardowns (sitemap extraction, feature inventory, traffic sizing) across category-leading products, translating findings into cost-sequenced build backlogs and implementation-ready specs.",
      "Audited a 5,000+ URL content property end to end — structure, dead stubs, taxonomy mapping — as a repeatable diagnostic pass ahead of rebuild and migration work.",
      "Developed a fullstack application using Next.js, TypeScript, Payload CMS, PostgreSQL, Docker, and Nginx, with a normalized schema and taxonomy system supporting 3,000+ structured entries across multiple categories and relationships.",
      "Set up and maintained Linux infrastructure including DNS, SSL/TLS, backups, monitoring, and deployment automation.",
    ],
  },
  {
    role: "Fullstack Developer, Cloud & Web",
    org: "POWERSHiFTER Digital",
    time: "2018 — 2021",
    bullets: [
      "Built web applications and cloud-connected systems across frontend, backend, CMS, and deployment layers.",
      "Developed serverless applications on Google Cloud Platform using Cloud Functions, Firestore, and Pub/Sub.",
      "Integrated frontend interfaces with Contentful CMS and contributed to CI/CD workflows across client projects.",
    ],
  },
  {
    role: "Fullstack Web Developer (Contract)",
    org: "Goat Social",
    time: "2019",
    bullets: [
      "Built and launched CMS-driven websites for education-sector clients using Craft CMS and WordPress.",
      "Implemented custom templates, content workflows, and deployment requirements under short timelines.",
    ],
  },
  {
    role: "Fullstack Developer / Linux Web Hosting",
    org: "Major Tom",
    time: "2015 — 2019",
    bullets: [
      "Built, deployed, and maintained 30+ websites across Linux hosting environments.",
      "Managed production hosting operations including SSH, backups, SSL/TLS, troubleshooting, and server maintenance.",
      "Improved uptime, security, and performance across WordPress and Linux-based web environments.",
    ],
  },
];

const SKILLS = [
  {
    label: "Languages & Frameworks",
    items: "TypeScript · JavaScript · Rust · Node.js · React · Next.js · Astro · PHP · WordPress · Payload CMS",
  },
  {
    label: "Infrastructure & DevOps",
    items:
      "Linux · Docker · Docker Compose · Nginx · Apache · CI/CD · GitHub Actions · GitLab CI · DNS · SSL/TLS · Cloudflare Workers/D1/KV/R2",
  },
  {
    label: "Databases & Data",
    items:
      "PostgreSQL · MySQL · Firestore · Schema design · Structured content systems · Public-dataset ingestion pipelines",
  },
  {
    label: "Automation & Operations",
    items:
      "Bash · Playwright · Web scraping · Competitive intelligence teardowns · Deployment workflows · Performance tuning",
  },
  {
    label: "AI & LLM Workflows",
    items:
      "ChatGPT · Claude · OpenRouter · Prompt engineering · AI-assisted development · Research synthesis · Implementation planning · Debugging support",
  },
  {
    label: "Cloud & Platforms",
    items: "Google Cloud Platform · Cloudflare Workers · OpenShift · AWS · Contentful · GitHub · GitLab",
  },
];

const EDUCATION = [
  {
    school: "Lighthouse Labs",
    place: "Vancouver, BC",
    program: "Fullstack Web Development Bootcamp",
    note: "Capstone People's Choice Award winner",
    time: "2015",
  },
  {
    school: "Solana Turbin3",
    place: "Remote",
    program: "Solana Developer Cohort",
    note: null,
    time: "2023",
  },
];

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-paper focus-ring"
      >
        Skip to content
      </a>

      <div className="min-h-screen bg-paper text-ink dark:bg-ink dark:text-paper">
        <header className="sticky top-0 z-30 border-b border-ink/10 bg-paper/85 backdrop-blur supports-[backdrop-filter]:bg-paper/70 dark:border-paper/10 dark:bg-ink/85">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
            <a href="#top" className="text-sm font-semibold tracking-tight">
              Andrew Hayter
            </a>
            <nav aria-label="Section navigation" className="hidden items-center gap-6 sm:flex">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-ink/60 transition-colors hover:text-ink focus-ring dark:text-paper/60 dark:hover:text-paper"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <main id="main">
          {/* Hero */}
          <section id="top" className="mx-auto max-w-3xl px-6 pb-16 pt-16 sm:pb-20 sm:pt-24">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-ink/50 dark:text-paper/50">
              Product Engineer — Content Systems &amp; AI-Era Growth
            </p>
            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              Andrew Hayter
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75 dark:text-paper/75">
              Product-minded engineer with 9+ years building and operating web
              products, internal tools, and infrastructure-backed applications.
              Best at turning rough ideas, messy workflows, and ambiguous
              requirements into practical products and reliable systems — with
              a track record of designing systems that turn raw or public data
              into defensible product advantages at scale.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="mailto:andrewhayter@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-opacity hover:opacity-85 focus-ring dark:bg-paper dark:text-ink"
              >
                <Mail className="h-4 w-4" aria-hidden />
                andrewhayter@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/hello-andrew-hayter/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-sm font-medium transition-colors hover:border-ink/30 focus-ring dark:border-paper/15 dark:hover:border-paper/30"
              >
                <Linkedin className="h-4 w-4" aria-hidden />
                LinkedIn
              </a>
              <a
                href="https://github.com/andrewhayter"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-sm font-medium transition-colors hover:border-ink/30 focus-ring dark:border-paper/15 dark:hover:border-paper/30"
              >
                <Github className="h-4 w-4" aria-hidden />
                GitHub
              </a>
              <a
                href="/Andrew_Hayter_Resume_2026.docx"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-sm font-medium transition-colors hover:border-ink/30 focus-ring dark:border-paper/15 dark:hover:border-paper/30"
              >
                <FileDown className="h-4 w-4" aria-hidden />
                Resume
              </a>
            </div>
          </section>

          {/* Experience */}
          <section id="work" className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
            <h2 className="mb-10 font-mono text-xs uppercase tracking-[0.2em] text-ink/50 dark:text-paper/50">
              Experience
            </h2>
            <div className="space-y-14">
              {EXPERIENCE.map((job) => (
                <div key={job.role}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-lg font-semibold tracking-tight">{job.role}</h3>
                    <span className="font-mono text-xs text-ink/50 dark:text-paper/50">
                      {job.time}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-ink/60 dark:text-paper/60">{job.org}</p>
                  <ul className="mt-4 space-y-2.5">
                    {job.bullets.map((b) => (
                      <li
                        key={b}
                        className="relative pl-4 text-[15px] leading-relaxed text-ink/80 before:absolute before:left-0 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-ink/40 dark:text-paper/80 dark:before:bg-paper/40"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
            <h2 className="mb-10 font-mono text-xs uppercase tracking-[0.2em] text-ink/50 dark:text-paper/50">
              Skills
            </h2>
            <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {SKILLS.map((skill) => (
                <div key={skill.label}>
                  <dt className="text-sm font-semibold">{skill.label}</dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-ink/70 dark:text-paper/70">
                    {skill.items}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Education */}
          <section id="education" className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
            <h2 className="mb-10 font-mono text-xs uppercase tracking-[0.2em] text-ink/50 dark:text-paper/50">
              Education
            </h2>
            <div className="space-y-8">
              {EDUCATION.map((e) => (
                <div
                  key={e.school}
                  className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <div>
                    <h3 className="text-[15px] font-semibold">
                      {e.program}
                      <span className="font-normal text-ink/60 dark:text-paper/60">
                        {" "}
                        — {e.school}, {e.place}
                      </span>
                    </h3>
                    {e.note && (
                      <p className="mt-1 text-sm text-ink/60 dark:text-paper/60">{e.note}</p>
                    )}
                  </div>
                  <span className="font-mono text-xs text-ink/50 dark:text-paper/50">
                    {e.time}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
            <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-ink/50 dark:text-paper/50">
              Contact
            </h2>
            <p className="max-w-md text-lg leading-relaxed text-ink/75 dark:text-paper/75">
              Open to product engineering, growth engineering, and content
              systems work. The fastest way to reach me is email.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:andrewhayter@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-opacity hover:opacity-85 focus-ring dark:bg-paper dark:text-ink"
              >
                <Mail className="h-4 w-4" aria-hidden />
                andrewhayter@gmail.com
              </a>
            </div>
          </section>
        </main>

        <footer className="border-t border-ink/10 px-6 py-8 dark:border-paper/10">
          <div className="mx-auto flex max-w-3xl flex-col gap-3 text-xs text-ink/45 sm:flex-row sm:items-center sm:justify-between dark:text-paper/45">
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
              <span>© {new Date().getFullYear()} Andrew Hayter</span>
              <span>Built with Next.js &amp; Tailwind CSS</span>
            </div>
            <ThemeToggle />
          </div>
        </footer>
      </div>
    </>
  );
}
