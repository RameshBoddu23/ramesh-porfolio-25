import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Professional lighter gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #cbd5e1 50%, #e0e7ff 75%, #f1f5f9 100%)",
            "linear-gradient(135deg, #f1f5f9 0%, #e0e7ff 25%, #ddd6fe 50%, #e2e8f0 75%, #f8fafc 100%)",
            "linear-gradient(135deg, #f8fafc 0%, #dbeafe 25%, #bfdbfe 50%, #e0e7ff 75%, #f1f5f9 100%)",
            "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #cbd5e1 50%, #e0e7ff 75%, #f1f5f9 100%)",
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Subtle floating circles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`ball-${i}`}
          className="absolute rounded-full"
          style={{
            width: 30 + Math.random() * 40,
            height: 30 + Math.random() * 40,
            background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(59, 130, 246, 0.15)' : 'rgba(139, 92, 246, 0.15)'} 0%, ${i % 2 === 0 ? 'rgba(30, 64, 175, 0.1)' : 'rgba(109, 40, 217, 0.1)'} 100%)`,
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            boxShadow: `0 0 15px ${i % 2 === 0 ? 'rgba(59, 130, 246, 0.1)' : 'rgba(139, 92, 246, 0.1)'}`,
            backdropFilter: 'blur(1px)',
          }}
          animate={{
            rotate: [0, 360],
            y: [0, -30, 0, -20, 0],
            x: [0, Math.random() * 50 - 25, 0],
            scale: [1, 1.1, 1, 1.05, 1],
          }}
          transition={{
            duration: 6 + Math.random() * 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 4,
          }}
        />
      ))}

      {/* Gentle moving elements */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`element-${i}`}
          className="absolute"
          style={{
            top: `${25 + i * 25}%`,
            left: '-80px',
          }}
          animate={{
            x: [0, window.innerWidth + 160],
          }}
          transition={{
            duration: 12 + Math.random() * 6,
            repeat: Infinity,
            ease: "linear",
            delay: i * 4,
          }}
        >
          <div 
            className="w-12 h-6 rounded-full opacity-20"
            style={{
              background: `linear-gradient(90deg, ${i % 2 === 0 ? 'rgba(59, 130, 246, 0.3)' : 'rgba(139, 92, 246, 0.3)'} 0%, transparent 100%)`
            }}
          />
        </motion.div>
      ))}

      {/* Professional chart visualization */}
      <motion.div
        className="absolute top-10 right-10 opacity-15"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="100" height="60" viewBox="0 0 100 60">
          {[15, 25, 35, 20, 30, 25].map((height, i) => (
            <motion.rect
              key={i}
              x={i * 15 + 5}
              y={60 - height}
              width="12"
              height={height}
              fill={`rgba(59, 130, 246, ${0.2 + i * 0.05})`}
              animate={{
                height: [height, height + 5, height],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Subtle grid overlay */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "60px 60px", "0px 0px"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Gentle floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: i % 2 === 0 ? 'rgba(59, 130, 246, 0.4)' : 'rgba(139, 92, 246, 0.4)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -80, 0],
            opacity: [0, 0.6, 0],
            scale: [0, 1.2, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 6,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;