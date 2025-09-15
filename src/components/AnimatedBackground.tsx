import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Blue to Orange gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, #1e3a8a 0%, #3b82f6 25%, #60a5fa 50%, #fb923c 75%, #ea580c 100%)",
            "linear-gradient(45deg, #1e40af 0%, #2563eb 25%, #3b82f6 50%, #f97316 75%, #dc2626 100%)",
            "linear-gradient(45deg, #1d4ed8 0%, #2563eb 25%, #60a5fa 50%, #fb923c 75%, #ea580c 100%)",
            "linear-gradient(45deg, #1e3a8a 0%, #3b82f6 25%, #60a5fa 50%, #fb923c 75%, #ea580c 100%)",
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Rotating and jumping balls */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`ball-${i}`}
          className="absolute rounded-full"
          style={{
            width: 40 + Math.random() * 60,
            height: 40 + Math.random() * 60,
            background: `radial-gradient(circle, ${i % 2 === 0 ? '#3b82f6' : '#fb923c'} 0%, ${i % 2 === 0 ? '#1e40af' : '#ea580c'} 100%)`,
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            boxShadow: `0 0 20px ${i % 2 === 0 ? 'rgba(59, 130, 246, 0.4)' : 'rgba(251, 146, 60, 0.4)'}`,
          }}
          animate={{
            rotate: [0, 360],
            y: [0, -50, 0, -30, 0],
            x: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 1, 1.1, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Moving vehicles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`vehicle-${i}`}
          className="absolute"
          style={{
            top: `${20 + i * 20}%`,
            left: '-100px',
          }}
          animate={{
            x: [0, window.innerWidth + 200],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2,
          }}
        >
          <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
            {/* Car body */}
            <rect x="10" y="15" width="50" height="15" rx="5" fill={i % 2 === 0 ? "#3b82f6" : "#fb923c"} opacity="0.8"/>
            <rect x="20" y="10" width="30" height="10" rx="3" fill={i % 2 === 0 ? "#1e40af" : "#ea580c"} opacity="0.8"/>
            {/* Wheels */}
            <circle cx="20" cy="32" r="6" fill="#374151" opacity="0.9"/>
            <circle cx="50" cy="32" r="6" fill="#374151" opacity="0.9"/>
            <circle cx="20" cy="32" r="3" fill="#6b7280" opacity="0.9"/>
            <circle cx="50" cy="32" r="3" fill="#6b7280" opacity="0.9"/>
          </svg>
        </motion.div>
      ))}

      {/* Animated visualization charts */}
      <motion.div
        className="absolute top-10 right-10 opacity-30"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="120" height="80" viewBox="0 0 120 80">
          {/* Bar chart */}
          {[20, 35, 45, 25, 40, 30].map((height, i) => (
            <motion.rect
              key={i}
              x={i * 18 + 5}
              y={80 - height}
              width="15"
              height={height}
              fill={`hsl(${220 + i * 30}, 70%, 60%)`}
              animate={{
                height: [height, height + 10, height],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Animated pie chart */}
      <motion.div
        className="absolute bottom-10 left-10 opacity-30"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="8" strokeDasharray="60 190" opacity="0.8"/>
          <circle cx="50" cy="50" r="30" fill="none" stroke="#fb923c" strokeWidth="6" strokeDasharray="40 150" opacity="0.8" transform="rotate(90 50 50)"/>
          <circle cx="50" cy="50" r="20" fill="none" stroke="#10b981" strokeWidth="4" strokeDasharray="30 100" opacity="0.8" transform="rotate(180 50 50)"/>
        </svg>
      </motion.div>

      {/* Line chart animation */}
      <motion.div
        className="absolute top-1/2 left-1/4 opacity-25"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="200" height="100" viewBox="0 0 200 100">
          <motion.path
            d="M10,80 Q50,20 90,40 T170,30"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            opacity="0.7"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.path
            d="M10,90 Q50,30 90,50 T170,40"
            fill="none"
            stroke="#fb923c"
            strokeWidth="3"
            opacity="0.7"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.5,
            }}
          />
        </svg>
      </motion.div>

      {/* Floating data points */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`data-point-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#fb923c' : '#10b981',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Animated grid overlay */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 146, 60, 0.3) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px", "0px 0px"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;