---
title: "PalistApp"
date: 2025-04-10
draft: false
---

La plataforma estándar nacional de análisis de datos del piragüismo español, resultados, regatas y palistas.

---

**Estado:** En desarrollo activo (desde abril 2024) · [palistapp.com](https://www.palistapp.com)

## El Problema

Como piragüista de competición, me frustraba la fragmentación de los datos del deporte. Los resultados de las regatas nacionales estaban enterrados en PDFs gubernamentales de los años 90 y en páginas web obsoletas. Los datos a menudo faltaban, tenían formatos inconsistentes o se introducían a mano con errores. Construí PalistApp para centralizar y limpiar estos datos, ofreciendo a la comunidad una herramienta moderna de análisis en tiempo real.

## Implementación Técnica

Desarrollé todo el stack desde cero enfocándome en el rendimiento y la integridad de los datos:

- **Pipeline ETL:** Un motor de scraping personalizado para agregar datos de múltiples fuentes heredadas, con una capa compleja de normalización y limpieza de datos para manejar nombres mal escritos, fechas inconsistentes e IDs duplicados.
- **Base de datos:** Esquema PostgreSQL optimizado para consultas relacionales complejas (ej. el progreso de la carrera de un palista durante 10 años) y estrategias de indexación para un alto rendimiento.
- **Backend:** API en Go diseñada para una latencia inferior a 100ms, lo que permite que el sistema se ejecute eficientemente en infraestructura gratuita (Render).
- **Frontend:** React/TypeScript + Vite, con una interfaz "densa en datos" pero adaptable a dispositivos móviles, diseñada para que los palistas la usen a la orilla del río durante las competiciones.

## Impacto y Números

El lanzamiento fue explosivo. En las primeras 96 horas, la plataforma recibió más de **100.000 visitas** y manejó el pico de tráfico sin problemas en su infraestructura gratuita.

PalistApp se convirtió de la noche a la mañana en el estándar del sector para este deporte. Ahora es el recurso principal utilizado por palistas, entrenadores y la federación nacional, reemplazando la infraestructura gubernamental por su utilidad y experiencia de usuario superior.
