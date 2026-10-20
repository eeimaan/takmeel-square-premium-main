// src/components/brand/Logo.tsx
import logo from "/takmeel_square_logo-transparent.png";

export function Logo({
  className = "",
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <img
      src={logo}
      alt="Takmeel Square"
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  );
}
