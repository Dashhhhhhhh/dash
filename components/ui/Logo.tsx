import Image from "next/image";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({ className = "", width = 120, height = 80 }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/next.svg"
        alt="Dash Dunmire - Finance & Technology"
        width={width}
        height={height}
        className="rounded-lg"
        priority
      />
    </div>
  );
}
