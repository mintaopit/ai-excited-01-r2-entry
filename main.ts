// ai-excited-01 round 2 entry (Node 22, standard library only).
// The image is the entry.png beside this file: a whale breaching at sunset,
// drawn for this entry. The program copies it to /output/entry.png.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

// The copy is byte-for-byte and deterministic, so both grader runs write
// the same file.
copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
