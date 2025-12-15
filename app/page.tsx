import AnimatedGradient from "@/components/fancy/background/animated-gradient-with-svg";
import PixelTrail from "@/components/fancy/background/pixel-trail";

export default function Home() {
  // Lava lamp gradient colors - muted navy and teal theme
  const gradientColors = [
    "#0a0a1a", // very dark navy
    "#1a1a2e", // dark navy
    "#16213e", // deep navy
    "#0f3460", // blue navy
    "#1e3a8a", // darker blue
    "#0d4a6b", // dark teal
    "#0f5f6b", // deeper teal
    "#1e5f6b", // navy teal
  ];

  // Pixel trail colors - white for subtle sparkle effect
  const pixelColors = [
    "#ffffff", // white
  ];

  return (
    <div className="min-h-screen bg-[#1a1a2e] text-white relative overflow-hidden">
      {/* Static background color to prevent flash */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#0f3460] to-[#0d4a6b] z-0" />

      {/* Animated gradient background */}
      <div className="fixed inset-0 z-10">
        <AnimatedGradient colors={gradientColors} speed={40} blur="heavy" />
      </div>

      {/* Pixel trail with white sparkles */}
      <PixelTrail
        pixelSize={12}
        fadeDuration={1500}
        delay={60}
        className="fixed inset-0 z-20"
        pixelClassName="opacity-30"
        colors={pixelColors}
      />

      {/* Subtle overlay to ensure text readability */}
      <div className="fixed inset-0 bg-black/10 z-30" />

      {/* Main content container */}
      <div className="relative z-40">
        <div className="p-8 sm:p-8 lg:p-12">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="min-h-[100vh] flex flex-col justify-center mb-16 sm:mb-20">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-2 sm:mb-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] tracking-wide">
                  ANDREW HAYTER
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)] tracking-wide">
                  DEVOPS & LINUX SYSTEMS ENGINEER
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-base sm:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    <a
                      href="mailto:andrewhayter@gmail.com"
                      className="text-white hover:underline"
                    >
                      andrewhayter@gmail.com
                    </a>
                  </p>
                  <p className="text-base sm:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    <a
                      href="https://github.com/andrewhayter"
                      target="_blank"
                      className="text-white hover:underline"
                    >
                      github.com/andrewhayter
                    </a>
                  </p>
                  <p className="text-base sm:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    <a
                      href="https://www.linkedin.com/in/hello-andrew-hayter/"
                      target="_blank"
                      className="text-white hover:underline"
                    >
                      linkedin.com/in/hello-andrew-hayter
                    </a>
                  </p>
                  <p className="text-base sm:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    <a
                      href="/Andrew-Hayter-Resume.pdf"
                      target="_blank"
                      className="text-white hover:underline"
                    >
                      andrewhayter.com/Andrew-Hayter-Resume.pdf
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-8 mb-16 sm:mb-20">
              <div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-black border-b-4 border-white pb-3 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] tracking-wide">
                  PROFESSIONAL SUMMARY
                </h2>
              </div>
              <div className="lg:col-span-2 space-y-6 sm:space-y-6">
                <p className="text-base sm:text-lg leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  DevOps and Linux Systems Engineer with 9+ years deploying and
                  managing production infrastructure. I build, operate, and
                  secure self-hosted environments end-to-end, with a strong
                  fullstack background in Next.js, TypeScript, and PostgreSQL.
                  Currently running a self-hosted DeFi content platform and
                  expanding expertise in Kubernetes and infrastructure-as-code
                  (Terraform).
                </p>
              </div>
            </div>

            {/* Work Experience */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-8 mb-16 sm:mb-20">
              <div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-black border-b-4 border-white pb-3 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] tracking-wide">
                  WORK EXPERIENCE
                </h2>
              </div>
              <div className="lg:col-span-2 space-y-8 sm:space-y-8">
                <div className="text-base sm:text-lg">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    <strong className="font-black tracking-wide">
                      DevOps & Fullstack Engineer / Technical Founder
                    </strong>
                    <span className="font-mono text-base sm:text-lg">
                      2021 – PRESENT
                    </span>
                  </div>
                  <p className="text-base sm:text-lg text-white mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    Self-Employed
                  </p>
                  <ul className="text-base sm:text-lg leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] space-y-2 list-disc list-inside">
                    <li>
                      Built and operate a self-hosted production platform
                      (DeFi/crypto content) on Ubuntu VPS using Docker Compose
                      (Next.js, PayloadCMS, PostgreSQL, Nginx).
                    </li>
                    <li>
                      Provisioned and hardened the VPS from scratch: SSH keys,
                      firewall (ufw), DNS, automated backups, and monitoring
                      scripts.
                    </li>
                    <li>
                      Implemented CI/CD pipelines with GitHub Actions for
                      automated testing and zero-downtime deployments.
                    </li>
                    <li>
                      Managed PostgreSQL in production: schema design for 3,000+
                      entries, migrations, indexing, backups, and performance
                      tuning.
                    </li>
                    <li>
                      Developed the fullstack application with Next.js 15,
                      React, TypeScript, and PayloadCMS, including content
                      workflows and analytics integration.
                    </li>
                    <li>
                      Built Playwright-based scraping pipelines to bootstrap
                      seed data (platforms, chains, categories) powering the
                      site's taxonomy.
                    </li>
                  </ul>
                </div>

                <div className="text-base sm:text-lg">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    <strong className="font-black tracking-wide">
                      Fullstack Developer (Cloud & Web)
                    </strong>
                    <span className="font-mono text-base sm:text-lg">
                      2018 – 2021
                    </span>
                  </div>
                  <p className="text-base sm:text-lg text-white mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    POWER SHIFTER Digital
                  </p>
                  <ul className="text-base sm:text-lg leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] space-y-2 list-disc list-inside">
                    <li>
                      Developed serverless IoT and data-centric applications on
                      GCP using Cloud Functions, Firestore, and Pub/Sub.
                    </li>
                    <li>
                      Collaborated with senior engineers, designers, and product
                      managers to integrate React UIs with Contentful and cloud
                      backends.
                    </li>
                    <li>
                      Contributed to GitLab CI/CD pipelines for staging and
                      production deployments.
                    </li>
                    <li>
                      Built and maintained WordPress marketing sites for clients
                      where needed.
                    </li>
                  </ul>
                </div>

                <div className="text-base sm:text-lg">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    <strong className="font-black tracking-wide">
                      Fullstack Developer / Linux Web Hosting
                    </strong>
                    <span className="font-mono text-base sm:text-lg">
                      2015 – 2019
                    </span>
                  </div>
                  <p className="text-base sm:text-lg text-white mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    Major Tom
                  </p>
                  <ul className="text-base sm:text-lg leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] space-y-2 list-disc list-inside">
                    <li>
                      Deployed and maintained 30+ client websites on Linux
                      hosting (CentOS/Ubuntu), managing web servers, databases,
                      DNS, and application config.
                    </li>
                    <li>
                      Configured and tuned Apache/Nginx, PHP, and MySQL for
                      uptime, performance, and security (caching, compression,
                      SSL/TLS, access controls).
                    </li>
                    <li>
                      Performed daily sysadmin work: SSH configuration, firewall
                      rules, cron jobs, database backups, log analysis, and
                      stack troubleshooting.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-8 mb-16 sm:mb-20">
              <div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-black border-b-4 border-white pb-3 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] tracking-wide">
                  PROJECTS
                </h2>
              </div>
              <div className="lg:col-span-2 space-y-8 sm:space-y-8">
                <div className="text-base sm:text-lg">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    <strong className="font-black tracking-wide">
                      Self-Hosted DeFi Content Platform
                    </strong>
                    <span className="font-mono text-base sm:text-lg">
                      2021 – PRESENT
                    </span>
                  </div>
                  <p className="text-base sm:text-lg text-white mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    Stack: Ubuntu, Docker, Docker Compose, Nginx, PostgreSQL,
                    Next.js 15, TypeScript, PayloadCMS, GitHub Actions,
                    Playwright
                  </p>
                  <ul className="text-base sm:text-lg leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] space-y-2 list-disc list-inside">
                    <li>
                      End-to-end infrastructure and application: VPS
                      provisioning, Docker orchestration, Nginx reverse proxy,
                      CI/CD, database management, and monitoring.
                    </li>
                    <li>
                      Taxonomy-driven content platform with thousands of entries
                      across platforms, categories, and chains.
                    </li>
                  </ul>
                </div>

                <div className="text-base sm:text-lg">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    <strong className="font-black tracking-wide">
                      VOGELISMS
                    </strong>
                    <span className="font-mono text-base sm:text-lg">2025</span>
                  </div>
                  <p className="text-base sm:text-lg text-white mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    Stack: React, Vite, TailwindCSS, JavaScript
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    A silly random quote generator featuring Scott Vogel's stage
                    banter, with keyboard shortcuts, permalinks, and
                    mobile-friendly UI.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-3">
                    <a
                      href="https://vogelisms.com/"
                      target="_blank"
                      className="text-base sm:text-lg font-mono text-white hover:underline drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
                    >
                      vogelisms.com
                    </a>
                    <a
                      href="https://github.com/andrewhayter/vogelisms.com"
                      target="_blank"
                      className="text-base sm:text-lg font-mono text-white hover:underline drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
                    >
                      github.com/andrewhayter/vogelisms.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-8 mb-16 sm:mb-20">
              <div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-black border-b-4 border-white pb-3 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] tracking-wide">
                  SKILLS
                </h2>
              </div>
              <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                <div className="text-base sm:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  <strong className="font-black tracking-wide">
                    DevOps & Infrastructure
                  </strong>
                  <br />
                  Linux (Ubuntu, CentOS) · Docker · Docker Compose · Nginx ·
                  Apache · CI/CD (GitHub Actions, GitLab) · VPS provisioning ·
                  SSH/firewall hardening · Backup & recovery · PostgreSQL ·
                  MySQL
                </div>
                <div className="text-base sm:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  <strong className="font-black tracking-wide">
                    Scripting & Automation
                  </strong>
                  <br />
                  Bash · Node.js · Playwright (web scraping/automation)
                </div>
                <div className="text-base sm:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  <strong className="font-black tracking-wide">
                    Application Stack
                  </strong>
                  <br />
                  Next.js · React · TypeScript · PayloadCMS · WordPress · REST
                  APIs
                </div>
                <div className="text-base sm:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  <strong className="font-black tracking-wide">
                    Security & Reliability
                  </strong>
                  <br />
                  Security-first server configuration · SSL/TLS · basic incident
                  response and log analysis · Google Cybersecurity fundamentals
                  · CompTIA Security+ (in progress)
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-8">
              <div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-black border-b-4 border-white pb-3 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] tracking-wide">
                  CERTIFICATIONS
                </h2>
              </div>
              <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                <div className="text-base sm:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  <strong className="font-black tracking-wide">
                    Google Cybersecurity Certificate
                  </strong>
                  <div className="mt-2">
                    <div className="font-mono">Google</div>
                    <div className="font-mono">Completed October 2024</div>
                  </div>
                </div>
                <div className="text-base sm:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  <strong className="font-black tracking-wide">
                    CompTIA Security+
                  </strong>
                  <div className="mt-2">
                    <div className="font-mono">CompTIA</div>
                    <div className="font-mono">In Progress</div>
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
