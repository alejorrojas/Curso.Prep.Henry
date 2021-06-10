// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
   return array[0];

}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array.pop();

}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;

}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  for (let i = 0 ; i<array.length; i++){
    
    array[i] = array[i] + 1; 

  }

  return array;

}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  array.push(elemento);

  return array;

}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  array.unshift(elemento);

  return array; 

}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:


  return palabras.join(" ");

}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var i = 0;
  var filter;

  do{

    i++;

    filter = array[i]

    if(filter === elemento){

      return true;

    }
    else {

      return false;
    }

  }while ( !(filter === elemento) )

}


function agregarNumeros(numeros) {
  

  var suma = 0;
  var array = numeros;



  for (var i = 0; i<array.length; i++) {

    suma = suma + array[i]

  }

  return suma;

}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  var suma = 0;
  var array = resultadosTest;
  var promedio;



  for (var i = 0; i<array.length; i++) {

    suma = suma + array[i];
  
  }

  var promedio = suma / array.length;

  return promedio;



}


function numeroMasGrande(numeros) {
  
  var valores = numeros; 
  var filter = [];

  for(let i = 0; i<valores.length; i++){

    if(filter < valores[i] ){

      filter = valores[i]

    }

  

  }
  
  return filter; 
 

}


function multiplicarArgumentos() {
   
  var multiplicar = 1; 

  if(arguments.length == 0){

    return 0; 

  }
  else{

    for(let i = 0; i<arguments.length; i++){

      multiplicar = multiplicar * arguments[i];

    }  

  }

  return multiplicar;

}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  var filtrados; 

  function es18 (elemento) {

    return elemento > 18; 

  }

  filtrados = arreglo.filter(es18);

  return filtrados.length;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   


  if( numeroDeDia === 1 || numeroDeDia === 7){
    
    return "Es fin de semana";

  }
  else {

    return "Es dia Laboral";

  }
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var number = n;
  var string = number + "";

  if (string[0] == 9){

    return true; 

  }
  else{
    return false;
  }

}



function todosIguales(arreglo) {

  for (let i = 0; i<arreglo.length - 1; i++) {
    
    if(arreglo[i] === arreglo[i+1]){
      return true;
    }

return false;

  }

}


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  var meses = [];

  for (var i = 0; i < array.length; i++) {
    
    if ( array[i] == "Enero" || array[i] == "Marzo"  || array[i] == "Noviembre"){

      meses.push(array[i])

    }

  }

  if(meses.length < 3){

    return "No se encontraron los meses pedidos"

  }

  return meses;

}
  



function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  var valores = [];

  for(let i = 0; i<array.length; i++){

    if(array[i] > 100){

      valores.push(array[i])

    }

  }

  return valores; 

}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var suma = numero; 
  var array = [];



  for(var i = 0; i<10; i++){

    suma = suma + 2;
    array.push(suma)

    if( suma === i ){
    
      break;

    }

  }
  if( suma < 10 ){
    
    return "Se interrumpió la ejecución";

  }

return array;

}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  var suma = numero; 
  var array = [];



  for(var i = 0; i<9; i++){

    suma = suma + 2;
    array.push(suma) 
    
    if(i === 5){
      
      continue;

    }

  }


console.log(array);
return array;

 }






// No modificar nada debajo de esta línea
// --------------------------------

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
  mayorACien,
  breakStatement,
  continueStatement
};
