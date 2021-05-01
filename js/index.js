
//Declaraciones generales
const contenedorProductos = document.getElementById('contenedor-productos')
let carrito = []
const contenedorCarrito = document.getElementById('carrito-contenedor')
const precioTotal = document.getElementById('precioTotal')
const contadorCarrito = document.getElementById('contadorCarrito')

let carritoEnLS = JSON.parse( localStorage.getItem('carrito') )
let contadorEnLs = JSON.parse( localStorage.getItem('contador') )
let contenedorEnLs = JSON.parse( localStorage.getItem('contenedor') )
let totalEnLs = JSON.parse( localStorage.getItem('total') )

if (carritoEnLS) {
    let continuar = confirm('Usted tiene productos agregados al carrito ¿Desea continuar con su última compra?')

    if (continuar == true) {
        carrito = carritoEnLS
        contadorCarrito.innerText = contadorEnLs
        contenedorCarrito.innerText = contenedorEnLs
        precioTotal.innerText = totalEnLs
        
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
                    <div class="container-btn-del"><button onclick=agregarAlCarrito(${producto.id}) class="boton-agregar center">Agregar <i class="fas fa-cart-plus"></i></button></div>
        `
        contenedorProductos.appendChild(div)
    
    })

}

mostrarProductos(productos)



//Agregar y actualizar el carrito

function agregarAlCarrito(id) {
    const productoElegido = productos.find( el => el.id == id )
    if (productoElegido) {
        carrito.push(productoElegido)   
    }
   
    actualizarCarrito()
}

function eliminarProducto(id) {
    const productoEliminar = carrito.find( el => el.id == id )
    const indice = carrito.indexOf(productoEliminar)
    carrito.splice(indice, 1)

    actualizarCarrito()
}





function actualizarCarrito() {
            
    localStorage.setItem('carrito', JSON.stringify(carrito))
           console.log(contadorCarrito)



    contenedorCarrito.innerHTML = '' 

    carrito.forEach((producto) => {
        contenedorCarrito.innerHTML += `
            <div class="productoEnCarrito">
                <p>${producto.descripcion}</p>
                <img class="img-fluid" style="max-height:100px" src=${producto.imagen} alt="">
                <p>Precio: $${producto.precio}</p>
                <button onclick=eliminarProducto(${producto.id})  class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
            </div>
        `
    })
 

    precioTotal.innerText = carrito.reduce( (acc, el) => acc += el.precio, 0 )
    if (carrito.length!==0){
    contadorCarrito.innerText = carrito.length
}else{
    contadorCarrito.innerText = "0"
}

    localStorage.setItem('contenedor', JSON.stringify(contenedorCarrito.innerText))
    localStorage.setItem('total', JSON.stringify(precioTotal.innerText))
    localStorage.setItem('contador', JSON.stringify(contadorCarrito.innerText))

   
  
 }


//Filtrar por precios

const ordenPrecios = document.getElementById('precios')

ordenPrecios.addEventListener('change', ()=>{
    if (ordenPrecios.value == 1) {
        productos.sort( (a, b) => a.precio - b.precio )
        mostrarProductos(productos)
    } else if (ordenPrecios.value == 2) {
        productos.sort( (a, b) => b.precio - a.precio )
        mostrarProductos(productos)
    } else {
        productos.sort( (a, b) => a.id - b.id )
        mostrarProductos(productos)
    }
})


//Filtrar por tipo de producto

//Borrar carrito

function borrarCarrito(){
    localStorage.clear()
    contadorCarrito.innerText = '0'
    contenedorCarrito.innerHTML= ''
    precioTotal.innerText = ''
    carrito = []
    alert('Su carrito ha sido eliminado')
           }

