import AnimatedGradient from "@/components/fancy/background/animated-gradient-with-svg";
import PixelTrail from "@/components/fancy/background/pixel-trail";

export default function Home() {
  // Lava lamp gradient colors - vibrant, flowing colors that create a smooth, organic effect
  const gradientColors = [
    "#ff6b6b", // coral red
    "#4ecdc4", // turquoise
    "#45b7d1", // sky blue
    "#96ceb4", // mint green
    "#feca57", // golden yellow
    "#ff9ff3", // pink
    "#54a0ff", // electric blue
    "#5f27cd", // purple
  ];

  // Pixel trail colors that match the lava lamp gradient exactly
  const pixelColors = [
    "#ff6b6b", // coral red
    "#4ecdc4", // turquoise
    "#45b7d1", // sky blue
    "#96ceb4", // mint green
    "#feca57", // golden yellow
    "#ff9ff3", // pink
    "#54a0ff", // electric blue
    "#5f27cd", // purple
  ];

  return (
    <div className="min-h-screen bg-[#1a1a2e] text-white relative overflow-hidden">
      {/* Static background color to prevent flash */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] z-0" />

      {/* Animated gradient background */}
      <div className="fixed inset-0 z-10">
        <AnimatedGradient colors={gradientColors} speed={40} blur="heavy" />
      </div>

      {/* Pixel trail with gradient-matching colors */}
      <PixelTrail
        pixelSize={12}
        fadeDuration={1500}
        delay={60}
        className="fixed inset-0 z-20"
        pixelClassName="opacity-40"
        colors={pixelColors}
      />

      {/* Subtle overlay to ensure text readability */}
      <div className="fixed inset-0 bg-black/20 z-30" />

      {/* Main content container */}
      <div className="relative z-40 min-h-screen">
        <div className="p-6 sm:p-8 lg:p-12">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="min-h-screen flex flex-col justify-center mb-12 sm:mb-16">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-2 sm:mb-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                  ANDREW HAYTER
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
                  FULLSTACK ENGINEER
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-base sm:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    <strong className="font-black">EMAIL:</strong>{" "}
                    <a
                      href="mailto:andrewhayter@gmail.com"
                      className="text-white hover:underline"
                    >
                      andrewhayter@gmail.com
                    </a>
                  </p>
                  <p className="text-base sm:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    <strong className="font-black">GITHUB:</strong>{" "}
                    <a
                      href="https://github.com/andrewhayter"
                      target="_blank"
                      className="text-white hover:underline"
                    >
                      github.com/andrewhayter
                    </a>
                  </p>
                  <p className="text-base sm:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    <strong className="font-black">LINKEDIN:</strong>{" "}
                    <a
                      href="https://www.linkedin.com/in/hello-andrew-hayter/"
                      target="_blank"
                      className="text-white hover:underline"
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
                <h2 className="text-lg sm:text-xl lg:text-2xl font-black border-b-4 border-white pb-3 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  PROFESSIONAL SUMMARY
                </h2>
              </div>
              <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  I build stuff and break stuff. Independent Fullstack Developer
                  specializing in secure, scalable web applications. 9+ years in
                  JavaScript/TypeScript ecosystems, recently expanded further
                  into cybersecurity and blockchain development. Love building
                  apps, bringing ideas to life, and making data-driven
                  decisions.
                </p>
              </div>
            </div>

            {/* Work Experience */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              <div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-black border-b-4 border-white pb-3 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  WORK EXPERIENCE
                </h2>
              </div>
              <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                <div className="text-base sm:text-lg">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    <strong className="font-black">
                      CONSULTANT / SECURITY SPECIALIST (doin what i do best)
                    </strong>
                    <span className="font-mono text-sm sm:text-base">
                      2021 – PRESENT
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-white mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    Independent Consulting
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    AI audits, pentest rigs, Next.js 15 wizardry. Specializing
                    in security-first development and modern web architecture.
                    Building scalable solutions with a focus on cybersecurity
                    integration.
                  </p>
                </div>

                <div className="text-base sm:text-lg">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    <strong className="font-black">
                      PLATFORM DEVELOPER – IOT STARTUP (v huge v fun)
                    </strong>
                    <span className="font-mono text-sm sm:text-base">
                      2018 – 2021
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-white mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    IoT Technology Company
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    Cloud-native event streams on GCP. Built scalable backend
                    systems and real-time data processing pipelines for IoT
                    devices. Implemented CI/CD and infrastructure as code.
                  </p>
                </div>

                <div className="text-base sm:text-lg">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    <strong className="font-black">
                      WORDPRESS DEVELOPER (lol i know)
                    </strong>
                    <span className="font-mono text-sm sm:text-base">
                      2015 – 2019
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-white mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    Freelance & Agency Work
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
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
                <h2 className="text-lg sm:text-xl lg:text-2xl font-black border-b-4 border-white pb-3 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  PROJECTS
                </h2>
              </div>
              <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                <div className="text-base sm:text-lg">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    <strong className="font-black">████████████████████</strong>
                    <span className="font-mono text-sm sm:text-base">2025</span>
                  </div>
                  <p className="text-sm sm:text-base text-white mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    Next.js 15, PayloadCMS, PostgreSQL, TailwindCSS, n8n,
                    Playwright
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    Advanced news intelligence platform with comprehensive
                    content discovery and analysis capabilities. Features
                    automated content monitoring across multiple sources,
                    intelligent trend analysis, and content gap identification.
                    Built with modern headless CMS architecture and
                    sophisticated backend automation using n8n workflows and
                    Playwright for dynamic content extraction. Provides
                    real-time insights into emerging topics and content
                    opportunities across the entire ecosystem.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-3">
                    <span className="text-sm font-mono text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                      ████████████████████
                    </span>
                    <span className="text-sm font-mono text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                      ████████████████████
                    </span>
                  </div>
                </div>

                <div className="text-base sm:text-lg">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    <strong className="font-black">VOGELISMS</strong>
                    <span className="font-mono text-sm sm:text-base">2025</span>
                  </div>
                  <p className="text-sm sm:text-base text-white mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    React, Vite, TailwindCSS, JavaScript
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    A random quote generator featuring Scott Vogel's iconic
                    stage banter. Features keyboard shortcuts, permalink system,
                    and mobile-friendly design. Clean, minimalist interface
                    showcasing memorable quotes from Terror vocalist Scott
                    Vogel.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-3">
                    <a
                      href="http://vogelisms.com/"
                      target="_blank"
                      className="text-sm font-mono text-white hover:underline drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
                    >
                      vogelisms.com
                    </a>
                    <a
                      href="https://github.com/andrewhayter/vogelisms.com"
                      target="_blank"
                      className="text-sm font-mono text-white hover:underline drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
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
                <h2 className="text-lg sm:text-xl lg:text-2xl font-black border-b-4 border-white pb-3 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  SKILLS
                </h2>
              </div>
              <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                <div className="text-base sm:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  <strong className="font-black">ARCHITECTURAL MASTERY:</strong>{" "}
                  React, NextJS (v15), Node, Typescript, TailwindCSS, PayloadCMS
                </div>
                <div className="text-base sm:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  <strong className="font-black">BACKEND CRAFT:</strong>{" "}
                  Express, REST APIs, Rust, Linux, scalable
                  MySQL/Postgres/MongoDB
                </div>
                <div className="text-base sm:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  <strong className="font-black">CLOUD/DEVOPS:</strong> AWS,
                  GCP, OpenShift, Docker, CI/CD, IaC, technical SEO, real-world
                  performance tuning
                </div>
                <div className="text-base sm:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  <strong className="font-black">
                    SECURITY-FIRST ENGINEERING:
                  </strong>{" "}
                  Wireless pentesting, SIEM, authentication, incident response,
                  ethical hacking
                </div>
                <div className="text-base sm:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  <strong className="font-black">PRODUCT/PROCESS:</strong> Agile
                  leadership, PRD creation, automated test pipelines,
                  cross-functional collaboration
                </div>
                <div className="text-base sm:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  <strong className="font-black">GROWTH MINDSET:</strong>{" "}
                  Systematic self-upskilling, deep research habits,
                  project-driven learning, rapid prototyping
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              <div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-black border-b-4 border-white pb-3 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  CERTIFICATIONS
                </h2>
              </div>
              <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                <div className="text-base sm:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  <strong className="font-black">
                    GOOGLE CYBERSECURITY CERTIFICATE:
                  </strong>
                  <div className="mt-2">
                    <div className="font-mono">COMPLETED OCTOBER 2024</div>
                    <div className="font-mono">Google</div>
                  </div>
                </div>
                <div className="text-base sm:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
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
    </div>
  );
}
