/**
 * Theme configuration for the site.
 *
 * The source of truth is `src/systems.yml` → `src/config.json`.
 * Each system defines a theme slug, font and color palette.
 */
import config from "@/config.json";

export const systems = config.systems;
export type System = (typeof systems)[number];
export type Theme = System["slug"];

export const themes: Theme[] = systems.map((distro) => distro.slug).sort();

export const DEFAULT_THEME: Theme = config.site.default_theme as Theme;

/** clave de localStorage — replicada literalmente en el script anti-FOUC del layout */
export const STORAGE_KEY = "theme";
