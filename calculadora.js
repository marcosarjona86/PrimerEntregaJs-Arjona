alert("Bienvenidos a una Calculadora muy muy muy basica")

let numero1 = prompt("Escribe tu primer numero");
let numero2 = prompt("Escribe tu segundo numero");

let operacion = prompt("¿Que operacion quieres realizar? \nSumar \nRestar \nMultiplicar \nDividir");

if (operacion == "sumar"){
    let resultado = parseInt(numero1) + parseInt(numero2)
    alert("El resultado es " + resultado)
};
if (operacion == "restar"){
    let resultado = parseInt(numero1) - parseInt(numero2)
    alert("El resultado es " + resultado)
};
if (operacion == "multiplicar"){
    let resultado = parseInt(numero1) * parseInt(numero2)
    alert("El resultado es " + resultado)
};
if (operacion == "dividir"){
    let resultado = parseInt(numero1) / parseInt(numero2)
    alert("El resultado es " + resultado)
};