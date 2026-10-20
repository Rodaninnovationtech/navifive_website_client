import { useState } from "react";

// Image with a soft fallback so a broken link never leaves a hole in the layout.
export function Img({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <div role="img" aria-label={alt} className={`bg-gradient-to-br from-panel to-line ${className}`} />;
  }
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={`object-cover ${className}`} />;
}
