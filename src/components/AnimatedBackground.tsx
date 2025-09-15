import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Main animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, #e0f2fe 0%, #bbdefb 25%, #90caf9 50%, #64b5f6 75%, #42a5f5 100%)",
            "linear-gradient(45deg, #f3e5f5 0%, #e1bee7 25%, #ce93d8 50%, #ba68c8 75%, #ab47bc 100%)",
            "linear-gradient(45deg, #e0f7fa 0%, #b2ebf2 25%, #80deea 50%, #4dd0e1 75%, #26c6da 100%)",
            "linear-gradient(45deg, #e8f5e8 0%, #c8e6c9 25%, #a5d6a7 50%, #81c784 75%, #66bb6a 100%)",
            "linear-gradient(45deg, #e0f2fe 0%, #bbdefb 25%, #90caf9 50%, #64b5f6 75%, #42a5f5 100%)"
          ]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating circles with light blue gradients */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-30"
          style={{
            width: 100 + Math.random() * 200,
            height: 100 + Math.random() * 200,
            background: `radial-gradient(circle, rgba(33, 150, 243, 0.4) 0%, rgba(3, 169, 244, 0.2) 50%, transparent 100%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 300 - 150, 0],
            y: [0, Math.random() * 300 - 150, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 8 + Math.random() * 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Pulsing light blue overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 30% 40%, rgba(33, 150, 243, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 80%, rgba(3, 169, 244, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 70%, rgba(100, 181, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 30%, rgba(33, 150, 243, 0.1) 0%, transparent 50%)",
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Moving wave pattern */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, rgba(33, 150, 243, 0.1) 0px, transparent 2px, transparent 20px, rgba(33, 150, 243, 0.1) 22px)`,
        }}
        animate={{
          backgroundPosition: ["0px 0px", "40px 40px", "0px 0px"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Corner light effects */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(33, 150, 243, 0.3) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(3, 169, 244, 0.3) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;