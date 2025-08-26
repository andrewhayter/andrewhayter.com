export default function Home() {
  return (
    <div className="min-h-screen bg-acid text-twilight p-6 sm:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-2 sm:mb-4">
            ANDREW HAYTER
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 text-twilight/80">
            FULLSTACK ENGINEER
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-twilight mb-4"></div>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg">
                <strong className="font-black">EMAIL:</strong>{" "}
                <a
                  href="mailto:andrewhayter@gmail.com"
                  className="text-twilight hover:underline"
                >
                  andrewhayter@gmail.com
                </a>
              </p>
              <p className="text-base sm:text-lg">
                <strong className="font-black">GITHUB:</strong>{" "}
                <a
                  href="https://github.com/andrewhayter"
                  target="_blank"
                  className="text-twilight hover:underline"
                >
                  github.com/andrewhayter
                </a>
              </p>
              <p className="text-base sm:text-lg">
                <strong className="font-black">LINKEDIN:</strong>{" "}
                <a
                  href="https://linkedin.com/in/andrewhayter"
                  target="_blank"
                  className="text-twilight hover:underline"
                >
                  linkedin.com/in/andrewhayter
                </a>
              </p>
              <p className="text-base sm:text-lg">
                <strong className="font-black">LOCATION:</strong>{" "}
                <span className="font-mono">Vancouver, BC</span>
              </p>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-black border-b-4 border-twilight pb-3">
              PROFESSIONAL SUMMARY
            </h2>
          </div>
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg leading-relaxed">
              Relentlessly curious Fullstack Developer with 9+ years of
              end-to-end product ownership in modern JavaScript/TypeScript
              systems. Adept at translating business and security requirements
              into scalable web architectures. Passionate about emerging tech,
              automation, and behavioral optimization to solve complex
              challenges.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              Integrate DevSecOps, smart cloud orchestration, and creative
              automation. Recent pivot into cybersecurity, blending engineering
              with risk management. "Learn, build, document, teach" mentality.
              Known for transforming deep research into impactful solutions.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-black border-b-4 border-twilight pb-3">
              SKILLS
            </h2>
          </div>
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <div className="text-base sm:text-lg">
              <strong className="font-black">ARCHITECTURAL MASTERY:</strong>{" "}
              React, NextJS (v15), Node, Typescript, TailwindCSS, PayloadCMS
            </div>
            <div className="text-base sm:text-lg">
              <strong className="font-black">BACKEND CRAFT:</strong> Express,
              REST APIs, Rust, Linux, scalable MySQL/Postgres/MongoDB
            </div>
            <div className="text-base sm:text-lg">
              <strong className="font-black">CLOUD/DEVOPS:</strong> AWS, GCP,
              OpenShift, Docker, CI/CD, IaC, technical SEO, real-world
              performance tuning
            </div>
            <div className="text-base sm:text-lg">
              <strong className="font-black">
                SECURITY-FIRST ENGINEERING:
              </strong>{" "}
              Wireless pentesting, SIEM, authentication, incident response,
              ethical hacking
            </div>
            <div className="text-base sm:text-lg">
              <strong className="font-black">PRODUCT/PROCESS:</strong> Agile
              leadership, PRD creation, automated test pipelines,
              cross-functional collaboration
            </div>
            <div className="text-base sm:text-lg">
              <strong className="font-black">GROWTH MINDSET:</strong> Systematic
              self-upskilling, deep research habits, project-driven learning,
              rapid prototyping
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-black border-b-4 border-twilight pb-3">
              WORK EXPERIENCE
            </h2>
          </div>
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <div className="text-base sm:text-lg">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <strong className="font-black">
                  CONSULTANT / SECURITY SPECIALIST
                </strong>
                <span className="font-mono text-sm sm:text-base">
                  2021 – PRESENT
                </span>
              </div>
              <p className="text-sm sm:text-base text-twilight/80 mb-2">
                Independent Consulting
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                AI audits, pentest rigs, Next.js 15 wizardry. Specializing in
                security-first development and modern web architecture. Building
                scalable solutions with a focus on cybersecurity integration.
              </p>
            </div>

            <div className="text-base sm:text-lg">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <strong className="font-black">
                  PLATFORM DEVELOPER – IOT STARTUP
                </strong>
                <span className="font-mono text-sm sm:text-base">
                  2018 – 2021
                </span>
              </div>
              <p className="text-sm sm:text-base text-twilight/80 mb-2">
                IoT Technology Company
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Cloud-native event streams on GCP. Built scalable backend
                systems and real-time data processing pipelines for IoT devices.
                Implemented CI/CD and infrastructure as code.
              </p>
            </div>

            <div className="text-base sm:text-lg">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <strong className="font-black">WORDPRESS DEVELOPER</strong>
                <span className="font-mono text-sm sm:text-base">
                  2015 – 2019
                </span>
              </div>
              <p className="text-sm sm:text-base text-twilight/80 mb-2">
                Freelance & Agency Work
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                30+ sites, 99.9% uptime, bash-fu. Managed hosting
                infrastructure, custom theme development, and performance
                optimization. Built automated deployment and monitoring systems.
              </p>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-black border-b-4 border-twilight pb-3">
              PROJECTS
            </h2>
          </div>
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <div className="text-base sm:text-lg">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <strong className="font-black">SECURITY AUDIT PLATFORM</strong>
                <span className="font-mono text-sm sm:text-base">2024</span>
              </div>
              <p className="text-sm sm:text-base text-twilight/80 mb-2">
                Next.js 15, TypeScript, TailwindCSS
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Built a comprehensive security assessment platform for automated
                vulnerability scanning and compliance reporting. Features
                real-time monitoring and detailed audit trails.
              </p>
            </div>

            <div className="text-base sm:text-lg">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <strong className="font-black">
                  IOT DATA ANALYTICS DASHBOARD
                </strong>
                <span className="font-mono text-sm sm:text-base">2020</span>
              </div>
              <p className="text-sm sm:text-base text-twilight/80 mb-2">
                React, Node.js, GCP, MongoDB
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Real-time dashboard for IoT sensor data visualization. Handled
                thousands of concurrent connections with sub-second latency.
                Implemented advanced filtering and alerting systems.
              </p>
            </div>

            <div className="text-base sm:text-lg">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <strong className="font-black">
                  AUTOMATED DEPLOYMENT SYSTEM
                </strong>
                <span className="font-mono text-sm sm:text-base">2019</span>
              </div>
              <p className="text-sm sm:text-base text-twilight/80 mb-2">
                Bash, Docker, CI/CD
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Zero-downtime deployment system for WordPress sites. Automated
                testing, backup creation, and rollback capabilities. Reduced
                deployment time from hours to minutes.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-black border-b-4 border-twilight pb-3">
              CERTIFICATIONS
            </h2>
          </div>
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <div className="text-base sm:text-lg">
              <strong className="font-black">
                GOOGLE CYBERSECURITY CERTIFICATE:
              </strong>
              <div className="ml-4 mt-2">
                <div className="font-mono">COMPLETED OCTOBER 2024</div>
                <div className="font-mono">Google</div>
              </div>
            </div>
            <div className="text-base sm:text-lg">
              <strong className="font-black">
                COMPTIA SECURITY+ (IN PROGRESS):
              </strong>
              <div className="ml-4 mt-2">
                <div className="font-mono">SEPT 2025 (EXPECTED COMPLETION)</div>
                <div className="font-mono">CompTIA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
