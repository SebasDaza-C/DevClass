// OPERADORES ARITMETICOS

let perros = 3
let gatos = 2

let totalMascotas = perros + gatos
console.log(totalMascotas)

let ingresos = 10000
let gastos = 8000

let dineroSobrante = ingresos - gastos
console.log(dineroSobrante);

let valorProducto = 4000
let unidadesVendidas = 27

let gananciaTotal = valorProducto * unidadesVendidas
console.log(gananciaTotal);


let capital = 5000000
let hijos = 5

let dineroPorHijo = capital / hijos
console.log(dineroPorHijo);

let porciones = 8
let familia = 3

let porcionesPorMiembro = porciones % familia
console.log(porcionesPorMiembro);

// OPERADORES DE ASIGNACION

perros += 4
console.log(perros);

ingresos -= 3000
console.log(ingresos);

valorProducto *= unidadesVendidas
console.log(valorProducto);

capital /= hijos
console.log(capital);

porciones %= familia
console.log(porciones);

// OPERADORES DE COMPARACION

let persona = 18
let mayoriaDeEdad = 18

let entraALaFiesta

entraALaFiesta = persona > mayoriaDeEdad
console.log(entraALaFiesta);

entraALaFiesta = persona < mayoriaDeEdad
console.log(entraALaFiesta);

entraALaFiesta = persona >= mayoriaDeEdad
console.log(entraALaFiesta);

entraALaFiesta = persona <= mayoriaDeEdad
console.log(entraALaFiesta);

entraALaFiesta = persona == mayoriaDeEdad
console.log(entraALaFiesta);

entraALaFiesta = persona === mayoriaDeEdad
console.log(entraALaFiesta);

// OPERADORES LOGICOS

let edad1 = 10
let genero = 'F'

// &&


let entra = edad1 >= mayoriaDeEdad && genero == 'M'
console.log(entra);

// ||

let entra1 = edad1 >= mayoriaDeEdad || genero == 'M'
console.log(entra1);

// !

entra1 = !entra1
console.log(entra1);
