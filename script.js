/* Se crea un array de objetos que guarda diferentes usuarios,
cada usuario tiene nombre, ID, contraseña y el tipo de usuario */

const userList = [
    {
        name: "Andrés",
        ID: 1110570244,
        password: "Anpar1103",
        userType: 1, // 1: Administrador, 2: Cliente.
    },

    {
        name: "Santiago",
        ID: 1012465879,
        password: "Chichico95",
        userType: 2, // 1: Administrador, 2: Cliente.
    },

    {
        name: "Daniela",
        ID: 1036578469,
        password: "Gym123-456",
        userType: 1, // 1: Administrador, 2: Cliente.
    },

    {
        name: "Sebastián",
        ID: 1017474444,
        password: "MasterVicente",
        userType: 2, // 1: Administrador, 2: Cliente.
    }
]

/*Se crea una función sin parámetros de entrada que realizará la validación
del usuario pidiendo que se ingrese el ID y la contraseña del usuario,
si alguno de los dos está equivocado va a mostrar por consola "El usuario
no existe o la contraseña es incorrecta y pide ingresar de nuevo el ID y la contraseña.
Cuando el ID y la contraseña es correcta la función retorna la información del usuario en un objeto.*/

const validacion = () =>{
    let validation = true;
    let user = {};
    while (validation){
        const IDE = parseInt(prompt("Digite su ID:"));
        const passwordUser = prompt("Digite su contraseña:");

        userList.forEach(element => {
            if (element.ID == IDE && element.password == passwordUser){
                user = element;
                validation = false;
            }
        });
        if (validation == true){
            alert("El usuario no existe o la contraseña es incorrecta.");
        };
    };
    return user;
}

/*Se crea otro array de objetos que va a guardar la cantidad de billetes que hay
de cada denominación en determinado momento en el cajero. Se usa más adelante 
actualizando la cantidad de billetes que hay de cada denominación cuando ingrese un
administrador o un cliente.*/

let disponibleCajero = [
    {
    cantidad: 0,
    denominacion: 100000,
    },

    {
    cantidad: 0,
    denominacion: 50000,
    },

    {
    cantidad: 0,
    denominacion: 20000,
    },

    {
    cantidad: 0,
    denominacion: 10000,
    },

    {
    cantidad: 0,
    denominacion: 5000,
    }
];

/*Se crea una función que recibirá como parámetros el array de objetos que tiene la
cantidad de billetes que hay en el cajero disponible por cada demoninación y el objeto
que tiene la información del usuario que está ingresando.

Cuando el usuario que ingresa es un administrador, solicita que se ingrese la
cantidad de billetes de cada denominación que va a cargar en el cajero, luego el va
a mostrar por consola la suma de billetes por cada denominación que hay después del
cargue y la cantidad de billetes por cada denominación. También mostrará por consola
la cantidad de dinero total que hay en el cajero disponible después del cargue.

Cuando el usuario que ingresa es un cliente, debe verificar si hay saldo en el cajero 
si no hay saldo disponible muestra en consola el mensaje "Cajero en mantenimiento, vuelva pronto." Si hay disponible en el cajero, solicita que se ingrese la cantidad de dinero
que se quiere retirar, si este valor es mayor al disponbile en el cajero se muestre en 
consola "El cajero no cuenta con los fondos suficientes para realizar el retiro."

Si la cantidad a retirar es menor o igual al disponible en el cajero, calculara la cantidad de billetes necesarias por cada denominación y escogerá si entregar o no billetes por cada denominación, de forma paralela actualizará la cantidad de billetes disponibles en el cajero y la cantidad de dinero total disponbile en el cajero. Mostrará entonces en pantalla la cantidad que pudo entregar teniendo en cuenta la disponibilidad de billetes de cada denominación y también mostrará lo que faltó por entregar.

Mostrará por consola, la cantidad de dinero disponible en el cajero y la cantidad de billetes por cada denominación. Finalmente le preguntará al usuario si quiere ingresar un nuevo usuario o no, la respuesta que de el usuario será el return de la función.*/


const cajero = (disponibleCajero, usuario) => {
    
    if(usuario.userType == 1){ // Administrador
        let sumaTotalCajero = 0;
        disponibleCajero.forEach(element => {
            element.cantidad += parseInt(prompt(" Usted es administrador, ingrese la cantidad de billetes de " + element.denominacion + ": "));
            const totalPorDenominacion = element.cantidad * element.denominacion;
            console.log("La suma de billetes de " + element.denominacion + " es " + totalPorDenominacion + ". Y la cantidad de billetes: " + element.cantidad + ".");
            sumaTotalCajero += totalPorDenominacion;
        });
        console.log("La suma total de billetes en el cajero es " + sumaTotalCajero + ".");
    }

    else if(usuario.userType == 2){ // Cliente
        let sumaTotalCajero = 0;
        disponibleCajero.forEach(element => {
            const totalPorDenominacion = element.cantidad * element.denominacion;
            sumaTotalCajero += totalPorDenominacion;
        });
        
        if(sumaTotalCajero == 0){
            console.log("Cajero en mantenimiento, vuelva pronto.");
        } else if(sumaTotalCajero > 0){
            let cantidadRetirar = parseInt(prompt("Ingrese la cantidad a retirar: "));
            console.log("La cantidad que el cliente quiere retirar es " + cantidadRetirar + ".");
            if (cantidadRetirar <= sumaTotalCajero){

                let cantidadEntregar = 0;
                disponibleCajero.forEach(element => {
                    const billetesNecesarios = Math.floor(cantidadRetirar/element.denominacion);
                    if(billetesNecesarios <= element.cantidad){
                        if(cantidadRetirar >= element.denominacion * billetesNecesarios){
                            cantidadRetirar -= element.denominacion * billetesNecesarios;
                            element.cantidad -= billetesNecesarios;
                            cantidadEntregar += element.denominacion * billetesNecesarios;
                            console.log("Se entregaron " + billetesNecesarios + " de " + element.denominacion + ".");
                        }
                    } else if(billetesNecesarios > element.cantidad){
                        if(cantidadRetirar >= element.denominacion * element.cantidad){
                            console.log("Se entregaron " + element.cantidad + " de " + element.denominacion + ".");
                            cantidadEntregar += element.denominacion * element.cantidad;
                            cantidadRetirar -= element.denominacion * element.cantidad;
                            element.cantidad -= element.cantidad;
                        }
                    }
                })
                console.log("La cantidad que el cajero pudo entregar fue " + cantidadEntregar + " y le falto por entregar " + cantidadRetirar + ".");

                let dineroDisponible = 0;
                disponibleCajero.forEach(element => {
                    const totalPorDenominacion = element.cantidad * element.denominacion;
                    console.log("La suma de billetes de " + element.denominacion + " restante en el cajero es " + totalPorDenominacion + ". La cantidad restante de billetes: " + element.cantidad + ".");
                    dineroDisponible += totalPorDenominacion;
                });

            } else if (cantidadRetirar > sumaTotalCajero){
                console.log("El cajero no cuenta con los fondos suficientes para realizar el retiro.");
            }
        }
    }

    const newUser = prompt("¿Quiere ingresar un nuevo usuario? (sí o no): ");
    return newUser
}

/* Llamando las funciones y probando el programa: Este ciclo while permitirá que según sea la respuesta al si se quiere o no ingresar un nuevo usuario siga solicitando que se añada el ID y la contraseña de nuevo.*/

let newUser = "sí";
while(newUser == "sí"){
    const usuario = validacion();
    newUser = cajero(disponibleCajero, usuario);
}
