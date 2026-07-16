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
      <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
        <g stroke="#2563eb" strokeWidth="3" strokeDasharray="0 10" fill="none" strokeLinecap="round">
          {/* We originate from approx right: 15%, top: 50% (center of the statue) */}
          {/* Instagram */}
          <path d="M 85% 50% Q 75% 30% 70% 15%" />
          {/* Facebook */}
          <path d="M 85% 50% Q 88% 30% 90% 15%" />
          {/* TikTok */}
          <path d="M 85% 50% Q 90% 40% 95% 35%" />
          {/* Google */}
          <path d="M 85% 50% Q 80% 45% 75% 35%" />
          {/* YouTube */}
          <path d="M 85% 50% Q 75% 50% 68% 55%" />
          {/* WhatsApp */}
          <path d="M 85% 50% Q 90% 55% 95% 60%" />
          {/* Gmail */}
          <path d="M 85% 50% Q 80% 65% 75% 80%" />
        </g>
      </svg>

      {/* Icons at path ends */}
      <IconBadge src={instagramIcon} top="15%" right="30%" />
      <IconBadge src={facebookIcon} top="15%" right="10%" />
      <IconBadge src={tiktokIcon} top="35%" right="5%" />
      <IconBadge src={googleIcon} top="35%" right="25%" />
      <IconBadge src={youtubeIcon} top="55%" right="32%" />
      <IconBadge src={whatsappIcon} top="60%" right="5%" />
      <IconBadge src={gmailIcon} top="80%" right="25%" />

      {/* Central Text Label */}
      <div 
        className="absolute bg-white/90 backdrop-blur-md border border-brand/20 shadow-xl rounded-2xl p-4 text-center min-w-[280px]"
        style={{ top: '15%', right: '40%' }}
      >
         <h3 className="text-sm font-semibold text-ink/70 uppercase tracking-widest mb-1">Todo en un solo lugar</h3>
         <p className="font-display text-2xl font-bold text-brand leading-none">
           Tu sitio web por <br/>$3,600 mxn
         </p>
      </div>
    </motion.div>
  );
}

function IconBadge({ src, top, right }: { src: string, top: string, right: string }) {
  return (
    <div 
      className="absolute w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-xl border border-ink/5 flex items-center justify-center p-3 -translate-y-1/2 translate-x-1/2 hover:scale-110 transition-transform duration-300"
      style={{ top, right }}
    >
      <img src={src} className="w-full h-full object-contain" alt="Icon" />
    </div>
  );
}
