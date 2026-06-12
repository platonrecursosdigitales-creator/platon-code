import LogoMark from "./LogoMark";

interface LogoProps {
  className?: string;
  showText?: boolean;
  animated?: boolean;
}

const Logo = ({ className = "", showText = true, animated = false }: LogoProps) => {
  const Mark = <LogoMark className="h-11 w-auto text-ink" animated={animated} />;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {Mark}
      {showText && (
        <div className="leading-tight">
          <div className="font-display font-semibold text-current text-[15px] tracking-tight">Platon Code</div>
          <div className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-60">Digital Business Suite</div>
        </div>
      )}
    </div>
  );
};

export default Logo;
