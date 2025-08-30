import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="relative text-center py-16 bg-indigo-600 text-white rounded-3xl shadow-2xl mb-10 overflow-hidden">
      {/* Floating Animated Glow Orbs */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Title */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200 drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🎬 EchoVerse AI
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Transform any text into <span className="font-semibold text-indigo-200">engaging</span>,
        personalized videos with AI narration and adaptive visuals 🚀
      </motion.p>

      {/* Call to Action */}
      <motion.div
        className="mt-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        
      </motion.div>
    </header>
  );
}
