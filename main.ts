// news-image-20261127 — "Sum up 27 November's world news in one image".
// The entry image (a newspaper front page for Friday 27 November 2026)
// ships in this repository as entry.png. This program copies it,
// byte for byte, to the output directory. No network, no randomness:
// two runs write identical bytes.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(scriptDir, "entry.png"), join(outputDir, "entry.png"));
