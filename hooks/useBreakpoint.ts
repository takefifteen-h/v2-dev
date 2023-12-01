import { useEffect, useState } from "react";

type Breakpoint = "sm" | "md" | "lg" | "xl";

const breakpoints: Record<Breakpoint, number> = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const useBreakpoint = (): Breakpoint | undefined => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>();

  useEffect(() => {
    const updateBreakpoint = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < breakpoints.sm) {
        setCurrentBreakpoint("sm");
      } else if (screenWidth < breakpoints.md) {
        setCurrentBreakpoint("md");
      } else if (screenWidth < breakpoints.lg) {
        setCurrentBreakpoint("lg");
      } else {
        setCurrentBreakpoint("xl");
      }
    };

    // Initial call to set the breakpoint on mount
    updateBreakpoint();

    // Add event listener for window resize
    window.addEventListener("resize", updateBreakpoint);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateBreakpoint);
    };
  }, []);

  return currentBreakpoint;
};
