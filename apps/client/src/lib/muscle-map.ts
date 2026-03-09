/**
 * Maps exercise database muscle names to react-body-highlighter muscle slugs.
 * The body highlighter uses specific slug names for its SVG regions.
 */

import type { Muscle } from "react-body-highlighter/dist/component/metadata";

const MUSCLE_SLUG_MAP: Record<string, Muscle> = {
  chest: "chest",
  back: "upper-back",
  shoulders: "front-deltoids",
  rear_delts: "back-deltoids",
  biceps: "biceps",
  triceps: "triceps",
  quads: "quadriceps",
  hamstrings: "hamstring",
  glutes: "gluteal",
  calves: "calves",
  core: "abs",
  forearms: "forearm",
  adductors: "adductor",
  hip: "gluteal",
};

/**
 * Convert exercise muscle names to body highlighter format.
 * Primary muscles get full intensity, secondary get partial.
 */
export function mapMusclesToHighlighter(
  primaryMuscles: string[],
  secondaryMuscles?: string[],
): Array<{ name: string; muscles: Muscle[] }> {
  const primary = primaryMuscles
    .map((m) => MUSCLE_SLUG_MAP[m.toLowerCase()])
    .filter((v): v is Muscle => !!v);

  const secondary = (secondaryMuscles ?? [])
    .map((m) => MUSCLE_SLUG_MAP[m.toLowerCase()])
    .filter((v): v is Muscle => !!v);

  const data: Array<{ name: string; muscles: Muscle[] }> = [];

  if (primary.length > 0) {
    data.push({ name: "Primary", muscles: primary });
  }
  if (secondary.length > 0) {
    data.push({ name: "Secondary", muscles: secondary });
  }

  return data;
}

/**
 * Get all unique highlighter muscle slugs from a list of target muscles.
 */
export function getHighlighterSlugs(muscles: string[]): Muscle[] {
  return [
    ...new Set(
      muscles.map((m) => MUSCLE_SLUG_MAP[m.toLowerCase()]).filter((v): v is Muscle => !!v),
    ),
  ];
}
