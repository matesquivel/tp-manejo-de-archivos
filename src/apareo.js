/**
 * toma dos arrays de números ordenados y en forma eficiente los combina en uno solo, aún ordenado
 * @param {number[]} arrA un array de números ordenados
 * @param {number[]} arrB otro array de números ordenados
 * @returns {number[]} un nuevo array de números ordenados
 */
export function combinarDosArrays(arrA, arrB) {
    const resultado = [];
    let i = 0;
    let j = 0;
  
    while (i < arrA.length && j < arrB.length) {
      if (arrA[i] < arrB[j]) {
        resultado.push(arrA[i]);
        i++;
      } else if (arrB[j] < arrA[i]) {
        resultado.push(arrB[j]);
        j++;
      } else {
        // Evita duplicados
        resultado.push(arrA[i]);
        i++;
        j++;
      }
    }
  
    while (i < arrA.length) {
      resultado.push(arrA[i]);
      i++;
    }
  
    while (j < arrB.length) {
      resultado.push(arrB[j]);
      j++;
    }
  
    return resultado;
  }
  
  /**
   * toma un array de muchos arrays de números ordenados y los combina en uno solo, aún ordenado
   * @param {number[][]} arrs el array de arrays de números que quiero combinar
   * @returns {number[]} el nuevo array de números ordenados
   */
  export function combinarNArrays(arrs) {
    let resultado = [];
  
    for (let i = 0; i < arrs.length; i++) {
      resultado = combinarDosArrays(resultado, arrs[i]);
    }
  
    return resultado;
  }
  