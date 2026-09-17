import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/700.css";

import "@fontsource/ubuntu-mono/400.css";
import "@fontsource/ubuntu-mono/700.css";

import type { systems } from "./themes";

type SystemFont = (typeof systems)[number]["font"];

export const FONT_FAMILY: Record<SystemFont, string> = {
	"JetBrains Mono": "JetBrains Mono",
	"Ubuntu Mono": "Ubuntu Mono",
	"Iosevka Term": "JetBrains Mono",
	"DejaVu Sans Mono": "JetBrains Mono",
};

export function fontStack(family: string): string {
	return `'${family}', ui-monospace, 'SF Mono', Menlo, Monaco, monospace`;
}
