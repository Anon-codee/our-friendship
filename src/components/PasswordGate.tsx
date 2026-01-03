import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, Sparkles } from "lucide-react";

interface PasswordGateProps {
  onSuccess: () => void;
  hint: string;
  correctPassword: string;
}

const PasswordGate = ({ onSuccess, hint, correctPassword }: PasswordGateProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase().trim() === correctPassword.toLowerCase().trim()) {
      onSuccess();
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="newspaper-paper rounded-lg p-8 border-2 border-foreground/20">
        <div className="text-center mb-6">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-block mb-4"
          >
            <Lock className="w-12 h-12 text-accent mx-auto" />
          </motion.div>
          <h3 className="font-headline text-2xl font-bold text-foreground mb-2">
            Secret Entry
          </h3>
          <p className="font-body text-muted-foreground">
            Prove you know the magic words ✨
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div
            animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
            transition={{ duration: 0.4 }}
          >
            <Input
              type="text"
              placeholder="Enter the password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`text-center font-body text-lg bg-background/50 border-2 transition-colors ${
                error ? "border-destructive" : "border-foreground/20 focus:border-accent"
              }`}
            />
          </motion.div>

          <Button
            type="submit"
            className="w-full font-headline text-lg bg-foreground text-background hover:bg-foreground/90"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Unlock the Memories
          </Button>
        </form>

        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setShowHint(!showHint)}
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            {showHint ? "Hide hint" : "Need a hint?"}
          </button>

          {showHint && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 font-body text-accent italic"
            >
              💡 {hint}
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PasswordGate;
