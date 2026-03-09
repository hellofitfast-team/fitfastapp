"use client";

import dynamic from "next/dynamic";
import { mapMusclesToHighlighter } from "@/lib/muscle-map";

// Dynamic import to avoid SSR issues with the SVG body highlighter
const Model = dynamic(() => import("react-body-highlighter"), { ssr: false });

interface MuscleMapProps {
  targetMuscles: string[];
  className?: string;
}

/**
 * Renders front and back body silhouettes with highlighted target muscles.
 * Uses react-body-highlighter for SVG muscle visualization.
 */
export function MuscleMap({ targetMuscles, className }: MuscleMapProps) {
  if (!targetMuscles || targetMuscles.length === 0) return null;

  const highlightData = mapMusclesToHighlighter(targetMuscles);

  if (highlightData.length === 0) return null;

  return (
    <div className={className}>
      <div className="flex items-center justify-center gap-2">
        <Model
          data={highlightData}
          style={{ width: "6rem", padding: 0 }}
          highlightedColors={["#3B82F6", "#93C5FD"]}
          type="anterior"
        />
        <Model
          data={highlightData}
          style={{ width: "6rem", padding: 0 }}
          highlightedColors={["#3B82F6", "#93C5FD"]}
          type="posterior"
        />
      </div>
    </div>
  );
}
