// SkillSyncLogo.tsx

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"; // Adjust the path as necessary

const logoVariants = cva("flex flex-row items-center justify-center", {
  variants: {
    size: {
      small: "text-base",
      medium: "text-3xl",
      large: "text-6xl",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export interface SkillSyncLogoProps extends VariantProps<typeof logoVariants> {
  className?: string;
}

const SkillSyncLogo = React.forwardRef<HTMLDivElement, SkillSyncLogoProps>(
  ({ size, className, ...props }, ref) => {
    const chosenSize = {
      small: { width: "44", height: "44" },
      medium: { width: "66", height: "66" },
      large: { width: "89", height: "89" },
    }[size || "medium"];

    return (
      <div
        className={cn(logoVariants({ size }), className)}
        ref={ref}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="78"
          height="77"
          viewBox="0 0 78 77"
          fill="none"
        >
          <rect
            x="1.8595"
            y="1"
            width="75"
            height="75"
            rx="37.5"
            fill="#F8F8F8"
          />
          <rect
            x="1.3595"
            y="0.5"
            width="76"
            height="76"
            rx="38"
            stroke="#E5E5E5"
            stroke-opacity="0.08"
          />
          <path
            d="M57.573 57.4997C58.7443 56.3475 58.5531 54.5282 57.6524 52.4032L42.5882 17.8917C42.1285 16.8197 41.6295 15.9723 41.072 15.4056C40.0498 14.3665 38.7381 14.3557 37.699 15.3778C37.1323 15.9353 36.6194 16.7745 36.161 17.8201L20.4357 52.322C19.615 54.133 19.3559 56.0236 20.5081 57.195C21.9949 58.7064 23.6308 58.0264 25.5693 57.0117L39.1215 49.7771L52.3478 57.1007C54.3624 58.2417 56.0616 58.9865 57.573 57.4997ZM37.3497 46.4643L24.3829 53.1603C24.2135 53.2526 24.12 53.2331 24.0643 53.1764C23.9899 53.1008 23.953 53.0256 24.0484 52.8202L35.8588 27.225C36.6985 25.3954 37.3327 23.4704 38.0416 21.5835C37.8187 23.6243 37.518 26.0018 37.5029 27.8382L37.3497 46.4643ZM54.1395 53.4424C54.0639 53.5168 53.9518 53.4784 53.765 53.4018L40.9101 46.4936L41.0818 27.8863C41.0972 26.0125 40.836 23.5929 40.6092 21.5484C41.287 23.4467 41.8892 25.4194 42.7357 27.3003L54.1051 53.0673C54.1971 53.2742 54.215 53.3681 54.1395 53.4424Z"
            fill="#40CF8E"
          />
        </svg>
        <div className="pl-5 font-medium text-customGreen font-neue-haas leading-normal">
          SkillSync
        </div>
      </div>
    );
  }
);

SkillSyncLogo.displayName = "SkillSyncLogo";

export { SkillSyncLogo, logoVariants };
