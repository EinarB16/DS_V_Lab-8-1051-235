
// 1. Suma de tres valores
function calcularSuma() {
    let num1 = parseFloat(document.getElementById("suma1").value);
    let num2 = parseFloat(document.getElementById("suma2").value);
    let num3 = parseFloat(document.getElementById("suma3").value);
    let resultadoP = document.getElementById("resultadoSuma");

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        resultadoP.textContent = "Por favor, ingresa los tres números.";
        return;
    }

    let sumaTotal = num1 + num2 + num3;
    resultadoP.textContent = `La suma de los valores ingresados es: ${sumaTotal}`;
}

// 2. Cuadrado de un número
function calcularCuadrado() {
    let numero = parseFloat(document.getElementById("numCuadrado").value);
    let resultadoP = document.getElementById("resultadoCuadrado");

    if (isNaN(numero)) {
        resultadoP.textContent = "Por favor, ingresa un número válido.";
        return;
    }

    let cuadrado = numero * numero;
    resultadoP.textContent = `El cuadrado de ${numero} es: ${cuadrado}`;
}

// 3. Promedio de calificaciones
function calcularPromedio() {
    let cal1 = parseFloat(document.getElementById("calif1").value);
    let cal2 = parseFloat(document.getElementById("calif2").value);
    let cal3 = parseFloat(document.getElementById("calif3").value);
    let resultadoP = document.getElementById("resultadoPromedio");

    if (isNaN(cal1) || isNaN(cal2) || isNaN(cal3)) {
        resultadoP.textContent = "Por favor, Ingrese las tres calificaciones.";
        return;
    }

    let promedio = (cal1 + cal2 + cal3) / 3;
    resultadoP.textContent = `El promedio es: ${promedio.toFixed(2)} puntos`;
}

// 4. Conversión de unidades (metros)
function convertirUnidades() {
    let metros = parseFloat(document.getElementById("valorMetros").value);
    let resultadoP = document.getElementById("resultadoConversion");

    if (isNaN(metros)) {
        resultadoP.textContent = "Por favor, ingresa un valor en metros.";
        return;
    }

    let centimetros = metros * 100;
    let kilometros = metros / 1000;
    resultadoP.textContent = `${metros} metros equivalen a ${centimetros.toLocaleString()} centímetros y ${kilometros} kilómetros.`;
}

// 5. Comparación de dos valores
function compararValores() {
    let n1 = parseFloat(document.getElementById("comp1").value);
    let n2 = parseFloat(document.getElementById("comp2").value);
    let resultadoP = document.getElementById("resultadoComparacion");

    if (isNaN(n1) || isNaN(n2)) {
        resultadoP.textContent = "Por favor, ingresa ambos números.";
        return;
    }

    let mayor, menor;
    if (n1 > n2) {
        mayor = n1;
        menor = n2;
    } else if (n2 > n1) {
        mayor = n2;
        menor = n1;
    } else {
        resultadoP.textContent = `Ambos números son iguales (${n1}). Su diferencia es 0.`;
        return;
    }

    let diferencia = Math.abs(mayor - menor);
    resultadoP.textContent = `El número mayor es ${mayor}, el menor es ${menor}, y su diferencia es ${diferencia}.`;
}
