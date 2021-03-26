// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  const array = [];
  for (const key in objeto) {
    array.push([key, objeto[key]]);
  }
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  const array = string.split('');
  const object = {};
  while (array.length > 0) {
    const letter = array.shift();
    object[letter] = 1;
    for (let i = 0; i < array.length; i++) {
      const index = array.indexOf(letter);
      if(index !== -1) {
        object[letter] += 1;
        array.splice(index, 1);
      }
    }
  }
  return object;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  const array = s.split('');
  const indexArray = [];
  const upperCaseArray = [];
  array.forEach((element, index) => {
    if(element === element.toUpperCase()) {
      upperCaseArray.push(element);
      indexArray.push(index);
    }
  });
  indexArray.reverse();
  indexArray.forEach(element => {
    array.splice(element, 1);
  })
  return upperCaseArray.concat(array).join('');
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  const array = str.split(' ');
  const newArray = [];
  array.forEach(element => {
    const innerArray = element.split('');
    innerArray.reverse();
    newArray.push(innerArray.join(''));
  });
  return newArray.join(' ');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  const numberString = numero.toString();
  const array = numberString.split('');
  array.reverse();
  const reversedString = array.join('');
  if(numberString === reversedString) {
    return 'Es capicua';
  } else {
    return 'No es capicua';
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  const array = cadena.split('');
  return array.reduce((acc, act) => {
    if(act !== 'a' && act !== 'b' && act !== 'c') {
      return acc + act;
    } else return acc
  }, '');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  const wordsLength = [];
  const newArray = [];
  arr.forEach(element => {
    wordsLength.push(element.length);
  });
  while (arr.length > 0) {
    const min = Math.min.apply(null, wordsLength);
    const index = wordsLength.indexOf(min);
      // if(index !== -1) {
        
      // }
    wordsLength.splice(index, 1);
    newArray.push(arr.splice(index, 1)[0]);
  }
  return newArray;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  const arreglo3 = [];
  arreglo1.forEach(element1 => {
    arreglo2.forEach(element2 => {
      if(element1 === element2) {
        arreglo3.push(element1);
      }
    });
  });
  return arreglo3;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

