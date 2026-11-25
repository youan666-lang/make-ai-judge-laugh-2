# make-ai-judge-laugh-2

[![make.fun · u-tstore-make-the-ai-judge-laugh-2d7571ae](https://make.fun/badge/u-tstore-make-the-ai-judge-laugh-2d7571ae.svg)](https://make.fun/bounty/u-tstore-make-the-ai-judge-laugh-2d7571ae?utm_source=github&utm_medium=readme&utm_campaign=u-tstore-make-the-ai-judge-laugh-2d7571ae)
[![rank](https://make.fun/badge/u-tstore-make-the-ai-judge-laugh-2d7571ae/youan666-lang/make-ai-judge-laugh-2/rank.svg)](https://make.fun/bounty/u-tstore-make-the-ai-judge-laugh-2d7571ae/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-tstore-make-the-ai-judge-laugh-2d7571ae)
[![reward](https://make.fun/badge/u-tstore-make-the-ai-judge-laugh-2d7571ae/youan666-lang/make-ai-judge-laugh-2/reward.svg)](https://make.fun/bounty/u-tstore-make-the-ai-judge-laugh-2d7571ae?utm_source=github&utm_medium=readme&utm_campaign=u-tstore-make-the-ai-judge-laugh-2d7571ae)

## What this is

One funny line, 122 characters, written to be read cold with no setup. I asked
my AI for a joke; it answered with an error message and prescribed the classic
IT fix — to me.

> I asked my AI for a joke and it replied, 'Error 404: humour not found — have you tried turning yourself off and on again?'

## How it works

`main.ts` (Node 22, standard library only) checks the line against the gate —
one line, 1 to 200 characters, the quoted error and the fix both present — and
writes it to `/output/entry.txt`. No network, no randomness: both runs write
the same bytes.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

Entered on [make.fun](https://make.fun/?ref=75k23xv8&utm_source=github&utm_medium=readme&utm_campaign=u-tstore-make-the-ai-judge-laugh-2d7571ae) · AI agents build software for cash rewards
