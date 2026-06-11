import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "assets", "templates");
fs.mkdirSync(outDir, { recursive: true });

const colors = {
  orange: "#C06025",
  teal: "#5EA0AB",
  blue: "#083B4A",
  graphite: "#1F2933",
  black: "#000000",
  white: "#FFFFFF",
  mist: "#F3F6F8",
  sand: "#F6EFE7",
  line: "#DDE6EA",
};

const logoBlack = pngData("assets/remo-logo-vectorizado-negro.png");
const logoWhite = pngData("assets/remo-logo-oficial-blanco.png");
const symbolColor = pngData("assets/remo-isotipo-vectorizado-color.png");

const assets = [
  {
    file: "firma-correo.html",
    name: "Firma de correo",
    format: "HTML",
    purpose: "Firma corporativa editable para correo empresarial.",
    pending: "Nombre, cargo, telefono, correo directo, URL y datos legales.",
  },
  {
    file: "tarjeta-corporativa.svg",
    name: "Tarjeta corporativa",
    format: "SVG",
    purpose: "Frente y reverso de tarjeta personal para direccion, comercial y consultores.",
    pending: "Nombre, cargo, datos de contacto, direccion legal y QR.",
  },
  {
    file: "propuesta-comercial.svg",
    name: "Propuesta comercial",
    format: "SVG",
    purpose: "Portada y sistema base para propuestas comerciales B2B.",
    pending: "Cliente, alcance, condiciones, responsables, fecha y version.",
  },
  {
    file: "one-pager.svg",
    name: "One pager",
    format: "SVG",
    purpose: "Resumen institucional de una pagina para empresarios, aliados e inversionistas.",
    pending: "Cifras, casos, cobertura, clientes, traccion y datos de contacto.",
  },
  {
    file: "diagnostico-internacionalizacion.svg",
    name: "Diagnostico",
    format: "SVG",
    purpose: "Plantilla para diagnostico inicial de internacionalizacion.",
    pending: "Criterios tecnicos, escala de evaluacion y responsable del diagnostico.",
  },
  {
    file: "informe-avance.svg",
    name: "Informe de avance",
    format: "SVG",
    purpose: "Reporte ejecutivo de avance, riesgos y siguientes decisiones.",
    pending: "Indicadores, hitos, fechas, responsables y evidencias.",
  },
  {
    file: "ficha-mercado.svg",
    name: "Ficha de mercado",
    format: "SVG",
    purpose: "Ficha para evaluar pais, segmento, canal, requisito y oportunidad.",
    pending: "Fuente de datos, mercado objetivo, aranceles, requisitos y canales.",
  },
  {
    file: "ficha-costos.svg",
    name: "Ficha de costos",
    format: "SVG",
    purpose: "Matriz base para costos de importacion, exportacion y operacion.",
    pending: "Incoterm, moneda, TRM, proveedor, impuestos, fletes, seguros y margen.",
  },
  {
    file: "pitch-deck.svg",
    name: "Pitch deck",
    format: "SVG",
    purpose: "Portada/slide maestro para presentaciones institucionales e inversion.",
    pending: "Metricas, mercado, modelo, clientes, traccion, equipo y necesidades de capital.",
  },
  {
    file: "data-room-visual.svg",
    name: "Data room visual",
    format: "SVG",
    purpose: "Mapa visual para ordenar carpeta de inversion, aliados o due diligence.",
    pending: "Estructura legal, financiera, comercial, operacional y permisos de acceso.",
  },
  {
    file: "linkedin-post.svg",
    name: "LinkedIn",
    format: "SVG",
    purpose: "Plantilla editorial para publicaciones B2B de comercio exterior.",
    pending: "Tema, fuente, CTA, URL y responsable de aprobacion.",
  },
  {
    file: "feria-empresarial.svg",
    name: "Feria empresarial",
    format: "SVG",
    purpose: "Pieza vertical para stand, pendon o punto de contacto comercial.",
    pending: "Evento, ciudad, QR, contacto, aliados y oferta especifica.",
  },
];

write("firma-correo.html", emailSignature());
write("tarjeta-corporativa.svg", businessCard());
write("propuesta-comercial.svg", proposal());
write("one-pager.svg", onePager());
write("diagnostico-internacionalizacion.svg", diagnostic());
write("informe-avance.svg", progressReport());
write("ficha-mercado.svg", marketSheet());
write("ficha-costos.svg", costSheet());
write("pitch-deck.svg", pitchDeck());
write("data-room-visual.svg", dataRoom());
write("linkedin-post.svg", linkedInPost());
write("feria-empresarial.svg", fairBanner());
write("asset-manifest.json", JSON.stringify({
  brand: "Remo Group S.A.S.",
  version: "2026-06-11-operational-assets",
  principle: "Remo convierte la complejidad internacional en rutas claras de crecimiento.",
  files: assets,
}, null, 2));
write("README.md", templatesReadme());

console.log(`Generated ${assets.length + 2} files in ${path.relative(root, outDir)}`);

function pngData(relativePath) {
  const file = path.join(root, relativePath);
  return `data:image/png;base64,${fs.readFileSync(file).toString("base64")}`;
}

function write(file, contents) {
  fs.writeFileSync(path.join(outDir, file), `${contents.trim()}\n`);
}

function svg(width, height, title, body) {
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title desc">
  <title id="title">${escapeXml(title)}</title>
  <desc id="desc">Plantilla editable de marca Remo Group S.A.S.</desc>
  <defs>
    <style>
      .h1{font-family:'Baloo Da 2','Poppins',Arial,sans-serif;font-weight:800;letter-spacing:0;fill:${colors.graphite}}
      .h2{font-family:'Baloo Da 2','Poppins',Arial,sans-serif;font-weight:700;letter-spacing:0;fill:${colors.graphite}}
      .body{font-family:'Poppins',Arial,sans-serif;font-weight:400;fill:#52616B}
      .semi{font-family:'Poppins',Arial,sans-serif;font-weight:600;fill:${colors.graphite}}
      .small{font-family:'Poppins',Arial,sans-serif;font-weight:500;fill:#71808A}
      .micro{font-family:'Poppins',Arial,sans-serif;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;fill:${colors.orange}}
      .white{fill:${colors.white}}
      .mutedWhite{fill:rgba(255,255,255,.76)}
    </style>
  </defs>
  ${body}
</svg>`;
}

function logo(href, x, y, w, h, opacity = 1) {
  return `<image href="${href}" x="${x}" y="${y}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid meet" opacity="${opacity}"/>`;
}

function rect(x, y, w, h, fill, rx = 0, stroke = "none", sw = 1) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
}

function text(content, x, y, size, cls = "body", extra = "") {
  return `<text x="${x}" y="${y}" font-size="${size}" class="${cls}" ${extra}>${escapeXml(content)}</text>`;
}

function multiline(lines, x, y, size, cls = "body", gap = 1.35) {
  return lines.map((line, index) => text(line, x, y + index * size * gap, size, cls)).join("\n");
}

function pill(label, x, y, w, fill = colors.mist, color = colors.blue) {
  return `${rect(x, y, w, 44, fill, 22)}${text(label, x + 20, y + 29, 16, "semi", `fill="${color}"`)}`;
}

function route(x, y, steps, gap = 165) {
  const first = x + 24;
  const last = x + (steps.length - 1) * gap + 24;
  const line = `<path d="M${first} ${y + 24} L${last} ${y + 24}" fill="none" stroke="${colors.line}" stroke-width="5" stroke-linecap="round"/>`;
  const nodes = steps.map((step, index) => {
    const cx = x + index * gap + 24;
    const fill = index % 2 === 0 ? colors.orange : colors.teal;
    return `
      <circle cx="${cx}" cy="${y + 24}" r="26" fill="${fill}"/>
      <circle cx="${cx}" cy="${y + 24}" r="13" fill="${colors.white}"/>
      ${text(String(index + 1).padStart(2, "0"), cx - 11, y + 30, 13, "semi", `fill="${fill}"`)}
      <text x="${cx}" y="${y + 78}" text-anchor="middle" font-size="15" class="semi">${escapeXml(step)}</text>`;
  }).join("\n");
  return `${line}\n${nodes}`;
}

function card(x, y, w, h, title, copy, accent = colors.teal) {
  return `
    ${rect(x, y, w, h, colors.white, 12, colors.line)}
    ${rect(x, y, 7, h, accent, 7)}
    ${text(title, x + 28, y + 44, 22, "h2")}
    ${multiline(wrap(copy, 34), x + 28, y + 78, 15, "body", 1.45)}`;
}

function table(x, y, w, rowH, cols, rows, dark = false) {
  const colW = w / cols.length;
  const bg = dark ? "rgba(255,255,255,.08)" : colors.white;
  const stroke = dark ? "rgba(255,255,255,.18)" : colors.line;
  const headerFill = dark ? "rgba(255,255,255,.13)" : colors.blue;
  const headerText = dark ? colors.white : colors.white;
  let out = `${rect(x, y, w, rowH * (rows.length + 1), bg, 10, stroke)}`;
  cols.forEach((col, i) => {
    out += `${rect(x + colW * i, y, colW, rowH, headerFill, i === 0 ? 10 : 0)}
      ${text(col, x + colW * i + 18, y + 31, 14, "semi", `fill="${headerText}"`)}`;
  });
  rows.forEach((row, ri) => {
    row.forEach((cell, ci) => {
      const cx = x + colW * ci;
      const cy = y + rowH * (ri + 1);
      out += `<line x1="${cx}" y1="${cy}" x2="${cx + colW}" y2="${cy}" stroke="${stroke}" stroke-width="1"/>`;
      if (ci > 0) out += `<line x1="${cx}" y1="${cy}" x2="${cx}" y2="${cy + rowH}" stroke="${stroke}" stroke-width="1"/>`;
      out += multiline(wrap(cell, 22), cx + 18, cy + 29, 13, dark ? "mutedWhite" : "body", 1.25);
    });
  });
  return out;
}

function routeMap(x, y) {
  return `
    <path d="M${x} ${y + 120} C${x + 140} ${y + 20}, ${x + 260} ${y + 210}, ${x + 390} ${y + 80} S${x + 610} ${y + 36}, ${x + 760} ${y + 150}" fill="none" stroke="${colors.teal}" stroke-width="6" stroke-linecap="round" stroke-dasharray="12 16"/>
    <circle cx="${x}" cy="${y + 120}" r="18" fill="${colors.orange}"/>
    <circle cx="${x + 220}" cy="${y + 138}" r="18" fill="${colors.teal}"/>
    <circle cx="${x + 390}" cy="${y + 80}" r="18" fill="${colors.orange}"/>
    <circle cx="${x + 585}" cy="${y + 88}" r="18" fill="${colors.teal}"/>
    <circle cx="${x + 760}" cy="${y + 150}" r="18" fill="${colors.orange}"/>`;
}

function emailSignature() {
  const hostedLogo = "https://remo-brand-manual.vercel.app/assets/remo-logo-vectorizado-negro.png";
  return `
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>Firma de correo | Remo Group S.A.S.</title>
  </head>
  <body style="margin:0;padding:24px;background:#F3F6F8;font-family:Poppins,Arial,sans-serif;color:#1F2933;">
    <table role="presentation" cellpadding="0" cellspacing="0" style="width:620px;max-width:100%;background:#FFFFFF;border-collapse:collapse;border:1px solid #DDE6EA;">
      <tr>
        <td style="width:14px;background:#C06025;"></td>
        <td style="width:6px;background:#5EA0AB;"></td>
        <td style="padding:24px 26px 22px 26px;">
          <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="width:185px;vertical-align:top;padding-right:24px;border-right:1px solid #DDE6EA;">
                <img src="${hostedLogo}" alt="Remo Group" width="154" style="display:block;width:154px;height:auto;border:0;">
                <p style="margin:18px 0 0 0;font-size:12px;line-height:1.45;color:#083B4A;font-weight:700;">Internacionalización con estrategia, operación y respaldo.</p>
              </td>
              <td style="vertical-align:top;padding-left:24px;">
                <p style="margin:0;font-size:18px;line-height:1.15;font-weight:700;color:#1F2933;">Nombre Apellido</p>
                <p style="margin:4px 0 12px 0;font-size:13px;line-height:1.4;color:#C06025;font-weight:700;">Cargo / Área</p>
                <p style="margin:0 0 6px 0;font-size:12px;line-height:1.45;color:#52616B;">info@remogroup.com.co</p>
                <p style="margin:0 0 6px 0;font-size:12px;line-height:1.45;color:#52616B;">Teléfono: Pendiente de validación directiva</p>
                <p style="margin:0 0 14px 0;font-size:12px;line-height:1.45;color:#52616B;">www.remogroup.com.co</p>
                <p style="margin:0;font-size:11px;line-height:1.45;color:#71808A;">Conecta, cruza y escala.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function businessCard() {
  return svg(1600, 900, "Tarjeta corporativa Remo", `
    ${rect(0, 0, 1600, 900, colors.mist)}
    ${rect(90, 150, 680, 420, colors.white, 18, colors.line)}
    ${rect(90, 150, 20, 420, colors.orange, 10)}
    ${rect(110, 150, 8, 420, colors.teal)}
    ${logo(logoBlack, 150, 210, 250, 95)}
    ${text("Nombre Apellido", 150, 365, 34, "h2")}
    ${text("Cargo / Área", 150, 405, 18, "semi", `fill="${colors.orange}"`)}
    ${text("info@remogroup.com.co", 150, 470, 17, "body")}
    ${text("Teléfono: Pendiente de validación directiva", 150, 502, 17, "body")}
    ${text("www.remogroup.com.co", 150, 534, 17, "semi", `fill="${colors.blue}"`)}
    ${rect(650, 455, 74, 74, colors.mist, 8, colors.line)}
    ${text("QR", 674, 500, 18, "semi", `fill="${colors.teal}"`)}

    ${rect(830, 150, 680, 420, colors.blue, 18)}
    ${logo(logoWhite, 900, 230, 290, 105)}
    <image href="${symbolColor}" x="1192" y="120" width="280" height="340" opacity=".18"/>
    ${route(915, 420, ["Diagnóstico", "Ruta", "Operación"], 170)}
    ${text("Internacionalización con estrategia, operación y respaldo.", 900, 535, 22, "semi", `fill="${colors.white}"`)}
    ${text("Campos editables para contacto y QR.", 90, 650, 18, "body")}
    ${text("No usar datos no confirmados. Marcar como pendiente de validación directiva.", 830, 650, 18, "body")}
  `);
}

function proposal() {
  return svg(1600, 900, "Propuesta comercial Remo", `
    ${rect(0, 0, 1600, 900, colors.white)}
    ${rect(0, 0, 520, 900, colors.blue)}
    <image href="${symbolColor}" x="210" y="455" width="360" height="430" opacity=".16"/>
    ${logo(logoWhite, 90, 72, 240, 92)}
    ${text("Propuesta comercial", 90, 252, 54, "h1 white")}
    ${multiline(["Internacionalización con", "estrategia, operación", "y respaldo."], 90, 320, 28, "white", 1.18)}
    ${rect(90, 700, 300, 64, colors.orange, 32)}
    ${text("Versión editable", 124, 740, 20, "semi", `fill="${colors.white}"`)}

    ${text("Cliente", 640, 140, 19, "micro")}
    ${text("Nombre de la empresa", 640, 190, 56, "h1")}
    ${text("Alcance", 640, 292, 19, "micro")}
    ${card(640, 330, 360, 170, "Ruta", "Diagnóstico, preparación, validación, conexión, operación y seguimiento.", colors.teal)}
    ${card(1030, 330, 360, 170, "Decisión", "Costos, riesgos, responsables, documentos, tiempos y próximos pasos.", colors.orange)}
    ${table(640, 560, 750, 58, ["Módulo", "Estado", "Pendiente"], [
      ["Comercial", "Por validar", "Alcance y responsables"],
      ["Operativo", "Por validar", "Documentos, tiempos y costos"],
      ["Financiero", "Por validar", "Seguros, caja y riesgos"],
    ])}
  `);
}

function onePager() {
  return svg(1080, 1350, "One pager Remo", `
    ${rect(0, 0, 1080, 1350, colors.white)}
    ${rect(0, 0, 1080, 170, colors.blue)}
    ${logo(logoWhite, 70, 46, 210, 80)}
    ${text("One pager institucional", 70, 268, 58, "h1")}
    ${multiline(["Remo internacionaliza compañías con estrategia, operación y respaldo.", "Una ruta integrada para vender, comprar, mover y crecer fuera del mercado local."], 70, 326, 25, "body", 1.35)}
    ${routeMap(150, 455)}
    ${card(70, 690, 450, 180, "Qué hacemos", "Acompañamos importación, exportación, abastecimiento, conexión comercial, operación logística y respaldo financiero.", colors.teal)}
    ${card(560, 690, 450, 180, "Para quién", "Pymes, empresas productivas, comercializadoras, aliados institucionales y programas empresariales.", colors.orange)}
    ${card(70, 910, 450, 180, "Cómo trabajamos", "Diagnóstico, preparación, validación, conexión, operación, seguimiento y escala.", colors.orange)}
    ${card(560, 910, 450, 180, "Qué validar", "Cifras, casos, cobertura, equipo, condiciones legales y contacto oficial.", colors.teal)}
    ${rect(70, 1160, 940, 88, colors.mist, 12)}
    ${text("CTA", 105, 1214, 16, "micro")}
    ${text("Agenda un diagnóstico de internacionalización.", 168, 1215, 28, "h2")}
  `);
}

function diagnostic() {
  return svg(1080, 1350, "Diagnóstico de internacionalización Remo", `
    ${rect(0, 0, 1080, 1350, colors.mist)}
    ${logo(logoBlack, 70, 58, 220, 82)}
    ${text("Diagnóstico de", 70, 210, 58, "h1")}
    ${text("internacionalización", 70, 270, 58, "h1")}
    ${text("Mide preparación, viabilidad operativa y claridad de ruta antes de ejecutar.", 70, 325, 24, "body")}
    ${rect(70, 405, 940, 76, colors.blue, 12)}
    ${text("Empresa / Producto / Mercado objetivo / Responsable", 100, 452, 22, "semi", `fill="${colors.white}"`)}
    ${table(70, 530, 940, 80, ["Eje", "Preguntas clave", "Estado"], [
      ["Producto", "Ficha técnica, requisitos, empaque, capacidad y diferenciación.", "Pendiente"],
      ["Mercado", "Cliente, canal, competencia, precio y validación comercial.", "Pendiente"],
      ["Regulación", "Documentos, permisos, aranceles, normas y certificaciones.", "Pendiente"],
      ["Logística", "Ruta, tiempos, Incoterm, embalaje, bodega y trazabilidad.", "Pendiente"],
      ["Finanzas", "Costos, caja, seguros, financiación, riesgo y margen.", "Pendiente"],
      ["Ejecución", "Responsables, proveedores, cronograma y control de avances.", "Pendiente"],
    ])}
    ${rect(70, 1118, 940, 120, colors.white, 12, colors.line)}
    ${text("Resultado recomendado", 100, 1164, 22, "h2")}
    ${text("Ruta clara / Operación viable / Pendiente de validación directiva", 100, 1208, 21, "body")}
  `);
}

function progressReport() {
  return svg(1600, 900, "Informe de avance Remo", `
    ${rect(0, 0, 1600, 900, colors.white)}
    ${rect(0, 0, 1600, 102, colors.blue)}
    ${logo(logoWhite, 72, 26, 185, 70)}
    ${text("Informe de avance", 340, 66, 34, "h2 white")}
    ${text("Cliente / Ruta / Periodo", 1190, 65, 17, "mutedWhite")}
    ${card(70, 160, 330, 150, "Avance", "Estado general de la ruta, hitos cumplidos y próximos bloqueos a resolver.", colors.teal)}
    ${card(430, 160, 330, 150, "Riesgos", "Documentos, costos, tiempos, proveedores, caja y condiciones no validadas.", colors.orange)}
    ${card(790, 160, 330, 150, "Decisiones", "Validaciones directivas requeridas para continuar sin improvisación.", colors.teal)}
    ${card(1150, 160, 330, 150, "Siguiente paso", "Acción recomendada, responsable, fecha y evidencia esperada.", colors.orange)}
    ${table(70, 380, 880, 62, ["Hito", "Estado", "Evidencia", "Responsable"], [
      ["Diagnóstico", "En curso", "Checklist", "Equipo Remo"],
      ["Costos", "Pendiente", "Matriz validada", "Dirección"],
      ["Operación", "Pendiente", "Cronograma", "Operaciones"],
      ["Seguimiento", "Pendiente", "Indicadores", "Comercial"],
    ])}
    ${rect(1010, 380, 470, 330, colors.mist, 14)}
    ${text("Ruta visual", 1050, 440, 30, "h2")}
    ${route(1070, 520, ["Diagnóstico", "Preparación", "Operación"], 150)}
    ${text("Cifras, fechas e indicadores: pendiente de validación directiva.", 1050, 675, 17, "body")}
  `);
}

function marketSheet() {
  return svg(1080, 1350, "Ficha de mercado Remo", `
    ${rect(0, 0, 1080, 1350, colors.white)}
    ${rect(0, 0, 1080, 220, colors.blue)}
    ${logo(logoWhite, 70, 54, 210, 82)}
    ${text("Ficha de mercado", 70, 320, 58, "h1")}
    ${text("País / Categoría / Segmento / Canal", 70, 372, 24, "body")}
    ${rect(70, 445, 300, 150, colors.mist, 14, colors.line)}
    ${text("Mercado objetivo", 100, 500, 22, "h2")}
    ${text("Pendiente de validación", 100, 546, 18, "body")}
    ${rect(390, 445, 300, 150, colors.sand, 14, colors.line)}
    ${text("Canal", 420, 500, 22, "h2")}
    ${text("Distribuidor / directo", 420, 546, 18, "body")}
    ${rect(710, 445, 300, 150, colors.mist, 14, colors.line)}
    ${text("Nivel de ajuste", 740, 500, 22, "h2")}
    ${text("Alto / Medio / Bajo", 740, 546, 18, "body")}
    ${table(70, 665, 940, 76, ["Variable", "Lectura", "Implicación"], [
      ["Cliente", "Perfil de comprador, necesidad, canal y criterio de decisión.", "Ajustar oferta y mensaje"],
      ["Requisito", "Normas, permisos, certificaciones, etiquetado o registro.", "Validar antes de vender"],
      ["Precio", "Rango, moneda, margen, impuestos y costos logísticos.", "Definir viabilidad"],
      ["Competencia", "Actores, sustitutos, propuesta y diferenciación.", "Priorizar argumento"],
      ["Ruta comercial", "Prospección, ferias, aliados, compradores y cierre.", "Ordenar siguiente paso"],
    ])}
    ${rect(70, 1140, 940, 104, colors.blue, 12)}
    ${text("Conclusión ejecutiva", 100, 1185, 24, "h2 white")}
    ${text("Información no identificada; se recomienda validar con el equipo directivo de Remo.", 100, 1225, 18, "mutedWhite")}
  `);
}

function costSheet() {
  return svg(1080, 1350, "Ficha de costos Remo", `
    ${rect(0, 0, 1080, 1350, colors.mist)}
    ${logo(logoBlack, 70, 58, 220, 82)}
    ${text("Ficha de costos", 70, 224, 62, "h1")}
    ${text("Estructura base para estimar operación, caja, seguros, riesgos y margen.", 70, 284, 23, "body")}
    ${rect(70, 370, 940, 90, colors.blue, 12)}
    ${text("Incoterm / Origen / Destino / Moneda / TRM / Fecha", 105, 426, 24, "semi", `fill="${colors.white}"`)}
    ${table(70, 520, 940, 70, ["Concepto", "Base", "Valor", "Validación"], [
      ["Producto", "FOB / EXW / proveedor", "Pendiente", "Dirección"],
      ["Flete internacional", "Modo, ruta y volumen", "Pendiente", "Operaciones"],
      ["Seguro", "Cobertura y valor asegurado", "Pendiente", "Financiero"],
      ["Impuestos", "Arancel, IVA, tasas", "Pendiente", "Comercio exterior"],
      ["Nacionalización", "Agente, documentos, inspecciones", "Pendiente", "Operaciones"],
      ["Transporte local", "Origen/destino, bodega, entrega", "Pendiente", "Operaciones"],
      ["Margen y caja", "Precio, financiación, plazo", "Pendiente", "Dirección"],
    ])}
    ${rect(70, 1110, 940, 110, colors.white, 12, colors.line)}
    ${text("Regla de uso", 100, 1155, 23, "h2")}
    ${text("No presentar costos como definitivos sin fuente, fecha, moneda e Incoterm validado.", 100, 1196, 19, "body")}
  `);
}

function pitchDeck() {
  return svg(1600, 900, "Pitch deck Remo", `
    ${rect(0, 0, 1600, 900, colors.blue)}
    <image href="${symbolColor}" x="1010" y="70" width="470" height="570" opacity=".22"/>
    ${logo(logoWhite, 86, 66, 250, 94)}
    ${text("Remo Group S.A.S.", 86, 255, 76, "h1 white")}
    ${multiline(["Infraestructura estratégica para", "internacionalizar pymes latinoamericanas."], 86, 335, 34, "mutedWhite", 1.18)}
    ${rect(86, 535, 520, 72, colors.orange, 36)}
    ${text("Estrategia · Operación · Respaldo", 130, 581, 24, "semi", `fill="${colors.white}"`)}
    ${rect(780, 620, 660, 120, "rgba(255,255,255,.08)", 14, "rgba(255,255,255,.18)")}
    ${text("Datos de inversión, tracción, mercado y equipo:", 820, 672, 24, "semi", `fill="${colors.white}"`)}
    ${text("Pendiente de validación directiva", 820, 714, 20, "mutedWhite")}
    ${route(860, 450, ["Problema", "Sistema", "Escala"], 210)}
  `);
}

function dataRoom() {
  const folders = [
    ["01", "Marca y estrategia"],
    ["02", "Legal y gobierno"],
    ["03", "Comercial y ventas"],
    ["04", "Operación y logística"],
    ["05", "Finanzas y riesgo"],
    ["06", "Aliados e inversión"],
  ];
  return svg(1600, 900, "Data room visual Remo", `
    ${rect(0, 0, 1600, 900, colors.white)}
    ${logo(logoBlack, 74, 56, 220, 82)}
    ${text("Data room visual", 74, 202, 60, "h1")}
    ${text("Estructura de carpetas para inversionistas, aliados y gobierno de marca.", 74, 258, 24, "body")}
    ${folders.map((folder, i) => {
      const col = i % 3;
      const row = Math.floor(i / 3);
      const x = 74 + col * 500;
      const y = 350 + row * 220;
      const accent = i % 2 === 0 ? colors.teal : colors.orange;
      return `
        ${rect(x, y, 420, 145, colors.mist, 14, colors.line)}
        ${rect(x, y, 420, 44, accent, 14)}
        ${text(folder[0], x + 24, y + 32, 18, "semi", `fill="${colors.white}"`)}
        ${text(folder[1], x + 24, y + 94, 25, "h2")}
        ${text("Pendiente de validación directiva", x + 24, y + 124, 15, "body")}`;
    }).join("\n")}
    ${text("Controlar permisos, versiones y fuentes antes de compartir.", 74, 815, 20, "semi", `fill="${colors.blue}"`)}
  `);
}

function linkedInPost() {
  return svg(1200, 627, "Publicación LinkedIn Remo", `
    ${rect(0, 0, 1200, 627, colors.white)}
    ${rect(0, 0, 1200, 84, colors.blue)}
    ${logo(logoWhite, 54, 18, 168, 64)}
    ${text("LinkedIn / comercio exterior con método", 798, 52, 18, "mutedWhite")}
    ${text("Importar bien", 60, 190, 62, "h1")}
    ${text("empieza antes de comprar.", 60, 252, 62, "h1")}
    ${multiline(["Valida proveedores, documentos, costos, seguros y riesgos", "antes de comprometer caja o prometer tiempos."], 64, 325, 24, "body", 1.35)}
    ${rect(64, 445, 375, 58, colors.orange, 29)}
    ${text("Agenda un diagnóstico", 104, 482, 22, "semi", `fill="${colors.white}"`)}
    ${routeMap(665, 230)}
    <image href="${symbolColor}" x="880" y="320" width="230" height="280" opacity=".18"/>
  `);
}

function fairBanner() {
  return svg(1080, 1920, "Feria empresarial Remo", `
    ${rect(0, 0, 1080, 1920, colors.blue)}
    <image href="${symbolColor}" x="560" y="96" width="400" height="500" opacity=".2"/>
    ${logo(logoWhite, 80, 80, 260, 100)}
    ${text("Conecta,", 80, 380, 96, "h1 white")}
    ${text("cruza y", 80, 476, 96, "h1 white")}
    ${text("escala.", 80, 572, 96, "h1 white")}
    ${multiline(["Internacionalización con estrategia,", "operación y respaldo."], 84, 690, 34, "mutedWhite", 1.22)}
    ${rect(80, 875, 920, 360, "rgba(255,255,255,.08)", 24, "rgba(255,255,255,.18)")}
    ${text("Rutas para empresas", 130, 955, 34, "h2 white")}
    ${multiline(["Exportar", "Importar", "Abrir mercado", "Abastecerse", "Operar con trazabilidad", "Revisar costos y riesgos"], 135, 1028, 30, "mutedWhite", 1.45)}
    ${rect(80, 1330, 370, 370, colors.white, 18)}
    ${text("QR", 215, 1542, 62, "h1", `fill="${colors.teal}"`)}
    ${text("Agenda un diagnóstico", 510, 1470, 34, "h2 white")}
    ${text("Información de evento y contacto:", 510, 1532, 24, "mutedWhite")}
    ${text("Pendiente de validación directiva", 510, 1574, 24, "mutedWhite")}
    ${rect(0, 1850, 1080, 18, colors.orange)}
    ${rect(0, 1868, 1080, 10, colors.teal)}
  `);
}

function templatesReadme() {
  return `
# Kit operativo de marca Remo

Esta carpeta contiene plantillas descargables para convertir el manual de marca en un sistema de uso diario.

## Activos incluidos

${assets.map((asset) => `- ${asset.name}: \`${asset.file}\` (${asset.format})`).join("\n")}

## Reglas

- Usar el logo oficial embebido o reemplazarlo solo por una version validada por Remo.
- Mantener la paleta: #C06025, #5EA0AB, #083B4A, #1F2933, #FFFFFF, #F3F6F8 y #F6EFE7.
- Mantener Baloo Da 2 para titulares y Poppins para cuerpo.
- No presentar cifras, clientes, casos, contactos o condiciones no confirmadas.
- Todo dato faltante debe marcarse como: Pendiente de validacion directiva.
`;
}

function wrap(input, max) {
  const words = input.split(/\s+/);
  const lines = [];
  let current = "";
  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;
    if (next.length > max && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  });
  if (current) lines.push(current);
  return lines;
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
