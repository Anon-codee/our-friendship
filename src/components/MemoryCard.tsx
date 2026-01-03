import { motion } from "framer-motion";

interface MemoryCardProps {
  title: string;
  date: string;
  content: string;
  index: number;
}

const MemoryCard = ({ title, date, content, index }: MemoryCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-8"
    >
      <div className="newspaper-border p-6 bg-card/50 rounded-sm">
        <header className="mb-4">
          <p className="font-body text-sm text-muted-foreground uppercase tracking-widest mb-1">
            {date}
          </p>
          <h3 className="font-headline text-2xl md:text-3xl font-bold text-foreground leading-tight">
            {title}
          </h3>
          <div className="newspaper-divider mt-3" />
        </header>

        <p className="font-body text-lg leading-relaxed text-foreground/90 first-letter:text-5xl first-letter:font-headline first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:mt-1">
          {content}
        </p>
      </div>
    </motion.article>
  );
};

export default MemoryCard;
