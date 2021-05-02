//Declaraciones generales
const contenedorProductos = document.getElementById('contenedor-productos')
let carrito = []
let contadorLista = []
const contenedorCarrito = document.getElementById('carrito-contenedor')
const precioTotal = document.getElementById('precioTotal')
const contadorCarrito = document.getElementById('contadorCarrito')


let carritoEnLS = JSON.parse(localStorage.getItem('carrito'))
let contadorEnLs = JSON.parse(localStorage.getItem('contador'))
let contenedorEnLs = JSON.parse(localStorage.getItem('contenedor'))
let totalEnLs = JSON.parse(localStorage.getItem('total'))
let contadorListaEnLS = JSON.parse(localStorage.getItem('contadorLista'))



//¿Continuar compra?

if (carritoEnLS) {
    let continuar = confirm('Usted tiene productos agregados al carrito ¿Desea continuar con su última compra?')

    if (continuar == true) {
        carrito = carritoEnLS
        contadorCarrito.innerText = contadorEnLs
        contenedorCarrito.innerText = contenedorEnLs
        precioTotal.innerText = totalEnLs
        contadorLista = contadorListaEnLS

    } else {
        localStorage.removeItem('carrito')
    }
}




//Mostrar carrito al principio

function mostrarProductos(array) {

    contenedorProductos.innerHTML = ''

    array.forEach((producto) => {

        let div = document.createElement('div')
        div.classList.add('producto')
        div.classList.add('container-fluid')
        div.innerHTML = `
                    <img class="img-fluid" src=${producto.imagen} alt="">
                    <h3>${producto.descripcion}</h3>
                    <p class="precioProducto">Precio: $${producto.precio}</p>
                    <div class="container-btn-del"><button onclick=agregarAlCarrito(${producto.id}) class="boton-agregar btn btn-danger center">Agregar <i class="fas fa-cart-plus"></i></button></div>
        `
        contenedorProductos.appendChild(div)

    })

}

mostrarProductos(productos)



//Agregar y actualizar el carrito

function agregarAlCarrito(id) {

    const productoElegido = productos.find(el => el.id == id)



    if (productoElegido) {
        contadorLista.push(productoElegido)
        const repetido = carrito.find(el => el.id == productoElegido.id)
        const indice = carrito.indexOf(repetido)
        console.log(indice)

        //Si se repite solo sumar cantidad
        if (repetido) {
            carrito[indice].cantidad++
            console.log(carrito);

        }
        //Si no se repite agregar al carrito con cantidad 1
        else {
            productoElegido.cantidad = 1
            carrito.push(productoElegido)
        }
    }

    actualizarCarrito()
}

function eliminarProducto(id) {
    const productoEliminar = carrito.find(el => el.id == id)
    const indice = carrito.indexOf(productoEliminar)
    carrito.splice(indice, 1)
    contadorLista.splice(indice)

    actualizarCarrito()
}





function actualizarCarrito() {

    localStorage.setItem('carrito', JSON.stringify(carrito))


    contenedorCarrito.innerHTML = ''





    carrito.forEach((producto) => {



        contenedorCarrito.innerHTML += `
            <div class="productoEnCarrito">
                <p>${producto.descripcion}</p>
                <img class="img-fluid" style="max-height:100px" src=${producto.imagen} alt="">
                <p>Precio: $${producto.precio}</p>
                <p>Cantidad: ${producto.cantidad}</p>
                <button onclick=eliminarProducto(${producto.id})  class="boton-eliminar btn btn-secondary"><i class="fas fa-trash-alt"></i></button>
            </div>
        `

    })


    precioTotal.innerText = carrito.reduce((acc, el) => acc += el.precio, 0)



    if (contadorLista.length !== 0) {
        contadorCarrito.innerText = contadorLista.length
    } else {
        contadorCarrito.innerText = "0"
    }

    localStorage.setItem('contenedor', JSON.stringify(contenedorCarrito.innerText))
    localStorage.setItem('total', JSON.stringify(precioTotal.innerText))
    localStorage.setItem('contador', JSON.stringify(contadorCarrito.innerText))
    localStorage.setItem('contadorLista', JSON.stringify(contadorLista))



}//Boton Promo
const botonPromo = document.getElementById('boton-promo')

function promo(id){
    let promo = productos.filter(el => el.id === id )
    mostrarProductos(promo)
}


//Filtrar por precios

const ordenPrecios = document.getElementById('precios')

ordenPrecios.addEventListener('change', () => {
    if (ordenPrecios.value == 1) {
    
        productos.sort((a, b) => a.precio - b.precio)
        mostrarProductos(productos)
    } else if (ordenPrecios.value == 2) {
        productos.sort((a, b) => b.precio - a.precio)
        mostrarProductos(productos)
    } else {
        productos.sort((a, b) => a.id - b.id)
        productos = productosOriginal
        mostrarProductos(productos)
    }
})


//Filtrar por tipo de producto

const tipoProducto = document.getElementById('tipo-producto')

tipoProducto.addEventListener('change', () => {
   

    if (tipoProducto.value === "all") {
        productos = productosOriginal
             mostrarProductos(productos)}

        else{
            productos = productosOriginal
            let filtrado = productos.filter(el => el.tipo === tipoProducto.value )
            productos = filtrado
                     mostrarProductos(filtrado)
        }
    
})



//Borrar carrito

function borrarCarrito() {
    localStorage.clear()
    contadorCarrito.innerText = '0'
    contadorLista = []
    contenedorCarrito.innerHTML = ''
    precioTotal.innerText = ''
    carrito = []
    alert('Su carrito ha sido eliminado')
    console.log(carrito, carritoEnLS)
}