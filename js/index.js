//Declaraciones generales
const contenedorProductos = document.getElementById('contenedor-productos')
let carrito = []
let contadorLista = []
let listaFiltrada = productos
const contenedorCarrito = document.getElementById('carrito-contenedor')
const precioTotal = document.getElementById('Total')
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
        contenedorCarrito.innerHTML = contenedorEnLs
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
        div.classList.add('col-m-4')
        div.classList.add('col-sm-12')
        div.classList.add('container')

        div.innerHTML = `
                    <div class="row prod-img">
                    <img class="img-fluid" src=${producto.imagen} alt="">
                    </div>
                    <div class="row prod-desc">
                    <h3>${producto.descripcion}</h3>
                    </div>
                    <div class="row prod-precio">
                    <p class="precioProducto"> $${producto.precio}</p>
                    </div>
                    <div class="row prod-btn">
                    <div class="container-btn-del"><button onclick="agregarAlCarrito(${producto.id})" ) class="boton-agregar btn btn-danger center">Agregar <i class="fas fa-cart-plus"></i></button></div>
                    </div>  
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

        //Si se repite solo sumar cantidad
        if (repetido) {
            carrito[indice].cantidad++


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

    contenedorCarrito.innerHTML = ""

    
    totalCarrito()

    carrito.forEach((producto) => {

        //JQUERY

        $('#carrito-contenedor').prepend(`
            <div class="productoEnCarrito container">
            <div class="row">

            
                <p class=col-5>${producto.descripcion}</p>
                <p class=col-3>Precio: $${producto.precio}</p>
                <p class=col-2>Cantidad: ${producto.cantidad}</p>
                <button onclick=eliminarProducto(${producto.id}) class="boton-eliminar col-1 btn btn-secondary"><i class="fas fa-trash-alt"></i></button>
                </div>
            </div>
        `)
        localStorage.setItem('contenedor', JSON.stringify(contenedorCarrito.innerHTML))

    }) }


    function totalCarrito() {
        let totalCarrito = carrito.reduce((acc, el) => acc + (el.precio * el.cantidad), 0)
        precioTotal.innerText = totalCarrito

    //GET API

    const URLGET = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"

        $.get(URLGET, function (respuesta, estado) {
                if (estado === "success") {
                    let misDatos = respuesta;
                    let [dolarOficial, dolarBlue] = misDatos
                    let usdBlue = (totalCarrito / parseFloat(dolarBlue.casa.venta)).toFixed(0)
                    let tipoDeCambioBlue = parseFloat(dolarBlue.casa.venta)
                    let usdOficial = (totalCarrito / parseFloat(dolarOficial.casa.venta)).toFixed(0)
                    let tipoDeCambioOficial = parseFloat(dolarOficial.casa.venta)
                    const opcdolar = document.getElementById('tipoDeCambio')
                    $("#usd").empty()
                    $("#tc").empty()

                    opcdolar.addEventListener('change', () => {

                        if (opcdolar.value == 2) {
                            $("#usd").empty()
                            $("#tc").empty()
                            $("#usd").prepend(`${usdBlue}`)
                            $("#tc").prepend(`${tipoDeCambioBlue}`)

                            
                        } else {

                            $("#usd").empty()
                            $("#tc").empty()
                            $("#usd").prepend(`${usdOficial}`)
                            $("#tc").prepend(`${tipoDeCambioOficial}`)
                        }

                    })


                }


            }


        )




        if (contadorLista.length !== 0) {
            contadorCarrito.innerText = carrito.reduce((acc, el) => acc + el.cantidad, 0)
        } else {
            contadorCarrito.innerText = "0"
        }

 
        localStorage.setItem('total', JSON.stringify(precioTotal.innerText))
        localStorage.setItem('contador', JSON.stringify(contadorCarrito.innerText))
        localStorage.setItem('contadorLista', JSON.stringify(contadorLista))


    }





    //Boton Promo
    const botonPromo = document.getElementById('boton-promo')

    function promo(id) {
        listaFiltrada = productos.filter(el => el.id === id)
        mostrarProductos(listaFiltrada)
    }


    //Filtrar por precios

    const ordenPrecios = document.getElementById('precios')

    ordenPrecios.addEventListener('change', () => {
        if (ordenPrecios.value == 1) {
            listaFiltrada.sort((a, b) => a.precio - b.precio)
            mostrarProductos(listaFiltrada)
        } else if (ordenPrecios.value == 2) {
            listaFiltrada.sort((a, b) => b.precio - a.precio)
            mostrarProductos(listaFiltrada)
        } else {
            listaFiltrada = productos.sort((a, b) => a.id - b.id)
            mostrarProductos(listaFiltrada)
        }
    })


    //Filtrar por tipo de producto

    const tipoProducto = document.getElementById('tipo-producto')

    function filtrarTipo() {
        tipoProducto.addEventListener('change', () => {


            if (tipoProducto.value === "all") {
                listaFiltrada = productos
                mostrarProductos(listaFiltrada)
            } else {
                listaFiltrada = productos.filter(el => el.tipo === tipoProducto.value)
                mostrarProductos(listaFiltrada)
            }

        })
    }

    filtrarTipo()




    //Borrar carrito

    function borrarCarrito() {
        localStorage.clear()
        contadorCarrito.innerText = '0'
        contadorLista = []
        contenedorCarrito.innerHTML = ''
        precioTotal.innerText = ''
        carrito = []
        alert('Su carrito ha sido eliminado')

    }


//Finalizar Compra
const keyMp = "TEST-6662049962047613-060705-6de103c1359088fb1515ac3739b4bd10-93400406"

const finalizarCompra=()=>{

    const carritoParaMp =  carrito.map (el => ({
        title: el.descripcion,
        description: "",
        picture_url: el.imagen,
        category_id: el.id,
        quantity: el.cantidad,
        currency_id: "ARS",
        unit_price: el.precio

    })
        )

    

    fetch('https://api.mercadopago.com/checkout/preferences', {
    method: "POST",
    headers: {
        Authorization: 'Bearer TEST-6662049962047613-060705-6de103c1359088fb1515ac3739b4bd10-93400406'
    },
    body: JSON.stringify({
        items: carritoParaMp,
    })
}).then(resp  => resp.json()).then(data =>
    window.open(data.init_point, "_blank")
)

let botonera = document.getElementById('botonera') 
let tituloModal = document.getElementById('exampleModalLabel')
tituloModal.innerHTML = ""
contenedorCarrito.innerHTML = ""
botonera.innerHTML = ""

 $('#carrito-contenedor').prepend('<h3>Gracias por tu compra.</h3>')



}
