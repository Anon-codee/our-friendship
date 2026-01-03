import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cake from "@/components/Cake";
import Balloons from "@/components/Balloons";
import ConfettiEffect from "@/components/ConfettiEffect";
import PasswordGate from "@/components/PasswordGate";
import MemoriesPage from "./MemoriesPage";

type Stage =
  | "blank"
  | "hello"
  | "birthday"
  | "celebration"
  | "waiting"
  | "thatsit"
  | "jk"
  | "password"
  | "memories";

const Index = () => {
  const [stage, setStage] = useState<Stage>("blank");
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const timings: { stage: Stage; delay: number }[] = [
      { stage: "hello", delay: 1000 },
      { stage: "birthday", delay: 3000 },
      { stage: "celebration", delay: 5500 },
      { stage: "waiting", delay: 6500 },
      { stage: "thatsit", delay: 16500 }, // After 10 seconds of celebration
      { stage: "jk", delay: 19000 },
      { stage: "password", delay: 22000 },
    ];

    const timeouts = timings.map(({ stage, delay }) =>
      setTimeout(() => {
        setStage(stage);
        if (stage === "celebration") {
          setShowConfetti(true);
        }
      }, delay)
    );

    return () => timeouts.forEach(clearTimeout);
  }, []);

  const handlePasswordSuccess = () => {
    setStage("memories");
  };

  // Show memories page
  if (stage === "memories") {
    return <MemoriesPage />;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 overflow-hidden">
      <ConfettiEffect trigger={showConfetti} />

      <AnimatePresence mode="wait">
        {/* Hello text */}
        {(stage === "hello" || stage === "birthday") && (
          <motion.div
            key="hello"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-headline text-2xl md:text-3xl text-foreground/80 mb-4"
            >
              Hello...
            </motion.p>

            {stage === "birthday" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="font-body text-xl md:text-2xl text-foreground/70 mb-6">
                  It's January 3rd, so...
                </p>
                <motion.h1
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
                  className="font-playful text-5xl md:text-7xl lg:text-8xl text-foreground"
                >
                  Happy Birthday! 🎉
                </motion.h1>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Celebration stage */}
        {(stage === "celebration" || stage === "waiting") && (
          <motion.div
            key="celebration"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center relative"
          >
            <Balloons />

            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="font-playful text-5xl md:text-7xl lg:text-8xl text-foreground mb-12"
            >
              Happy Birthday! 🎉
            </motion.h1>

            <Cake />
          </motion.div>
        )}

        {/* That's it stage */}
        {stage === "thatsit" && (
          <motion.div
            key="thatsit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl"
          >
            <p className="font-headline text-2xl md:text-4xl text-foreground leading-relaxed">
              What are you still here for?
              <br />
              <span className="text-muted-foreground">That's it...</span>
            </p>
          </motion.div>
        )}

        {/* JK stage */}
        {stage === "jk" && (
          <motion.div
            key="jk"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl"
          >
            <motion.p
              className="font-headline text-3xl md:text-5xl text-foreground"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 0.5, repeat: 2 }}
            >
              WAIT!
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-body text-xl md:text-2xl text-foreground/80 mt-4"
            >
              I'm just kidding 😄
            </motion.p>
          </motion.div>
        )}

        {/* Password stage */}
        {stage === "password" && (
          <motion.div
            key="password"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-lg px-4"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-body text-center text-lg md:text-xl text-foreground/80 mb-8"
            >
              There's more... but first, prove it's really you! 🔐
            </motion.p>

            <PasswordGate
              onSuccess={handlePasswordSuccess}
              correctPassword="Taljai"
              hint="We went up high, greenery in view — we acted normal but it was weird too. We came back laughing, all soaked and wet — name that place, don't you forget 🌧️🌿"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle background decoration */}
      {stage !== "password" && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
      )}
    </div>
  );
};

export default Index;
