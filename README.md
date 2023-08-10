# Cajero electrónico

Programa que simula el trabajo de un cajero electrónico. El aplicativo debe cumplir con los siguientes requerimientos técnicos:

1. Escribir una lista de usuarios con los siguientes datos: nombre, número de documento, contraseña y tipo de usuario. El tipo de usuario será:
 1: administrador, 2: cliente. Guardarla en un array de objetos.

2. Realizar un programa que al inicio solicite ingresar documento y contraseña, si el usuario no existe debe indicar que no existe y volver 
a preguntar usuario y contraseña, si el usuario es administrador, debe permitir cargar el cajero de la siguiente manera:

3. Solicitar la cantidad de billetes de 5, 10, 20, 50 y 100 mil pesos COP.

4. Almacenar esta información en un array de objetos.

5. Una vez tenga la información, debe mostrar en consola la suma por cada denominación y el total general.

6. Una vez el cajero esté cargado, debe volver a solicitar usuario y contraseña, si es administrador, se repite el mismo proceso, 
sumar a la cantidad actual, si es cliente debe proseguir de la siguiente manera:

7. Si el cajero no tiene dinero cargado, debe aparecer un mensaje en consola: “Cajero en mantenimiento, vuelva pronto.” Y reiniciar desde el inicio.

8. Si el cajero ya tiene dinero cargado, debe preguntar la cantidad deseada a retirar. Una vez obtenida la información, debe indicar 
cuánto dinero puede entregar basado en la cantidad disponible y los tipos de billetes. Luego debe mostrar en consola cuántos billetes 
de cada denominación entregó. Priorizando siempre las denominaciones más altas para valores altos y redondeando a la cifra más cercana menor a la solicitada.

9. Posteriormente, debe aparecer en consola, el dinero restante en el cajero, por cada denominación.

NOTA: Debes hacer que el cajero se vuelva a ejecutar, haciendo que vuelva a preguntar usuario y contraseña múltiples veces, 
cargar dinero si es administrador, o retirar dinero si es cliente.

## Tecnologías usadas
- HTML
- JavaScript

