import { motion } from "framer-motion";

interface NewspaperHeaderProps {
  date: string;
  edition?: string;
}

const NewspaperHeader = ({ date, edition = "Special Birthday Edition" }: NewspaperHeaderProps) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center py-8 border-b-4 border-double border-foreground/30 mb-8"
    >
      {/* Top decorative line */}
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="h-px w-16 bg-foreground/30" />
        <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {edition}
        </span>
        <div className="h-px w-16 bg-foreground/30" />
      </div>

      {/* Masthead */}
      <h1 className="font-masthead text-5xl md:text-7xl lg:text-8xl text-foreground mb-4 text-shadow-vintage">
        The Birthday Post
      </h1>

      {/* Subheader info */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 font-body text-sm text-muted-foreground">
        <span>{date}</span>
        <span className="hidden md:inline">•</span>
        <span>Vol. 1, No. 1</span>
        <span className="hidden md:inline">•</span>
        <span>Price: Priceless ♥</span>
      </div>

      {/* Decorative divider */}
      <div className="mt-6 flex items-center justify-center">
        <div className="h-px w-12 bg-foreground/20" />
        <div className="mx-3 w-2 h-2 rotate-45 bg-foreground/30" />
        <div className="h-px w-12 bg-foreground/20" />
      </div>
    </motion.header>
  );
};

export default NewspaperHeader;
