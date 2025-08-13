import { ChevronDown, Mail, Linkedin, Github } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      // Local HSL token for gold accents (keeps design-token friendly usage)
      style={{ ["--gold" as any]: "46 92% 55%" }}
      className="relative min-h-[100svh] overflow-hidden bg-background text-foreground"
      aria-label="Hero section"
    >
      {/* Subtle grid and vignettes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
      >
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0,hsl(var(--foreground)/0.08)_1px,transparent_1px),linear-gradient(to_bottom,transparent_0,hsl(var(--foreground)/0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* Golden glow orbs */}
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,hsl(var(--gold)/0.35),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_70%_70%,hsl(var(--gold)/0.25),transparent_55%)] blur-2xl" />

        {/* Corner stroke accents */}
        <div className="absolute inset-0">
          <span className="absolute top-6 left-6 h-14 w-14 border-l border-t border-[hsl(var(--gold))]/60 rounded-tl-md" />
          <span className="absolute bottom-6 right-6 h-14 w-14 border-b border-r border-[hsl(var(--gold))]/60 rounded-br-md" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Framed content card with soft golden ring */}
          <div className="relative rounded-2xl border border-[hsl(var(--gold))/0.2] bg-background/50 backdrop-blur-sm px-6 py-10 md:px-10 md:py-14">
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-[hsl(var(--gold))/0.25] [box-shadow:0_0_0_1px_hsl(var(--gold)/0.12)_inset,0_18px_60px_-20px_hsl(var(--gold)/0.35)]" />

            <h1 className="bg-gradient-to-r from-foreground via-foreground to-[hsl(var(--gold))] bg-clip-text text-transparent text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
              Emmanuel Kiprono Ngetich
            </h1>

            <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-muted-foreground">
              Electrical & Telecommunications Engineer
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground/90">
              Passionate about innovative solutions in electrical systems, telecommunications,
              and emerging technologies. Specializing in IoT, renewable energy, and smart systems.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {/* Primary (gold fill + shimmer) */}
              <button
                onClick={() => scrollToSection("projects")}
                className="group relative inline-flex items-center justify-center rounded-full px-8 py-3 font-semibold text-[hsl(var(--background))] transition-transform duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--gold))]/60 ring-offset-2 ring-offset-background
                           bg-[linear-gradient(135deg,hsl(var(--gold))_0%,hsl(var(--gold)/0.88)_100%)] shadow-[0_12px_40px_hsl(var(--gold)/0.35)]"
                aria-label="View my work"
              >
                <span className="relative z-[1]">View My Work</span>
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent, hsl(var(--background)/0.15), transparent)] transition-transform duration-700 ease-out group-hover:translate-x-full" />
                <span className="pointer-events-none absolute inset-0 rounded-full border border-white/10" />
              </button>

              {/* Secondary (gold outline + glow on hover) */}
              <button
                onClick={() => scrollToSection("contact")}
                className="group relative inline-flex items-center justify-center rounded-full px-8 py-3 font-semibold text-[hsl(var(--gold))] transition-all duration-300
                           border border-[hsl(var(--gold)/0.65)] hover:border-[hsl(var(--gold))] hover:shadow-[0_10px_40px_hsl(var(--gold)/0.28)]"
                aria-label="Get in touch"
              >
                <span className="relative z-[1]">Get In Touch</span>
                <span className="pointer-events-none absolute inset-0 rounded-full [box-shadow:inset_0_0_0_1px_hsl(var(--gold)/0.2)] group-hover:[box-shadow:inset_0_0_0_2px_hsl(var(--gold))]" />
              </button>
            </div>

            {/* Social icons */}
            <div className="mt-8 flex justify-center gap-5">
              <a
                href="#"
                title="Email Me"
                className="rounded-full border border-white/10 p-3 text-muted-foreground transition-all duration-300 hover:scale-110 hover:rotate-3 hover:text-[hsl(var(--gold))] hover:border-[hsl(var(--gold))/70] hover:shadow-[0_0_0_4px_hsl(var(--gold)/0.12)_inset]"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
              <a
                href="#"
                title="LinkedIn Profile"
                className="rounded-full border border-white/10 p-3 text-muted-foreground transition-all duration-300 hover:scale-110 hover:-rotate-3 hover:text-[hsl(var(--gold))] hover:border-[hsl(var(--gold))/70] hover:shadow-[0_0_0_4px_hsl(var(--gold)/0.12)_inset]"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="#"
                title="GitHub Profile"
                className="rounded-full border border-white/10 p-3 text-muted-foreground transition-all duration-300 hover:scale-110 hover:rotate-1 hover:text-[hsl(var(--gold))] hover:border-[hsl(var(--gold))/70] hover:shadow-[0_0_0_4px_hsl(var(--gold)/0.12)_inset]"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <button
          onClick={() => scrollToSection("about")}
          className="group inline-flex items-center justify-center rounded-full p-2 text-muted-foreground transition-colors duration-300 hover:text-[hsl(var(--gold))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--gold))]/60"
          title="Scroll to About Section"
          aria-label="Scroll to About Section"
        >
          <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-background/60 backdrop-blur-md">
            <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-[hsl(var(--gold))/0.25]" />
            <ChevronDown size={26} className="animate-bounce" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
