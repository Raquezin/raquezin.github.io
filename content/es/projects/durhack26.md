---
title: "Sight (DurHack 2026)"
description: "Sight usa la cámara de un móvil, la GPU de un portátil e indicaciones de voz para ayudar a personas ciegas o con baja visión a esquivar obstáculos."
date: 2026-11-15
tags: ["vibecode"]
---

Un prototipo de navegación que usa la cámara de un móvil e indicaciones de voz para ayudar a personas ciegas o con baja visión a esquivar obstáculos.

---

**Enlaces:** [Devpost](https://devpost.com/software/sight-v3qzmw) · [GitHub](https://github.com/raquezin/durhack26)

## Resumen

Inés Dávila, Marc Altabella y yo desarrollamos Sight en 24 horas en DurHack 2026, en la Universidad de Durham. El usuario lleva un móvil sujeto al pecho que graba el camino y escucha por los auriculares los avisos de obstáculos y las indicaciones para sortearlos.

## Arquitectura del Sistema

- **Percepción local.** La GPU de un portátil estima las distancias en cada fotograma. Los modelos de detección y segmentación etiquetan los objetos que capta la cámara.
- **Avisos de obstáculos.** Si un obstáculo bloquea el paso, Sight reproduce un aviso de voz guardado en memoria. En nuestras pruebas, la mediana fue de **16 ms** desde la llegada del fotograma al portátil hasta el envío del aviso a la salida de audio.
- **Guía por voz.** Cuando cambia la escena, Gemini usa la imagen y las distancias para sugerir por dónde seguir, y ElevenLabs convierte la indicación en voz. Los avisos urgentes interrumpen la locución. Si el usuario ya ha dejado atrás la escena, Sight descarta la indicación.

## Resultados

DurHack reunió a 690 participantes. Competimos en tres retos.

- **Primer puesto** en el reto de Accenture.
- **Tercer puesto** en el CTF de Qube Research & Technologies × OpenAI.
- **Finalistas en el reto de Marshall Wace**, entre los cuatro equipos seleccionados de más de 90.

## Tecnologías

- **Visión artificial** — Python, PyTorch, Depth Anything 3, RT-DETRv2, SAM 2.1 y DINOv2
- **Guía por voz** — Gemini y ElevenLabs
- **Panel y transmisión de vídeo** — React y WebSockets
