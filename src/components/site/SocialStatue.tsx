import React from 'react';
import { motion } from 'framer-motion';

const ICONS = {
  facebook: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/facebook.svg',
  instagram: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/instagram.svg',
  tiktok: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/tiktok.svg',
  google: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google.svg',
  youtube: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/youtube.svg',
  whatsapp: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/whatsapp.svg',
  gmail: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/gmail.svg',
};

export function SocialStatue() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 1 }}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
    >
      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:block w-full h-full">
        {/* SVG Dotted Lines */}
        <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
          <g stroke="#2563eb" strokeWidth="0.2" strokeDasharray="0 1.2" fill="none" strokeLinecap="round">
            <path d="M 80 60 Q 75 40 70 20" />
            <path d="M 80 60 Q 82 35 85 15" />
            <path d="M 80 60 Q 90 45 95 35" />
            <path d="M 80 60 Q 75 50 70 40" />
            <path d="M 80 60 Q 70 60 60 60" />
            <path d="M 80 60 Q 88 65 92 70" />
            <path d="M 80 60 Q 78 75 75 85" />
          </g>
        </svg>

        {/* Icons */}
        <IconBadge src={ICONS.instagram} top="20%" right="30%" delay={0.2} />
        <IconBadge src={ICONS.facebook} top="15%" right="15%" delay={0.4} />
        <IconBadge src={ICONS.tiktok} top="35%" right="5%" delay={0.6} />
        <IconBadge src={ICONS.google} top="40%" right="30%" delay={0.8} />
        <IconBadge src={ICONS.youtube} top="60%" right="40%" delay={1.0} />
        <IconBadge src={ICONS.whatsapp} top="70%" right="8%" delay={1.2} />
        <IconBadge src={ICONS.gmail} top="85%" right="25%" delay={1.4} />

        {/* Price Bubble */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5, type: "spring" }}
          className="absolute bg-white/95 backdrop-blur-md border border-brand/20 shadow-2xl rounded-2xl p-4 text-center min-w-[280px]"
          style={{ top: '20%', right: '45%' }}
        >
           <h3 className="text-sm font-semibold text-ink/70 uppercase tracking-widest mb-1">Todo en un solo lugar</h3>
           <p className="font-display text-2xl font-bold text-brand leading-none">
             Tu sitio web por <br/>$3,600 mxn
           </p>
        </motion.div>
      </div>

      {/* MOBILE LAYOUT */}
      <div className="block lg:hidden w-full h-full">
        {/* SVG Dotted Lines Mobile */}
        <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
          <g stroke="#2563eb" strokeWidth="0.4" strokeDasharray="0 1.5" fill="none" strokeLinecap="round">
            <path d="M 50 75 Q 35 60 20 45" />
            <path d="M 50 75 Q 45 55 40 35" />
            <path d="M 50 75 Q 55 55 60 35" />
            <path d="M 50 75 Q 65 60 80 45" />
            <path d="M 50 75 Q 30 65 15 60" />
            <path d="M 50 75 Q 70 65 85 60" />
            <path d="M 50 75 Q 50 65 50 55" />
          </g>
        </svg>

        {/* Icons */}
        <IconBadgeMobile src={ICONS.instagram} top="45%" left="20%" delay={0.2} />
        <IconBadgeMobile src={ICONS.facebook} top="35%" left="40%" delay={0.4} />
        <IconBadgeMobile src={ICONS.tiktok} top="35%" left="60%" delay={0.6} />
        <IconBadgeMobile src={ICONS.google} top="45%" left="80%" delay={0.8} />
        <IconBadgeMobile src={ICONS.youtube} top="60%" left="15%" delay={1.0} />
        <IconBadgeMobile src={ICONS.whatsapp} top="60%" left="85%" delay={1.2} />
        <IconBadgeMobile src={ICONS.gmail} top="55%" left="50%" delay={1.4} />

        {/* Price Bubble Mobile */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: "-50%" }}
          animate={{ opacity: 1, scale: 1, x: "-50%" }}
          transition={{ duration: 0.8, delay: 1.5, type: "spring" }}
          className="absolute bg-white/95 backdrop-blur-md border border-brand/20 shadow-2xl rounded-2xl p-4 text-center w-[85%] max-w-[320px]"
          style={{ top: '15%', left: '50%' }}
        >
           <h3 className="text-sm font-semibold text-ink/70 uppercase tracking-widest mb-1">Todo en un solo lugar</h3>
           <p className="font-display text-2xl font-bold text-brand leading-none">
             Tu sitio web por <br/>$3,600 mxn
           </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

function IconBadge({ src, top, right, delay }: { src: string, top: string, right: string, delay: number }) {
  return (
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15, delay: 1 + delay }}
      className="absolute w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-xl border border-ink/5 flex items-center justify-center p-3 -translate-y-1/2 translate-x-1/2 hover:scale-110 transition-transform duration-300"
      style={{ top, right }}
    >
      <img src={src} className="w-full h-full object-contain" alt="Icon" />
    </motion.div>
  );
}

function IconBadgeMobile({ src, top, left, delay }: { src: string, top: string, left: string, delay: number }) {
  return (
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15, delay: 1 + delay }}
      className="absolute w-12 h-12 bg-white rounded-full shadow-xl border border-ink/5 flex items-center justify-center p-3 -translate-y-1/2 -translate-x-1/2"
      style={{ top, left }}
    >
      <img src={src} className="w-full h-full object-contain" alt="Icon" />
    </motion.div>
  );
}
