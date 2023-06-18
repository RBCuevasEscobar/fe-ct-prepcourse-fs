/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   return Object.entries(objeto);
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   let _newObject = {}
   let _sortedString = string.split('').sort().join('');
   let _arrayLength = _sortedString.length;
   for (let i = 0; i < _arrayLength; i++) {
      let _objectProperty = _sortedString[i];
      if (_newObject[_objectProperty]) {
         _newObject[_objectProperty] = _newObject[_objectProperty] + 1
      }
      else {
         _newObject[_objectProperty] = 1
      };
   }
   return _newObject; 
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   _lowerCaseString = '';
   _upperCaseString = '';
   _stringLength = string.length
   for (let i = 0; i < _stringLength; i++) {
      if (string[i] === string[i].toUpperCase()) _upperCaseString = _upperCaseString + string[i];
      else _lowerCaseString = _lowerCaseString + string[i];
   }
   return _upperCaseString + _lowerCaseString;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   let _newPhrase = '';
   let _phraseToArray = frase.split(' ');
   let _arrayLength = _phraseToArray.length
   for (let i = 0; i < _arrayLength; i++) {
      if (i < _arrayLength - 1) _newPhrase = _newPhrase + _phraseToArray[i].split('').reverse().join('') + ' '
      else _newPhrase = _newPhrase + _phraseToArray[i].split('').reverse().join('');
   }
   return _newPhrase;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   let _newNumber = numero.toString();
   let _reverseNumber = _newNumber.split('').reverse().join('');
   if (_newNumber === _reverseNumber) return "Es capicua";
   else return "No es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   _newString = '';
   _stringLength = string.length;
   for (let i = 0; i < _stringLength; i++) {
      if (string[i] != 'a' && string[i] != 'b' && string[i] != 'c') _newString = _newString + string[i];
   }
   return _newString;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   return arrayOfStrings.sort((a, b) => a.length - b.length);
   
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   let _array1Length = array1.length;
   let _array2Length = array2.length;
   let _intersectArray = [];
   let _intersectIndex = 0;

   for (let i = 0; i < _array1Length; i++) {
      if (array2.includes(array1[i])) {
         _intersectArray[_intersectIndex] = array1[i];
         _intersectIndex++
      }
   }
   
   for (let i = 0; i < _array2Length; i++) {
      if (array1.includes(array2[i]) && !_intersectArray.includes(array2[i])) {
            _intersectArray[_intersectIndex] = array2[i];
            _intersectIndex++
         }
   }

   return _intersectArray.sort();
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
