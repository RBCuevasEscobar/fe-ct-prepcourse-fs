/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:

   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:

   return array[array.length-1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:

   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:

   let _resultArray = [];

   for (let i = 0; i < array.length ; i++) {
      _resultArray.push(array[i] + 1);
   }
   return _resultArray;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:

  // return array.push(elemento);
   
   array[array.length] = elemento;
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:

   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:

   _allStringsArray = '';
   for (let i = 0; i < palabras.length; i++){
      if (i === palabras.length - 1) _allStringsArray = _allStringsArray + palabras[i];
      else _allStringsArray = _allStringsArray + palabras[i] + ' ';
   }
   return _allStringsArray;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:

   _indexArray = 0;
   _legthArray = array.length;
   do {
      if (array[_indexArray] === elemento) return true;
      _indexArray = _indexArray + 1;
   } while (_indexArray < _legthArray);
   return false;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:

   _sumElements = 0;
   for (let i = 0; i < arrayOfNums.length; i++) {
      _sumElements = _sumElements + arrayOfNums[i];
   }
   return _sumElements;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:

   _averageElements = 0;
   _sumElements = 0;
   for (let i = 0; i < resultadosTest.length; i++) {
      _sumElements = _sumElements + resultadosTest[i];
   }
   _averageElements = _sumElements / resultadosTest.length;
   return _averageElements;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:

   _biggerNumber = arrayOfNums[0];
   _lengthArray = arrayOfNums.length;
   for (let i = 1; i < _lengthArray; i++) {
      if (arrayOfNums[i] > _biggerNumber) _biggerNumber = arrayOfNums[i]; 
   }
   return _biggerNumber;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código: 

   _productArray = 1;
   _lengthArray = arguments.length;
   if (_lengthArray === 0) return 0;
   if (_lengthArray === 1) return arguments[0];
   for (let i = 0; i < _lengthArray; i++) {
      _productArray = _productArray * arguments[i];
   }
   return _productArray;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:

   _lengthArray = array.length;
   _elementsGreather18 = 0;
   for (let i = 0; i < _lengthArray; i++) {
      if (array[i] > 18) _elementsGreather18 = _elementsGreather18 + 1;
   }
   return _elementsGreather18;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:

   _weekendDays = [1, 7];
   _workingDays = [2, 3, 4, 5, 6]
   if (_weekendDays.includes(numeroDeDia)) return "Es fin de semana";
   if (_workingDays.includes(numeroDeDia)) return "Es dia laboral";
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:

   _strNumber = num.toString();
   if (num < 0 || !_strNumber.startsWith("9", 0)) return false;
   return true;
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:

   return array.every(function sameNumber(_number) {return _number === array[0];});
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:

   _monthsDesired = ['Enero','Marzo','Noviembre']
   _lengthArray = array.length;
   _returnedArray = [];
   if (!array.includes('Enero') || !array.includes('Marzo') || !array.includes('Noviembre')) return "No se encontraron los meses pedidos";
   for (let i = 0; i < _lengthArray; i++)
      if (_monthsDesired.includes(array[i])) _returnedArray.push(array[i]);
   return _returnedArray;
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   
   _sixProductTable = [];
   for (i = 0; i <= 10; i++) {
      _sixProductTable[i] = 6 * i;
   }
   return _sixProductTable;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:

   _valuesGreater100 = [];
   _lengthArray = array.length;
   for (i = 0; i < _lengthArray; i++) {
      if (array[i] > 100) _valuesGreater100.push(array[i]);
   }
   return _valuesGreater100;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:

   _additionByTwoTenTimes = [];
   _resultAddition = num;
   _breakFlag = false;
   for (_indexIteration = 0; _indexIteration < 10; _indexIteration++) {
      _resultAddition = _resultAddition + 2;
      _additionByTwoTenTimes[_indexIteration] = _resultAddition;
    if (_resultAddition === _indexIteration) {
      _breakFlag = true;
      break;
    }
   }
   if (_breakFlag) return "Se interrumpió la ejecución";
   return _additionByTwoTenTimes;
}


function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:

   _additionByTwoTenTimes = [];
   _resultAddition = num;
   _indexArray = 0;
   for (let _indexIteration = 0; _indexIteration < 10; _indexIteration++) {
      if (_indexIteration === 5) continue;
      else {
         _resultAddition = _resultAddition + 2;
         _additionByTwoTenTimes[_indexArray] = _resultAddition;
         _indexArray = _indexArray + 1;
      }
   }
   return _additionByTwoTenTimes;
}

console.log(continueStatement(-4))

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
