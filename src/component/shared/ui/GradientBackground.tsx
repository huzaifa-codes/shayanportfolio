const GradientBackground = () => (
  <div className="absolute top-0 bg-center w-full h-full pointer-events-none -z-10">
    <div
        className="absolute top-0 left-0 w-full h-full 
                   bg-gradient-to-b from-[#7264F3] to-transparent 
                   blur-[140px] opacity-30 pointer-events-none"
    />
  </div>
);

export default GradientBackground;
