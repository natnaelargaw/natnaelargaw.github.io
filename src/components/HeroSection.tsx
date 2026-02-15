import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-primary overflow-hidden"
    >
      {/* Subtle geometric accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 border border-primary-foreground/20 rounded-full" />
        <div className="absolute bottom-40 right-40 w-64 h-64 border border-primary-foreground/10 rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block px-3 py-1 mb-6 border border-gold/40 rounded-full">
              <span className="text-gold text-xs font-medium tracking-widest uppercase">
                AI · FinTech · Academia
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Bridging Technology
              <br />
              <span className="text-gold">&amp; Financial Inclusion</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8 max-w-lg">
              Group CTO at Kifiya Financial Technology &amp; Assistant Professor
              at Addis Ababa University. Pioneering AI-driven financial solutions
              for underserved communities.
            </p>
            <div className="flex gap-4">
              <a
                href="#about"
                className="inline-flex items-center px-6 py-3 bg-gold text-primary text-sm font-semibold rounded-lg hover:bg-gold/90 transition-colors"
              >
                Learn More
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-primary-foreground/30 text-primary-foreground text-sm font-medium rounded-lg hover:border-primary-foreground/60 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <img
                src={profilePhoto}
                alt="Professional portrait"
                className="w-full h-full object-cover object-top rounded-full"
                style={{
                  maskImage: "radial-gradient(circle, black 50%, transparent 80%)",
                  WebkitMaskImage: "radial-gradient(circle, black 50%, transparent 80%)",
                }}
              />
              {/* Subtle glow behind */}
              <div className="absolute inset-0 rounded-full bg-accent/10 blur-3xl -z-10 scale-110" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
