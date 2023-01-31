console.log('Club peludos petshop');
let entrada = Number(prompt(`1.Iniciar sesion \n 2.Registrarse \n 3.Salir\n`));
const usuario = 'cris';
const contra = 'cris123';
class Producto {

    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    get_datos() {
        console.log('<------->')
        console.log('Nombre:', this.nombre);
        console.log('Precio:', this.precio);
        console.log('Stock:', this.stock);
        console.log('');
    }

    get_stock() {
        if (this.stock <= 0) {
            return false
        }
        else {
            return true
        }
    }
    uptade_stock(cantidad) {
        if (this.stock >= cantidad) {
            this.stock = this.stock - cantidad
            return true;
        }
        else {
            console.log('Stock bajo');
            return false;
        }
    }
}
//ALTA PRODUCTO

let lista_productos = [];
lista_productos.push(new Producto('correa', 1500, 15));
lista_productos.push(new Producto('bozal', 2000, 10));
lista_productos.push(new Producto('bandana', 780, 25));

//FIN ALTA PRODUCTO

//INICIO RENDER DE PRODUCTO

for (let producto of lista_productos) {
    producto.get_datos();
}
//FIN DEL RENDER DE PRODUCTOS


const NuevaCompra = () => {
    //SIMULACION COMPRA
    function buscar_producto(producto) {

        return producto.nombre == compra_usuario
    }

    let compra_usuario = prompt('Ingrese nombre producto que desea (correa - bandana- bozal)');
    let resultado_find = lista_productos.find(buscar_producto);

    if (resultado_find != undefined) {
        //COMPRA

        if (resultado_find.get_stock()) {

            let unidades = prompt('¿Cuantas unidades necesita?');
            if (resultado_find.uptade_stock(unidades)) {
                console.log('Gracias por su compra')
            }
            else {
                console.log(' No se pudo realizar la compra')
            }
        }
        else {
            console.log(' No tenemos stock del producto')
        }
    }

    else {
        console.log('producto no encontrado')
    }

    resultado_find.get_datos();
}



while (entrada != 3) {
    switch (entrada) {
        case 1:
            user = prompt('Ingrese su usuario');
            pass = prompt('ingrese su contraseña');
            intentos = 3;
            while (user != usuario || pass != contra) {
                intentos--;
                console.log('Ups 😖 credenciales invalidas');
                console.log(`te quedan ${intentos} intentos 😥`);

                if (intentos === 0) {
                    console.log('te quedaste sin intentos 😭');
                    break;
                }
                user = prompt('Ingrese su usuario');
                pass = prompt('ingrese su contraseña');

            }
            if (intentos > 0) {
                NuevaCompra()
            }
            break;

        //REGISTRO
        case 2:

            let nombre = prompt('Ingrese su nombre');
            let apellido = prompt('Ingrese su apellido');
            let nombre_usuario = prompt('Elija su nombre de usuario');
            let password = prompt('Elija su contraseña');
            let edad = Number(prompt('ingrese su edad'));
            if (edad >= 18) {
                console.log(nombre, 'es mayor de edad');
            }
            else {
                console.log('No eres mayor de edad, por favor leer terminos y condiciones')
                console.log(nombre, 'es menor de edad');
                break;
            }
            console.log('El nombre del usuario es :', nombre);
            console.log('El apellido del usuario es :', apellido);
            console.log('Se ingreso el nombre de usuario :', nombre_usuario);
            console.log('Se ingreso la contraseña :', password);
            console.log('Registro exitoso 😎')
            user = prompt('Inicie sesion con su nombre de usuario');
            pass = prompt('ingrese su contraseña');
            intentos = 3;
            while (user != nombre_usuario || pass != password) {
                intentos--;
                console.log('credenciales invalidas😖');
                console.log(`te quedan ${intentos} intentos😥`);

                if (intentos == 0) {
                    console.log('te quedaste sin intentos😭');
                    break;

                }

                user = prompt('Ingrese su usuario');
                pass = prompt('ingrese su contraseña');
            }
            if (intentos > 0) {
                NuevaCompra()
            }
            break;
    }

    entrada = Number(prompt(`1.Iniciar sesion\n 2.Registrarse\n 3.Salir\n`));
}