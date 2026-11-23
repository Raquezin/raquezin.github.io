---
title: "Sight (DurHack 2026)"
description: "Sight uses a phone camera, a laptop GPU and spoken directions to help blind and visually impaired people navigate around obstacles."
date: 2026-11-15
tags: ["vibecode"]
---

A navigation prototype that uses a phone camera and spoken directions to help blind and visually impaired people walk around obstacles.

---

**Links:** [Devpost](https://devpost.com/software/sight-v3qzmw) · [GitHub](https://github.com/raquezin/durhack26)

## Overview

Inés Dávila, Marc Altabella and I built Sight in 24 hours at DurHack 2026 at Durham University. The user wears a phone on their chest to film the path ahead and hears warnings and directions through headphones.

## System Architecture

- **Local perception.** A laptop GPU estimates distances in each frame. Object detection and segmentation models label the camera view.
- **Hazard alerts.** When an obstacle blocks the walking path, Sight plays a cached warning. In our benchmark, the median time from frame arrival at the laptop to sending the alert to the audio output was **16 ms**.
- **Spoken guidance.** When the scene changes, Gemini uses the image and depth estimates to suggest a direction, which ElevenLabs reads aloud. Urgent warnings interrupt directions, and Sight drops instructions if the user has already moved past the scene.

## Results

DurHack brought together 690 participants. We competed in three tracks.

- **1st place** in the Accenture track.
- **3rd place** in the Qube Research & Technologies × OpenAI CTF track.
- **Marshall Wace finalist**, one of four teams selected from a field of over 90.

## Tech Stack

- **Computer vision** — Python, PyTorch, Depth Anything 3, RT-DETRv2, SAM 2.1 and DINOv2
- **Voice guidance** — Gemini and ElevenLabs
- **Dashboard and streaming** — React and WebSockets
