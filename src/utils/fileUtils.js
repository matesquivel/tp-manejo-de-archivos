import fs from 'fs';

/**
 * lee y devuelve el contenido de un archivo como texto en 'utf-8'
 * @param {string} ruta relativa al directorio del proyecto
 * @return {string} el texto leído
 */
export function leerArchivoComoString(ruta) {
  return fs.readFileSync(ruta, 'utf8');
}

/**
 * escribe el texto en el archivo de la ruta, sólo si tal archivo existe. sino, lanza error.
 * @param {string} ruta relativa al directorio del proyecto
 * @param {string} texto 
 * @param {boolean} shouldCreateIfNotExists 
 */
export function escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists) {
  if (fs.existsSync(ruta)) {
    fs.writeFileSync(ruta, texto, 'utf8');
  } else {
    if (shouldCreateIfNotExists) {
      fs.writeFileSync(ruta, texto, 'utf8');
    } else {
      throw new Error('el archivo no existe');
    }
  }
}
