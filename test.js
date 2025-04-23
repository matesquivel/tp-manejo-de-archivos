import path from 'path';
import { fileURLToPath } from 'url';
import {
  leerArchivoComoString,
  escribirTextoEnArchivo
} from './src/utils/fileUtils.js';

import {
  transformarStringEnArrayDeNumeros,
  transformarArrayDeNumerosAUnSoloString
} from './src/utils/transformUtils.js';

import {
  combinarDosArrays,
  combinarNArrays
} from './src/apareo.js';

// para usar __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// === PRUEBA DE FUNCIONES ===

console.log("== Test: leerArchivoComoString ==");
const texto = leerArchivoComoString(path.join(__dirname, 'in/10NumerosOrdenadosEntre1y50(setA).in'));
console.log(texto);

console.log("\n== Test: transformarStringEnArrayDeNumeros ==");
const array = transformarStringEnArrayDeNumeros(texto, ',');
console.log(array);

console.log("\n== Test: transformarArrayDeNumerosAUnSoloString ==");
const textoReconstruido = transformarArrayDeNumerosAUnSoloString(array, ',');
console.log(textoReconstruido);

console.log("\n== Test: escribirTextoEnArchivo ==");
const rutaSalida = path.join(__dirname, 'out/test-salida.txt');
escribirTextoEnArchivo(rutaSalida, textoReconstruido, true);
console.log("Archivo escrito:", rutaSalida);

console.log("\n== Test: combinarDosArrays ==");
const combinado2 = combinarDosArrays([1, 5, 10], [2, 3, 8, 11]);
console.log(combinado2); // [1, 2, 3, 5, 8, 10, 11]

console.log("\n== Test: combinarNArrays ==");
const combinadoN = combinarNArrays([[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]]);
console.log(combinadoN); // [1, 2, 3, 4, 6, 7, 10, 13, 15, 16]
