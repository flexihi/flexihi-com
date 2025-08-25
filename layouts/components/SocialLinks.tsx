import React from 'react';
import Image from 'next/image';
import youtubeIcon from '@/public/youtube.svg';
import facebookIcon from '@/public/facebook.svg';
import twitterIcon from '@/public/twitter.svg';
import instagramIcon from '@/public/instagram.svg';
import { SOCIAL_LINKS } from '../constants';

interface SocialLinksProps {
  className?: string;
  layout?: 'horizontal' | 'vertical';
}

const SocialLinks = React.memo<SocialLinksProps>(function SocialLinks({ 
  className = "", 
  layout = 'horizontal' 
}) {
  const baseClasses = layout === 'horizontal' ? 'flex gap-4 items-center' : 'flex flex-col gap-4 items-start';
  const finalClassName = `${baseClasses} ${className}`.trim();

  return (
    <div className={finalClassName}>
      <a
        href={SOCIAL_LINKS.youtube}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity duration-200"
        aria-label="YouTube"
      >
        <Image src={youtubeIcon} alt="youtube" loading="lazy" width={24} height={24} />
      </a>
      <a
        href={SOCIAL_LINKS.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity duration-200"
        aria-label="Facebook"
      >
        <Image src={facebookIcon} alt="facebook" loading="lazy" width={24} height={24} />
      </a>
      <a
        href={SOCIAL_LINKS.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity duration-200"
        aria-label="Twitter"
      >
        <Image src={twitterIcon} alt="twitter" loading="lazy" width={24} height={24} />
      </a>
      <a
        href={SOCIAL_LINKS.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity duration-200"
        aria-label="Instagram"
      >
        <Image src={instagramIcon} alt="instagram" loading="lazy" width={24} height={24} />
      </a>
    </div>
  );
});

export default SocialLinks;