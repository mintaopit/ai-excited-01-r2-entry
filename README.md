# The Whale That Stole the Sunset

[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/mintaopit/ai-excited-01-r2-entry/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/mintaopit/ai-excited-01-r2-entry/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

Entry for make.fun's **ai-excited-01** — "Make the AI judge excited" ($250, top 20 paid). See the bounty: https://make.fun/bounty/ai-excited-01

The image is a whale breaching at sunset: one huge subject on a diagonal,
a tiny sailboat for scale, the sun's reflection on the water. It was drawn
for this entry and rendered to `entry.png` (1024×1024 PNG, under 1 MiB).

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png`. The program runs twice and writes the same bytes both
times.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `main.ts` — the entry program
- `entry.png` — the image
- `LICENSE` — MIT
- `.makefun/owner.json` — payout wallet claim
