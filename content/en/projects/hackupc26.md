---
title: "Blue Lobster (HackUPC 2026)"
date: 2026-04-26
draft: false
tags: ["vibecode"]
---

A predictive maintenance and Digital Co-Pilot system for the HP Metal Jet S100 3D printer.

---

**Links:** [Devpost](https://devpost.com/software/blue-lobster) · [GitHub](https://github.com/Raquezin/HackUPC26)

## Overview

Blue Lobster combines a synthetic digital twin, reinforcement learning maintenance planning, telemetry dashboards, and an LLM-backed diagnostic assistant to serve as an industrial operator workspace.

## System Architecture

The project is structured into three integrated layers to handle complex machine telemetry and maintenance reasoning:

- **Physics and Machine Learning:** Instead of relying on a physical machine, we built a digital twin using PyTorch that simulates the degradation of critical components. A Deep Q-Network (DQN) agent learns maintenance strategies by balancing intervention costs against failure risks.
- **Digital Co-Pilot Backend:** A FastAPI application bridges the database and the AI. It uses Google Gemini as a diagnostic agent, strictly grounded to explicit database ticks. Time-series telemetry is compressed using `pytoony` to optimize token usage.
- **Interactive 3D Frontend:** A Next.js App Router and Tailwind CSS dashboard provides the operator interface. It features a 3D digital twin built with React Three Fiber, allowing users to scrub through time, inspect hardware failures, and interact with the floating AI co-pilot.

## Tech Stack

- **Frontend:** Next.js 16, Tailwind CSS, React Three Fiber, Three.js
- **Backend:** FastAPI, SQLite, Google Gemini API
- **Machine Learning:** PyTorch, Deep Q-Network, tabular Q-learning
