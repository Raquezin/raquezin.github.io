---
title: "Snake Algorithms"
description: "Snake en C con SDL3, jugable a mano o por una IA que busca la manzana con BFS y, si no es seguro, sigue el camino más largo hasta su propia cola."
date: 2026-01-20
---

El clásico juego de la serpiente escrito en C, con una IA que juega por sí sola.

---

**Enlaces:** [GitHub](https://github.com/Raquezin/Snake_algorithms)

## Resumen

Un Snake hecho desde cero en C11 con dos modos: en el **modo persona** manejas la serpiente con el teclado y en el **modo máquina** un algoritmo decide cada movimiento. Inspirado en [este vídeo](https://youtu.be/BCpKJrGHBJA).

## Cómo Juega la IA

En cada paso, la IA decide su siguiente movimiento en tres fases:

1. **Camino más corto a la manzana:** Una búsqueda en anchura (BFS) encuentra la ruta más corta desde la cabeza hasta la manzana, descartando las rutas que dejarían una casilla aislada.
2. **¿Puede seguir llegando a su cola?** La IA simula recorrer esa ruta y comerse la manzana, y después lanza otra BFS desde la nueva cabeza hasta la cola. Si la cola es alcanzable, la serpiente sigue teniendo una salida después de comer, así que va a por la manzana.
3. **Si no, el camino más largo hasta la cola:** Si no hay ruta hasta la manzana, o la cola quedaría fuera de alcance después de comer, la serpiente persigue su propia cola. Busca una ruta hasta la cola con BFS y después va ensanchando cada paso con pequeños desvíos de hasta dos casillas extra hasta que no caben más, alargando la ruta todo lo que puede. La cola va dejando sitio libre a su paso, y los movimientos extra dan tiempo a que se abra una ruta segura hacia la manzana.

## Implementación

- **Núcleo compartido:** Las reglas del juego (`game.c`) y la IA (`ai.c`) están en un único sitio y todos los ejecutables las reutilizan.
- **Cola circular:** Una misma cola circular guarda el cuerpo de la serpiente y la frontera del BFS.
- **Cuatro interfaces:** Versiones gráficas (SDL3) y de terminal para ambos modos. Las dos versiones SDL comparten el mismo código de ventana y solo se diferencian en si la dirección la elige el teclado o la IA. Las interfaces se generaron con Claude Opus.
- **Configurable:** El tamaño de la cuadrícula, el de la ventana y la velocidad de las versiones SDL se definen en `const.h`.

## Tecnologías

- **Lenguaje:** C11
- **Gráficos:** SDL3
- **Compilación:** CMake
