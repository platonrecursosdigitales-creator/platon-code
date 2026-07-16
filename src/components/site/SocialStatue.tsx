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
      className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden md:block overflow-visible"
    >
      {/* SVG Dotted Lines */}
      <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="xMidYMid slice">
        {/* We originate from approx 60% left, 60% top (center of the statue on desktop) */}
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(15, 23, 42, 0.2)" />
            <stop offset="100%" stopColor="rgba(15, 23, 42, 0.05)" />
          </linearGradient>
        </defs>
        <g stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="4 6" fill="none" strokeLinecap="round">
          {/* Instagram */}
          <path d="M 65% 55% Q 55% 20% 35% 15%" />
          {/* Facebook */}
          <path d="M 65% 55% Q 75% 30% 85% 20%" />
          {/* TikTok */}
          <path d="M 65% 55% Q 40% 40% 25% 45%" />
          {/* Google */}
          <path d="M 65% 55% Q 80% 50% 90% 45%" />
          {/* YouTube */}
          <path d="M 65% 55% Q 50% 70% 30% 75%" />
          {/* WhatsApp */}
          <path d="M 65% 55% Q 75% 80% 85% 75%" />
          {/* Gmail */}
          <path d="M 65% 55% Q 55% 90% 45% 90%" />
        </g>
      </svg>

      {/* Icons at path ends */}
      <IconBadge src={instagramIcon} top="15%" left="35%" />
      <IconBadge src={facebookIcon} top="20%" left="85%" />
      <IconBadge src={tiktokIcon} top="45%" left="25%" />
      <IconBadge src={googleIcon} top="45%" left="90%" />
      <IconBadge src={youtubeIcon} top="75%" left="30%" />
      <IconBadge src={whatsappIcon} top="75%" left="85%" />
      <IconBadge src={gmailIcon} top="90%" left="45%" />

      {/* Central Text Label */}
      <div className="absolute top-[10%] left-[50%] -translate-x-1/2 bg-white/90 backdrop-blur-md border border-brand/20 shadow-xl rounded-2xl p-4 text-center min-w-[280px]">
         <h3 className="text-sm font-semibold text-ink/70 uppercase tracking-widest mb-1">Todo en un solo lugar</h3>
         <p className="font-display text-2xl font-bold text-brand leading-none">
           Tu sitio web por <br/>$3,600 mxn
         </p>
      </div>
    </motion.div>
  );
}

function IconBadge({ src, top, left }: { src: string, top: string, left: string }) {
  return (
    <div 
      className="absolute w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-lg border border-ink/5 flex items-center justify-center p-2.5 md:p-3 -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform duration-300"
      style={{ top, left }}
    >
      <img src={src} className="w-full h-full object-contain" alt="Icon" />
    </div>
  );
}
