/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:

   return string
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:

   let _resultAdd = x + y;
   return _resultAdd
}

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:

   let _resultSubstract = x - y;
   return _resultSubstract
}

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:

   let _resultDivide = x/y;
   return _resultDivide
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:

   let _resultProduct = x * y;
   return _resultProduct
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:

   let _resultModule = x % y;
   return _resultModule
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
