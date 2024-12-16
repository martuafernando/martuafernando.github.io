"use client";

import Experience from "@/domain/entities/experience";
import Image from "next/image";
import useWindowSize from "../hook/useWindowSize";
import { breakpoint } from "../constant/breakpoint";
import React from "react";

interface CompanyMarqueeComonentProps {
  className?: string;
  experience: Experience[]
}

export default function CompanyMarqueeComonent(props: Readonly<CompanyMarqueeComonentProps>) {
  const { className, experience } = props;
  const window = useWindowSize()

  const itemCount = getItemCount(window.width)

  return (
    <div
        className={`animate-marquee flex will-change-transform ${className}`}
        style={{
          width: `${(experience.length / itemCount) * 100}%`,
          animationDuration: `${experience.length}s`,
        }}
      >
        {experience.map((experience, index) => (
          <React.Fragment key={`experience-${experience.id}-${index}`}>
            <div className="flex-1" key={`experience-${experience.id}-${index}`}>
              <Image
                className="w-fit mx-auto h-12 block grayscale hover:grayscale-0 transition-all duration-300"
                width={48}
                height={48}
                src={experience.companyLogoHorizontalUrl}
                alt={`${experience.companyName} logo`}
              />
            </div>
            <div className="flex-0 w-4"></div>
          </React.Fragment>
        ))}
      </div>
  );

  function getItemCount(width: number): number {
    const itemCounts = {
      default: 1, // Mobile fallback
      sm: 2,      // Small screens
      md: 3,      // Medium screens
      lg: 4,      // Large screens
    };

    if (width >= breakpoint.lg) return itemCounts.lg;
    if (width >= breakpoint.md) return itemCounts.md;
    if (width >= breakpoint.sm) return itemCounts.sm;
    return itemCounts.default;
  }
}
