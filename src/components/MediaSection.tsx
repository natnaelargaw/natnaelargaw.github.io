import { motion } from "framer-motion";
import { Youtube, ExternalLink } from "lucide-react";

const mediaItems = [
  {
    title: "Lecture Hub Channel",
    description: "My YouTube channel featuring lectures on AI, Computer Science, and Software Engineering.",
    embedId: null,
    channelUrl: "https://www.youtube.com/@NatnaelArgaw",
    type: "channel" as const,
  },
  {
    title: "Guest on Mereb Podcast",
    description: "In-depth conversation about AI, FinTech, and the future of technology in Ethiopia.",
    embedId: "ABDAS4MLAow",
    type: "video" as const,
  },
  {
    title: "National TV — Financial Services in Ethiopia",
    description: "Discussing the landscape of financial services and technology-driven inclusion in Ethiopia.",
    embedId: "ON7koYcRvwA",
    embedStart: 125,
    type: "video" as const,
  },
];

const MediaSection = () => {
  return (
    <section id="media" className="py-24 bg-secondary/50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-widest uppercase">Media</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Media Presence</h2>
          <p className="text-muted-foreground mt-3">Lectures, interviews, and public appearances.</p>
        </motion.div>

        {/* Channel highlight */}
        <motion.a
          href="https://www.youtube.com/@NatnaelArgaw"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 p-6 mb-10 bg-card rounded-xl border border-border hover:border-accent/30 transition-colors group"
        >
          <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
            <Youtube className="w-6 h-6 text-destructive" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-foreground font-semibold group-hover:text-accent transition-colors">Lecture Hub — @NatnaelArgaw</h3>
            <p className="text-muted-foreground text-sm">My YouTube channel featuring lectures on AI, Computer Science, and Software Engineering.</p>
          </div>
          <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
        </motion.a>

        {/* Video embeds */}
        <div className="grid md:grid-cols-2 gap-6">
          {mediaItems
            .filter((item) => item.type === "video")
            .map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-xl border border-border overflow-hidden"
              >
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${item.embedId}${item.embedStart ? `?start=${item.embedStart}` : ""}`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-foreground font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
