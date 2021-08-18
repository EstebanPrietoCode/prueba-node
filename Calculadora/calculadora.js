// importar modulos
var sumar = require ('./Funciones/sumar');
var restar = require ('./Funciones/restar');
var dividir = require ('./Funciones/dividir');
var multiplicar = require ('./Funciones/multiplicar');

// variables
var numA = 20
var numB = 5
var array = []

// operaciones
var resultado_suma = sumar (numA,numB)
var resultado_resta = restar (numA,numB)
var resultado_dividir = dividir (numA,numB)
var resultado_multiplicar = multiplicar (numA,numB)


// Mostrar resultados en consola
console.log ("El resultado de la suma de " + numA + "+" + numB + " es:" +resultado_suma);
console.log ("El resultado de la resta de " + numA + "-" + numB + " es:" +resultado_resta);
console.log ("El resultado de la división de " + numA + "/" + numB + " es:" +resultado_dividir);
console.log ("El resultado de la multiplicación de " + numA + "*" + numB + " es:" +resultado_multiplicar);