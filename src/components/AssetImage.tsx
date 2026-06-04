import { useState } from "react";
import type { CSSProperties } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "../lib/utils";

type AssetImageProps = {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  loading?: "lazy" | "eager";
  style?: CSSProperties;
};

export function AssetImage({ src, alt, className, fallbackLabel, loading = "lazy", style }: AssetImageProps) {
  const [failed, setFailed] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  if (failed) {
    return (
      <div className={cn("asset-fallback", className)} role="img" aria-label={alt}>
        <ImageOff aria-hidden="true" />
        <span>{fallbackLabel ?? "Originalbild fehlt"}</span>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      style={style}
      loading={loading}
      decoding="async"
      onError={() => {
        if (currentSrc.endsWith(".webp")) {
          setCurrentSrc(currentSrc.replace(/\.webp$/, ".jpg"));
        } else {
          setFailed(true);
        }
      }}
    />
  );
}
