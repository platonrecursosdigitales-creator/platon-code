import React from 'react';
import { motion } from 'framer-motion';
import facebookIcon from '@/assets/icons/facebook.svg';
import instagramIcon from '@/assets/icons/instagram.svg';
import tiktokIcon from '@/assets/icons/tiktok.svg';
import googleIcon from '@/assets/icons/google.svg';
import youtubeIcon from '@/assets/icons/youtube.svg';
import whatsappIcon from '@/assets/icons/whatsapp.svg';
import gmailIcon from '@/assets/icons/gmail.svg';

export function SocialStatue() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 1 }}
      className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden lg:block overflow-visible"
    >
      {/* SVG Dotted Lines */}
      <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
        <g stroke="#2563eb" strokeWidth="0.3" strokeDasharray="0 1.2" fill="none" strokeLinecap="round">
          {/* Origin: x:80, y:60 */}
          <path d="M 80 60 Q 70 40 65 20" /> {/* Instagram */}
          <path d="M 80 60 Q 82 35 85 15" /> {/* Facebook */}
          <path d="M 80 60 Q 90 50 92 40" /> {/* TikTok */}
          <path d="M 80 60 Q 70 55 65 45" /> {/* Google */}
          <path d="M 80 60 Q 70 62 60 65" /> {/* YouTube */}
          <path d="M 80 60 Q 88 65 92 70" /> {/* WhatsApp */}
          <path d="M 80 60 Q 78 75 75 85" /> {/* Gmail */}
        </g>
      </svg>

      {/* Icons at path ends */}
      <IconBadge src={instagramIcon} top="20%" right="35%" delay={0.2} />
      <IconBadge src={facebookIcon} top="15%" right="15%" delay={0.4} />
      <IconBadge src={tiktokIcon} top="40%" right="8%" delay={0.6} />
      <IconBadge src={googleIcon} top="45%" right="35%" delay={0.8} />
      <IconBadge src={youtubeIcon} top="65%" right="40%" delay={1.0} />
      <IconBadge src={whatsappIcon} top="70%" right="8%" delay={1.2} />
      <IconBadge src={gmailIcon} top="85%" right="25%" delay={1.4} />

      {/* Central Text Label */}
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
