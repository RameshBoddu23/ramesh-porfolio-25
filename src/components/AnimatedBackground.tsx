const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Static professional gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/60 to-indigo-50/80 dark:from-slate-900/40 dark:via-blue-950/30 dark:to-indigo-950/40" />
    </div>
  );
};

export default AnimatedBackground;