import path from 'path';
import { fileURLToPath } from 'url';
import {
  leerArchivoComoString,
  escribirTextoEnArchivo
} from './src/utils/fileUtils.js';

import {
  transformarStringEnArrayDeNumeros,
  transformarArrayDeNumerosAUnSoloString,
  combinarDosArrays,
  combinarNArrays
} from './src/utils/transformUtils.js';

// Simula __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// leo los 4 archivos a memoria
const archivo1 = leerArchivoComoString(path.join(__dirname, 'in/10NumerosOrdenadosEntre1y50(setA).in'));
const archivo2 = leerArchivoComoString(path.join(__dirname, 'in/10NumerosOrdenadosEntre1y50(setB).in'));
const archivo3 = leerArchivoComoString(path.join(__dirname, 'in/paresOrdenadosEntre2y1000.in'));
const archivo4 = leerArchivoComoString(path.join(__dirname, 'in/imparesOrdenadosEntre1y999.in'));

// preparo los 4 arrays a partir de los archivos leídos
const array1 = transformarStringEnArrayDeNumeros(archivo1, ',');
const array2 = transformarStringEnArrayDeNumeros(archivo2, ',');
const array3 = transformarStringEnArrayDeNumeros(archivo3, ',');
const array4 = transformarStringEnArrayDeNumeros(archivo4, ',');

// combino los primeros dos arrays
const combinado2 = combinarDosArrays(array1, array2);
console.log('Combinado de los primeros dos arrays:', combinado2);

// combino los cuatro arrays
const combinado4 = combinarNArrays([array1, array2, array3, array4]);
console.log('Combinado de los cuatro arrays:', combinado4);

// escribo los resultados en archivos
escribirTextoEnArchivo(path.join(__dirname, 'out/combinado2.out'), transformarArrayDeNumerosAUnSoloString(combinado2, ','), true);
escribirTextoEnArchivo(path.join(__dirname, 'out/combinado.out'), transformarArrayDeNumerosAUnSoloString(combinado4, ','), true);
