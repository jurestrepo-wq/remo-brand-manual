# Manual de Marca Remo Group

Sitio estatico para publicar el Manual Integral de Marca de Remo Group S.A.S.

## Estilo de escritura

La [norma editorial compartida de Remo Group y Profe Financiero](guidelines/estilo-de-escritura.md), versión 1.2 del 17 de septiembre de 2026, forma parte de los [fundamentos verbales](guidelines/brand-guidelines.md#fundamentos-verbales).

Aplica a informes, propuestas, planes, presentaciones y piezas de canal dirigidos a empresarios, direcciones generales y comités de decisión. Dentro de ese ámbito prevalece sobre los ejemplos editoriales anteriores. El manual web incluye el acceso [Estilo de escritura](index.html#estilo-de-escritura) y `brand-engine.json` registra las reglas para su aplicación en nuevos contenidos.

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
- Estilo de escritura
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

## Kit operativo construido

El sitio incluye una biblioteca de plantillas descargables en `assets/templates/`.

- `firma-correo.html`: firma corporativa editable.
- `tarjeta-corporativa.svg`: tarjeta corporativa frente/reverso.
- `propuesta-comercial.svg`: portada base de propuesta comercial.
- `one-pager.svg`: resumen institucional de una pagina.
- `diagnostico-internacionalizacion.svg`: diagnostico inicial.
- `informe-avance.svg`: informe ejecutivo de avance.
- `ficha-mercado.svg`: ficha de mercado.
- `ficha-costos.svg`: matriz de costos.
- `pitch-deck.svg`: slide maestro de presentacion.
- `data-room-visual.svg`: estructura visual de data room.
- `linkedin-post.svg`: plantilla editorial para LinkedIn.
- `feria-empresarial.svg`: pieza vertical para feria o stand.
- `asset-manifest.json`: indice operativo del kit.

Los SVG incluyen el logo oficial embebido para que puedan abrirse, descargarse o importarse sin depender de rutas externas. Los textos no validados se dejan como campos editables o pendientes de validacion directiva.

Tambien se incorporo informacion observada en la web oficial:

- Capacidades: comercio exterior, logistica, comercial/abastecimiento y financiera/asegurabilidad.
- Contacto publicado: `info@remogroup.com.co`.
- Ubicaciones publicadas: Envigado, Medellin, Bogota y Miami.

## Nota

Los archivos binarios previos del manual quedaron como placeholders `dataless` en macOS y no eran legibles para Git. Esta version web usa HTML/CSS materializado y assets vectorizados cargados por Remo para despliegue estable en GitHub y Vercel.
