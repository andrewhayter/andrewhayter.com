import AnimatedGradient from "@/components/fancy/background/animated-gradient-with-svg";
import PixelTrail from "@/components/fancy/background/pixel-trail";

export default function Home() {
  // Plaster-like gradient colors - warm, earthy tones that create a subtle, flowing effect
  const gradientColors = [
    "#f5f5dc", // beige
    "#d2b48c", // tan
    "#cd853f", // peru
    "#daa520", // goldenrod
    "#f4a460", // sandy brown
    "#deb887", // burlywood
  ];

  // Pixel trail colors that match the gradient - using the lighter colors
  const pixelColors = [
    "#f5f5dc", // beige
    "#d2b48c", // tan
    "#deb887", // burlywood
  ];

  return (
    <div className="min-h-screen bg-white text-black p-6 sm:p-8 lg:p-12 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0">
        <AnimatedGradient colors={gradientColors} speed={25} blur="medium" />
      </div>

      {/* Pixel trail with gradient-matching colors */}
      <PixelTrail
        pixelSize={16}
        fadeDuration={1200}
        delay={80}
        className="absolute inset-0 z-10"
        pixelClassName="opacity-60"
        colors={pixelColors}
      />

      {/* Subtle overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/20 z-20" />
      <div className="relative z-30 pointer-events-auto">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="min-h-screen flex flex-col justify-center mb-12 sm:mb-16">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-2 sm:mb-4 text-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                ANDREW HAYTER
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 text-black drop-shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
                FULLSTACK ENGINEER
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-base sm:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                  <strong className="font-black">EMAIL:</strong>{" "}
                  <a
                    href="mailto:andrewhayter@gmail.com"
                    className="text-black hover:underline"
                  >
                    andrewhayter@gmail.com
                  </a>
                </p>
                <p className="text-base sm:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                  <strong className="font-black">GITHUB:</strong>{" "}
                  <a
                    href="https://github.com/andrewhayter"
                    target="_blank"
                    className="text-black hover:underline"
                  >
                    github.com/andrewhayter
                  </a>
                </p>
                <p className="text-base sm:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                  <strong className="font-black">LINKEDIN:</strong>{" "}
                  <a
                    href="https://www.linkedin.com/in/hello-andrew-hayter/"
                    target="_blank"
                    className="text-black hover:underline"
                  >
                    linkedin.com/in/hello-andrew-hayter
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-black border-b-4 border-black pb-3 drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                PROFESSIONAL SUMMARY
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                I build stuff and break stuff. Independent Fullstack Developer
                specializing in secure, scalable web applications. 9+ years in
                JavaScript/TypeScript ecosystems, recently expanded further into
                cybersecurity and blockchain development. Love building apps,
                bringing ideas to life, and making data-driven decisions.
              </p>
            </div>
          </div>

          {/* Work Experience */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-black border-b-4 border-black pb-3 drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                WORK EXPERIENCE
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              <div className="text-base sm:text-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                  <strong className="font-black">
                    CONSULTANT / SECURITY SPECIALIST (doin what i do best)
                  </strong>
                  <span className="font-mono text-sm sm:text-base">
                    2021 – PRESENT
                  </span>
                </div>
                <p className="text-sm sm:text-base text-black mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                  Independent Consulting
                </p>
                <p className="text-sm sm:text-base leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                  AI audits, pentest rigs, Next.js 15 wizardry. Specializing in
                  security-first development and modern web architecture.
                  Building scalable solutions with a focus on cybersecurity
                  integration.
                </p>
              </div>

              <div className="text-base sm:text-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                  <strong className="font-black">
                    PLATFORM DEVELOPER – IOT STARTUP (v huge v fun)
                  </strong>
                  <span className="font-mono text-sm sm:text-base">
                    2018 – 2021
                  </span>
                </div>
                <p className="text-sm sm:text-base text-black mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                  IoT Technology Company
                </p>
                <p className="text-sm sm:text-base leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                  Cloud-native event streams on GCP. Built scalable backend
                  systems and real-time data processing pipelines for IoT
                  devices. Implemented CI/CD and infrastructure as code.
                </p>
              </div>

              <div className="text-base sm:text-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                  <strong className="font-black">
                    WORDPRESS DEVELOPER (lol i know)
                  </strong>
                  <span className="font-mono text-sm sm:text-base">
                    2015 – 2019
                  </span>
                </div>
                <p className="text-sm sm:text-base text-black mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                  Freelance & Agency Work
                </p>
                <p className="text-sm sm:text-base leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                  30+ sites, 99.9% uptime, bash-fu. Managed hosting
                  infrastructure, custom theme development, and performance
                  optimization. Built automated deployment and monitoring
                  systems.
                </p>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-black border-b-4 border-black pb-3 drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                PROJECTS
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              <div className="text-base sm:text-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                  <strong className="font-black">████████████████████</strong>
                  <span className="font-mono text-sm sm:text-base">2025</span>
                </div>
                <p className="text-sm sm:text-base text-black mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                  Next.js 15, PayloadCMS, PostgreSQL, TailwindCSS, n8n,
                  Playwright
                </p>
                <p className="text-sm sm:text-base leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                  Advanced news intelligence platform with comprehensive content
                  discovery and analysis capabilities. Features automated
                  content monitoring across multiple sources, intelligent trend
                  analysis, and content gap identification. Built with modern
                  headless CMS architecture and sophisticated backend automation
                  using n8n workflows and Playwright for dynamic content
                  extraction. Provides real-time insights into emerging topics
                  and content opportunities across the entire ecosystem.
                </p>
                <div className="flex flex-wrap gap-4 mt-3">
                  <span className="text-sm font-mono text-black drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                    ████████████████████
                  </span>
                  <span className="text-sm font-mono text-black drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                    ████████████████████
                  </span>
                </div>
              </div>

              <div className="text-base sm:text-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                  <strong className="font-black">VOGELISMS</strong>
                  <span className="font-mono text-sm sm:text-base">2025</span>
                </div>
                <p className="text-sm sm:text-base text-black mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                  React, Vite, TailwindCSS, JavaScript
                </p>
                <p className="text-sm sm:text-base leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                  A random quote generator featuring Scott Vogel's iconic stage
                  banter. Features keyboard shortcuts, permalink system, and
                  mobile-friendly design. Clean, minimalist interface showcasing
                  memorable quotes from Terror vocalist Scott Vogel.
                </p>
                <div className="flex flex-wrap gap-4 mt-3">
                  <a
                    href="http://vogelisms.com/"
                    target="_blank"
                    className="text-sm font-mono text-black hover:underline drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]"
                  >
                    vogelisms.com
                  </a>
                  <a
                    href="https://github.com/andrewhayter/vogelisms.com"
                    target="_blank"
                    className="text-sm font-mono text-black hover:underline drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]"
                  >
                    github.com/andrewhayter/vogelisms.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-black border-b-4 border-black pb-3 drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                SKILLS
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              <div className="text-base sm:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                <strong className="font-black">ARCHITECTURAL MASTERY:</strong>{" "}
                React, NextJS (v15), Node, Typescript, TailwindCSS, PayloadCMS
              </div>
              <div className="text-base sm:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                <strong className="font-black">BACKEND CRAFT:</strong> Express,
                REST APIs, Rust, Linux, scalable MySQL/Postgres/MongoDB
              </div>
              <div className="text-base sm:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                <strong className="font-black">CLOUD/DEVOPS:</strong> AWS, GCP,
                OpenShift, Docker, CI/CD, IaC, technical SEO, real-world
                performance tuning
              </div>
              <div className="text-base sm:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                <strong className="font-black">
                  SECURITY-FIRST ENGINEERING:
                </strong>{" "}
                Wireless pentesting, SIEM, authentication, incident response,
                ethical hacking
              </div>
              <div className="text-base sm:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                <strong className="font-black">PRODUCT/PROCESS:</strong> Agile
                leadership, PRD creation, automated test pipelines,
                cross-functional collaboration
              </div>
              <div className="text-base sm:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                <strong className="font-black">GROWTH MINDSET:</strong>{" "}
                Systematic self-upskilling, deep research habits, project-driven
                learning, rapid prototyping
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-black border-b-4 border-black pb-3 drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                CERTIFICATIONS
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              <div className="text-base sm:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                <strong className="font-black">
                  GOOGLE CYBERSECURITY CERTIFICATE:
                </strong>
                <div className="mt-2">
                  <div className="font-mono">COMPLETED OCTOBER 2024</div>
                  <div className="font-mono">Google</div>
                </div>
              </div>
              <div className="text-base sm:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                <strong className="font-black">
                  COMPTIA SECURITY+ (IN PROGRESS):
                </strong>
                <div className="mt-2">
                  <div className="font-mono">
                    SEPT 2025 (EXPECTED COMPLETION)
                  </div>
                  <div className="font-mono">CompTIA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
