import Image from 'next/image';
import { useState } from 'react';
import { FaMobile } from 'react-icons/fa';

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ProjectImage({ src, alt, className = '' }: ProjectImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`relative flex items-center justify-center bg-[#F2F2F7] dark:bg-[#2C2C2E] ${className}`}>
        <FaMobile className="w-16 h-16 text-[#8E8E93] dark:text-[#98989D]" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={`object-cover transition-transform duration-300 ${className}`}
      onError={() => setError(true)}
    />
  );
}
