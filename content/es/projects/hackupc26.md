---
title: "Blue Lobster (HackUPC 2026)"
date: 2026-04-26
draft: false
tags: ["vibecode"]
---

Un sistema de mantenimiento predictivo y Co-Piloto Digital para la impresora 3D HP Metal Jet S100.

---

**Enlaces:** [Devpost](https://devpost.com/software/blue-lobster) · [GitHub](https://github.com/Raquezin/HackUPC26)

## Resumen

Blue Lobster combina un gemelo digital sintético, planificación de mantenimiento por aprendizaje por refuerzo, paneles de telemetría y un asistente de diagnóstico respaldado por LLM para servir como espacio de trabajo para operadores industriales.

## Arquitectura del Sistema

El proyecto está estructurado en tres capas integradas para manejar telemetría de máquinas complejas y razonamiento de mantenimiento:

- **Física y Machine Learning:** En lugar de depender de una máquina física, construimos un gemelo digital usando PyTorch que simula la degradación de componentes críticos. Un agente Deep Q-Network (DQN) aprende estrategias de mantenimiento equilibrando los costos de intervención contra los riesgos de falla.
- **Backend del Co-Piloto Digital:** Una aplicación FastAPI que sirve de puente entre la base de datos y la IA. Utiliza Google Gemini como agente de diagnóstico, estrictamente anclado a instantes específicos de la base de datos. La telemetría de series temporales se comprime usando `pytoony` para optimizar el uso de tokens.
- **Frontend Interactivo 3D:** Un panel construido con Next.js App Router y Tailwind CSS que proporciona la interfaz para el operador. Cuenta con un gemelo digital 3D construido con React Three Fiber, permitiendo a los usuarios retroceder o avanzar en el tiempo, inspeccionar fallos de hardware e interactuar con el copiloto de IA flotante.

## Tecnologías

- **Frontend:** Next.js 16, Tailwind CSS, React Three Fiber, Three.js
- **Backend:** FastAPI, SQLite, Google Gemini API
- **Machine Learning:** PyTorch, Deep Q-Network, tabular Q-learning
