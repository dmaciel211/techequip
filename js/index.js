// Definiciones generales

let subtotalProductos = [];
let carritoProductos = [];
let suma = 0

class Producto {
    constructor(id, descripcion, precio) {
        this.id = "ID " + id,
            this.descripcion = "Descripción " + descripcion,
            this.precio = "Precio " + precio
    }
    confirmacion() {
        alert(`Usted ha agregado
    ${this.id}
    ${this.descripcion}
    ${this.precio}`)
    }
}


producto1 = new Producto(100, "Intel I9 10900", 45000),
    producto1precio = 45000

producto2 = new Producto(200, "Asus ROG Z390", 50000),
    producto2precio = 50000

producto3 = new Producto(300, "RTX 3080", 300000),
    producto3precio = 300000


//Agregar producto al carrito

const agregarProductos = (producto) => {
    carritoProductos.push(producto)
}

const agregarValores = (precio) => {
    subtotalProductos.push(precio)
}

const microprocesador = () => {
    agregarProductos(producto1)
    agregarValores(producto1precio)
    suma = subtotalProductos.reduce((acc, numero) => acc + numero);
    producto1.confirmacion()
}

const motherboard = () => {
    agregarProductos(producto2)
    agregarValores(producto2precio)
    suma = subtotalProductos.reduce((acc, numero) => acc + numero);
    producto2.confirmacion()
}

const placaDeVideo = () => {
    agregarProductos(producto3)
    agregarValores(producto3precio)
    suma = subtotalProductos.reduce((acc, numero) => acc + numero);
    producto3.confirmacion()
}

// Finalizar Compra



function pago(cuotas) {
    cuotas = prompt(
        `Por favor ingrese su método de pago
    A) 1 Cuota sin interés.
    B) 3 Cuotas con 15% de Interés.
    C) 6 cuotas con 20% de Interés.
    D) Ahora 12 con 18% de Interés.`, "A"
    ).toLowerCase()


    switch (cuotas) {

        case "a":

            alert(`Usted ha seleccionado la opción A) 1 Cuota sin interés.
            El valor final de su compra es de $ ${suma}`)
            alert('Será redirigido a la web de pagos.')
            window.location.href = "https://www.mercadopago.com.ar"
            break;

        case "b":
            alert(`Usted ha seleccionado la opción B) 3 Cuotas con 15% de Interés.
                El subtotal de su compra es de $ ${suma}
                Su interés es de $ ${parseFloat(suma/3).toFixed(2)}
                El valor final de su compra es de $ ${parseFloat(suma*1.15).toFixed(2)}`)
            alert('Será redirigido a la web de pagos.')
            window.location.href = "https://www.mercadopago.com.ar"
            break;

        case "c":
            alert(`Usted ha seleccionado la opción C) 6 cuotas con 20% de Interés.
                    El subtotal de su compra es de $ ${suma}
                    Su interés es de $ ${parseFloat(suma/6).toFixed(2)}
                    El valor final de su compra es de $ ${parseFloat(suma*1.2).toFixed(2)}`)
            alert('Será redirigido a la web de pagos.')
            window.location.href = "https://www.mercadopago.com.ar"
            break;

        case "d":
            alert(`Usted ha seleccionado la opción D) Ahora 12 con 18% de Interés.
                        El subtotal de su compra es de $ ${suma}
                        Su interés es de $ ${parseFloat(suma/12).toFixed(2)}
                        El valor final de su compra es de $ ${parseFloat(suma*1.18).toFixed(2)}`)
            alert('Será redirigido a la web de pagos.')
            window.location.href = "https://www.mercadopago.com.ar"
            break;

        default:
            alert(`Seleccione una opción correcta.`)
            pago();

    }


}

function finalizar() {
    if (suma !== 0) {
        alert("El total de su compra es $" + suma);
        pago()
           } else
    alert("Usted no ha seleccionado ningun producto")
    
}


function borrarCarrito() {
    if(suma !== 0){
    subtotalProductos = []
    carritoProductos = []
    suma = 0
    alert("Su carrito se ha vaciado.")
}else{
    alert("No hay nada que borrar.")
}
}