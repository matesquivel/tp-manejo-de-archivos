/**
 * separa el string ante cada ocurrencia del separador, y agrega al array resultado siempre que pueda
 * transformar al fragmento de string en número.
 * @param {string} str 
 * @param {string} separador
 * @returns {number[]} array de numeros
 */
export function transformarStringEnArrayDeNumeros(str, separador) {
    const partes = str.split(separador);
    const resultado = [];
  
    for (let parte of partes) {
      const numero = parseFloat(parte.trim());
      if (!isNaN(numero)) {
        resultado.push(numero);
      }
    }
  
    return resultado;
  }
  
  /**
   * concatena todos los numeros entre sí, intercalando un separador entre número y número.
   * @param {number[]} arr 
   * @param {string} separador 
   * @returns {string} el nuevo string
   */
  export function transformarArrayDeNumerosAUnSoloString(arr, separador) {
    return arr.join(separador);
  }
  
  /**
   * Combina dos arrays numéricos ordenados sin repetidos y devuelve uno nuevo también ordenado y sin repetidos.
   * @param {number[]} arr1 
   * @param {number[]} arr2 
   * @returns {number[]}
   */
  export function combinarDosArrays(arr1, arr2) {
    const resultado = [];
    let i = 0;
    let j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        resultado.push(arr1[i]);
        i++;
      } else if (arr2[j] < arr1[i]) {
        resultado.push(arr2[j]);
        j++;
      } else {
        resultado.push(arr1[i]);
        i++;
        j++;
      }
    }
  
    while (i < arr1.length) {
      resultado.push(arr1[i]);
      i++;
    }
  
    while (j < arr2.length) {
      resultado.push(arr2[j]);
      j++;
    }
  
    return resultado;
  }
  
  /**
   * Combina múltiples arrays numéricos ordenados sin repetidos en uno solo.
   * @param {number[][]} arrays 
   * @returns {number[]}
   */
  export function combinarNArrays(arrays) {
    let resultado = [];
  
    for (let i = 0; i < arrays.length; i++) {
      resultado = combinarDosArrays(resultado, arrays[i]);
    }
  
    return resultado;
  }
  