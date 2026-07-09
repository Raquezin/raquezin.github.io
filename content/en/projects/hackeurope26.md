---
title: "FactNews (HackEurope 2026)"
date: 2026-02-22
draft: false
tags: ["vibecode"]
---

A Consensus-Driven News Verification System fighting misinformation through AI-powered multi-source analysis.

---

**Links:** [Devpost](https://devpost.com/software/consensus-tdv0el) · [GitHub](https://github.com/Raquezin/HackEurope26)

## Overview

FactNews is an advanced analytical platform that cross-verifies news information across multiple global media outlets. By employing a council of Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG), it identifies consensus, highlights contested facts, and provides transparent, evidence-based summaries of current events.

## Key Features

- **Multi-Source News Aggregation:** Automated ingestion from 20+ major news outlets (BBC, Reuters, CNN, NYT, TechCrunch, etc.) via RSS feeds.
- **AI Model Council:** Multiple LLMs (OpenAI, Anthropic, DeepSeek, Google, etc.) deliberate in parallel, and a "judge" LLM synthesizes their conclusions to reduce individual model bias.
- **Optimized RAG:** Chunk-level semantic search with a multi-tiered embedding cache (Redis + local NPZ + API fallback) using fast NumPy vector operations.
- **Bias & Divergence Analysis:** Identifies where sources agree or disagree, highlighting potential media bias and showing contested facts with supporting evidence.

## Tech Stack

- **Frontend:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Zustand
- **Backend:** FastAPI, Python, Uvicorn
- **AI & Data:** OpenAI, Anthropic, Google, DeepSeek, Redis, NumPy, RSS feeds
