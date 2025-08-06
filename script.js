// Una empresa de energía necesita simular la generación de una factura mensual simple. Para ello, deberás construir un sistema básico que calcule el valor a pagar por un cliente utilizando exclusivamente funciones sin parámetros, todas con retorno, y declaradas de diferentes formas: declarativas, de expresión y funciones flecha.

// Requerimientos
// Función declarativa que retorne el consumo mensual en kilovatios (por ejemplo, 410 kWh).
// Función declarativa que retorne la tarifa base por kilovatio (por ejemplo, 620 pesos por kWh).
// Función de expresión que retorne el cargo fijo por servicio (por ejemplo, 3500 pesos).
// Función de expresión que retorne el valor del IVA como porcentaje fijo (por ejemplo, 19).
// Función flecha que retorne el subtotal multiplicando consumo por tarifa.
// Función flecha que retorne el valor del IVA aplicado sobre el subtotal.
// Función flecha que retorne el total a pagar sumando subtotal, IVA y cargo fijo.
// Función final (de cualquier tipo, tú eliges) que imprima en consola todos los resultados con descripciones claras (consumo, tarifa, subtotal, IVA, cargo fijo y total).

// Condiciones
// Todas las funciones deben usar return.
// Ninguna función puede tener parámetros ni argumentos.
// Ninguna función debe usar objetos, arreglos, clases o this.
// Todas las funciones deben ser invocadas al menos una vez, y algunas pueden llamarse dentro de otras.
// Los valores deben estar definidos directamente dentro de las funciones.
// El enfoque del ejercicio es comparar la forma y el comportamiento de cada tipo de función.
// El proyecto debe estar en un repositorio de GitHub con une buena conveción de nomenclatura (Solo camlCase) y un commit por función


//funciones declarativas
function consumoMensual(){
    return 410;
}

function valorPorKilovatio(){
    return 620;
}

//funciones de expresión

let cargoFijo= function(){
    return 3500;
}

let iva = function(){
    return 0.19
}

let subtotalConsumo= () =>{
    return consumoMensual()* valorPorKilovatio();
}

console.log(subtotalConsumo())

let subtotalConIva=() =>{
    let totalIva= subtotalConsumo() * iva();
    //let total= subtotalConsumo() + totalIva;
    return totalIva;
}
console.log(subtotalConIva());

let totalFactura= () =>{
    return subtotalConsumo() +subtotalConIva ()+ cargoFijo();
}
console.log(totalFactura())