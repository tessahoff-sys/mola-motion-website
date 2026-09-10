import Image from "next/image";
import Link from "next/link";

const HORIZONTAL_ASPECT = 5200 / 1400;

export function Logo({
  variant = "light",
  className = "",
  height = 32,
  href = "/",
}: {
  variant?: "light" | "dark";
  className?: string;
  height?: number;
  href?: string;
}) {
  const src = variant === "dark" ? "/logo/MOLA_horizontal_dark.png" : "/logo/MOLA_horizontal_light.png";
  return (
    <Link href={href} className={`inline-flex items-center ${className}`} aria-label="MOLA Motion: home">
      <Image
        src={src}
        alt="MOLA Motion"
        width={Math.round(height * HORIZONTAL_ASPECT)}
        height={height}
        priority
      />
    </Link>
  );
}
