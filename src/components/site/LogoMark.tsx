import { motion, type MotionProps } from "framer-motion";
import logoSrc from "@/assets/platon-logo-vector.svg";

interface LogoMarkProps extends Omit<MotionProps, "children"> {
  className?: string;
  animated?: boolean;
  title?: string;
}

const LogoMark = ({ className, animated = false, title = "Platon Code", ...rest }: LogoMarkProps) => {
  const ease = [0.22, 1, 0.36, 1] as const;
  return (
    <motion.img
      src={logoSrc}
      alt={title}
      draggable={false}
      className={className}
      style={{ objectFit: "contain" }}
      initial={animated ? { opacity: 0, scale: 0.85, filter: "blur(6px)" } : false}
      animate={animated ? { opacity: 1, scale: 1, filter: "blur(0px)" } : undefined}
      transition={{ duration: 1.0, ease }}
      {...rest}
    />
  );
};

export default LogoMark;
