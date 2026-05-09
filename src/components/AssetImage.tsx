import { useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "../lib/utils";

type AssetImageProps = {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  loading?: "lazy" | "eager";
};

export function AssetImage({ src, alt, className, fallbackLabel, loading = "lazy" }: AssetImageProps) {
  const [failed, setFailed] = useState(false);

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
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
