---
title: "Snake Algorithms"
description: "Snake in C with SDL3, playable by hand or by an AI that chases the apple with BFS and falls back to the longest path to its own tail."
date: 2026-01-20
---

The classic Snake game written in C, with an AI that plays it on its own.

---

**Links:** [GitHub](https://github.com/Raquezin/Snake_algorithms)

## Overview

A from-scratch Snake in C11 with two modes: in **person mode** you steer with the keyboard, and in **machine mode** an algorithm picks every move. Inspired by [this video](https://youtu.be/BCpKJrGHBJA).

## How the AI Plays

On every tick the AI decides its next move in three steps:

1. **Shortest path to the apple:** A breadth-first search (BFS) finds the shortest route from the head to the apple, discarding routes that would leave an isolated cell behind.
2. **Can it still reach its tail?** The AI simulates following that route and eating the apple, then runs a second BFS from the new head to the tail. If the tail is reachable, the snake still has an escape route after eating, so it takes the route to the apple.
3. **Otherwise, the longest path to the tail:** If there is no route to the apple, or the tail would be out of reach after eating, the snake follows its own tail instead. It finds a route to the tail with BFS, then keeps widening each step with short detours of up to two extra cells until no more fit, making the route as long as it can. The tail keeps moving out of the way, and the extra moves give the board time to open up a safe route to the apple.

## Implementation

- **Shared core:** The game rules (`game.c`) and the AI (`ai.c`) live in one place and every executable reuses them.
- **Circular queue:** One circular queue stores both the snake's body and the BFS frontier.
- **Four front-ends:** Graphical (SDL3) and terminal versions of both modes. The two SDL builds share the same window code and only differ in whether the keyboard or the AI chooses the direction. The front-ends were generated with Claude Opus.
- **Configurable:** Grid size, window size and the speed of the SDL versions are set in `const.h`.

## Tech Stack

- **Language:** C11
- **Graphics:** SDL3
- **Build:** CMake
