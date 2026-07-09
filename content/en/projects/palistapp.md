---
title: "PalistApp"
date: 2025-04-10
draft: false
---

The national standard platform for Spanish canoeing data analytics, tracking results, races, and competitors.

---

**Status:** Active development (since April 2024) · [palistapp.com](https://www.palistapp.com)

## The Problem

As a competitive canoeist, I was frustrated by the sport's fragmented data landscape. National race results were buried in 90s-era government PDFs and broken legacy websites. Data was often missing, inconsistently formatted, or manually entered with errors. I built PalistApp to centralize and clean this data, providing the community with a modern, real-time analytics tool.

## Technical Implementation

I built the entire stack from scratch focusing on performance and data integrity:

- **ETL Pipeline:** A custom scraping engine to aggregate data from multiple legacy sources, with a complex data normalization and cleaning layer to handle misspelled names, inconsistent dates, and duplicate IDs.
- **Database:** PostgreSQL schema optimized for complex relational queries (e.g., tracking an athlete's 10-year career progression) and indexing strategies for high performance.
- **Backend:** Go API designed for sub-100ms latency, enabling the system to run efficiently on free-tier infrastructure (Render).
- **Frontend:** React/TypeScript + Vite, featuring a "data-dense" yet mobile-responsive interface designed for athletes to use riverside during competitions.

## Impact & Numbers

The launch was explosive. Within the first 96 hours, the platform received over **100,000 pageviews** and handled the traffic spike seamlessly on its free-tier infrastructure.

PalistApp effectively became the industry standard for the sport overnight. It is now the primary resource used by athletes, coaches, and the national federation, replacing the government’s own legacy infrastructure through sheer utility and superior UX.
