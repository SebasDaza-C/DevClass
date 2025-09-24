# OPERADORES ARITMETICOS

perros = 3
gatos = 2

totalMascotas = perros + gatos
# print(totalMascotas)

ingresos = 10000
gastos = 8000

dineroSobrante = ingresos - gastos
# print(dineroSobrante)

valorProducto = 4000
unidadesVendidas = 27

gananciaTotal = valorProducto * unidadesVendidas

# print(gananciaTotal)

capital = 5000000
hijos = 5

dineroPorHijo = capital / hijos
# print(dineroPorHijo)

porciones = 8
familia = 3

porcionesPorMiembro = porciones % familia
# print(porcionesPorMiembro)

# OPERADORES DE ASIGNACION

perros+= 4
# print(perros)

ingresos-= 8000
# print(ingresos)

valorProducto*= unidadesVendidas
# print(valorProducto)

capital /= hijos
# print(capital)

porciones%= familia
# print(porciones)

# OPERADORES DE COMPARACION

persona = 18
mayoriadeedad = 18

entraALaFiesta = True

entraALaFiesta = persona > mayoriadeedad
# print(entraALaFiesta) # false

entraALaFiesta = persona < mayoriadeedad
# print(entraALaFiesta) # false

entraALaFiesta = persona >= mayoriadeedad
# print(entraALaFiesta) # true

entraALaFiesta = persona <= mayoriadeedad
# print(entraALaFiesta) # true

entraALaFiesta = persona == mayoriadeedad
# print(entraALaFiesta) # true

# OPERADORES LOGICOS

edad1= 15
genero= "M"
mayoriaDeEdad = 18

# AND

entra = edad1 >= mayoriaDeEdad and genero == 'M'
print(entra)

# OR

entra1 = edad1 >= mayoriaDeEdad or genero == 'M'
print(entra1)

# NOT 

entra1 = not entra1
print(entra1)

