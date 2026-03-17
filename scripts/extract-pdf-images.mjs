#!/usr/bin/env node
/**
 * Extrae cada página del PDF del simulacro OMNIBUS 18-03-2023 como imagen PNG
 * y la guarda en public/simulacro-omnibus-2023/ (pag-1.png, pag-2.png, ...).
 *
 * Requisito: tener instalado poppler (pdftoppm).
 *   macOS:  brew install poppler
 *   Ubuntu: sudo apt install poppler-utils
 */

import { createWriteStream, mkdirSync, existsSync } from "fs";
import { get as httpsGet } from "https";
import { spawnSync } from "child_process";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const PDF_URL =
  "https://de-pol.es/wp-content/uploads/2023/03/SIMULACRO_PSICOTECNICOS_OMNIBUS_18_DE_MARZO_DEPOL_Ingreso_2023.pdf";
const OUT_DIR = join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "public",
  "simulacro-omnibus-2023"
);
const TEMP_PDF = join(dirname(fileURLToPath(import.meta.url)), "..", "tmp-simulacro.pdf");

function download(url) {
  return new Promise((resolve, reject) => {
    const file = createWriteStream(TEMP_PDF);
    const u = new URL(url);
    const opts = {
      hostname: u.hostname,
      path: u.pathname,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    };
    httpsGet(url, opts, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }
      res.pipe(file);
      file.on("finish", () => {
        file.close();
        resolve();
      });
    }).on("error", (err) => {
      try {
        require("fs").unlinkSync(TEMP_PDF);
      } catch (_) {}
      reject(err);
    });
  });
}

function extractWithPoppler(pdfPath, outDir) {
  const prefix = join(outDir, "pag");
  const r = spawnSync("pdftoppm", ["-png", "-r", "150", pdfPath, prefix], {
    stdio: "inherit",
  });
  if (r.status !== 0) {
    throw new Error("pdftoppm falló. ¿Tienes poppler instalado? (brew install poppler)");
  }
  // pdftoppm genera pag-1.png, pag-2.png, ...
}

async function main() {
  console.log("Descargando PDF...");
  mkdirSync(OUT_DIR, { recursive: true });
  await download(PDF_URL);
  console.log("Extrayendo páginas como imágenes (pdftoppm)...");
  extractWithPoppler(TEMP_PDF, OUT_DIR);
  const { unlinkSync } = await import("fs");
  try {
    unlinkSync(TEMP_PDF);
  } catch (_) {}
  console.log("Hecho. Imágenes en:", OUT_DIR);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
