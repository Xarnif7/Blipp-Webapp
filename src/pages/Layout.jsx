import React from "react";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { DashboardProvider } from "@/components/providers/DashboardProvider";

/**
 * TEMP Layout (safe):
 * - No redirects or auth logic
 * - Just wraps children with Theme + Dashboard providers
 * - Keeps everything rendering while we stabilize routing/auth
 */
export default function Layout({ children }) {
  return (
    <ThemeProvider>
      <DashboardProvider>
        {children}
      </DashboardProvider>
    </ThemeProvider>
  );
}
