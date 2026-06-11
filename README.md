# Manual de Marca Remo Group

Sitio estatico para publicar el Manual Integral de Marca de Remo Group S.A.S.

## Despliegue

Este proyecto no requiere build.

- Framework en Vercel: `Other`
- Build command: vacio
- Output directory: vacio
- Entry point: `index.html`

## Contenido

Incluye:

- Diagnostico de marca
- Estrategia y posicionamiento
- Arquitectura de marca
- Identidad verbal
- Sistema visual
- Logo, color y tipografia
- Aplicaciones
- Gobernanza
- Implementacion
- Pendientes de validacion directiva

## Assets de marca incluidos

El despliegue incluye los assets vectorizados cargados por Remo:

- `brand-engine.json`
- `assets/source/remo-logo-negro-vectorizado.pdf`
- `assets/source/remo-logo-blanco-vectorizado-preview.png`
- `assets/source/remo-logo-negro-vectorizado-preview.png`
- `assets/remo-logo-vectorizado-negro.png`
- `assets/remo-isotipo-vectorizado-color.png`

El logo principal web fue renderizado desde el PDF vectorizado cargado. El isotipo fue recortado desde ese mismo logo vectorizado para evitar reconstrucciones no autorizadas. La version blanca horizontal para fondos oscuros se conserva como asset oficial web disponible en `assets/remo-logo-oficial-blanco.png`.

Tambien se incorporo informacion observada en la web oficial:

- Capacidades: comercio exterior, logistica, comercial/abastecimiento y financiera/asegurabilidad.
- Contacto publicado: `info@remogroup.com.co`.
- Ubicaciones publicadas: Envigado, Medellin, Bogota y Miami.

## Nota

Los archivos binarios previos del manual quedaron como placeholders `dataless` en macOS y no eran legibles para Git. Esta version web usa HTML/CSS materializado y assets vectorizados cargados por Remo para despliegue estable en GitHub y Vercel.
