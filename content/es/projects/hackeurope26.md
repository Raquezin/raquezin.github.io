---
title: "FactNews (HackEurope 2026)"
date: 2026-02-22
draft: false
tags: ["vibecode"]
---

Un sistema de verificación de noticias basado en el consenso que combate la desinformación mediante análisis de múltiples fuentes impulsado por IA.

---

**Enlaces:** [Devpost](https://devpost.com/software/consensus-tdv0el) · [GitHub](https://github.com/Raquezin/HackEurope26)

## Resumen

FactNews es una plataforma analítica avanzada que verifica información cruzando múltiples medios de comunicación globales. Al emplear un consejo de Grandes Modelos de Lenguaje (LLMs) y Generación Aumentada por Recuperación (RAG), identifica el consenso, destaca los hechos controvertidos y proporciona resúmenes transparentes y basados en evidencia de los eventos actuales.

## Características Principales

- **Agregación de Noticias de Múltiples Fuentes:** Ingestión automatizada de más de 20 medios de noticias principales (BBC, Reuters, CNN, NYT, TechCrunch, etc.) a través de canales RSS.
- **Consejo de Modelos de IA:** Múltiples LLMs (OpenAI, Anthropic, DeepSeek, Google, etc.) deliberan en paralelo, y un LLM "juez" sintetiza sus conclusiones para reducir el sesgo individual de cada modelo.
- **RAG Optimizado:** Búsqueda semántica a nivel de fragmentos con un caché de incrustaciones de múltiples niveles (Redis + NPZ local + API fallback) mediante operaciones vectoriales rápidas con NumPy.
- **Análisis de Sesgo y Divergencia:** Identifica dónde coinciden o discrepan las fuentes, destacando posibles sesgos mediáticos y mostrando hechos controvertidos con evidencia de respaldo.

## Tecnologías

- **Frontend:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Zustand
- **Backend:** FastAPI, Python, Uvicorn
- **IA y Datos:** OpenAI, Anthropic, Google, DeepSeek, Redis, NumPy, canales RSS
