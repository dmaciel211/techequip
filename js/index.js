

function cuotas(subasta) {
     let nombre = prompt("¿Cuál es tu nombre?")

    subasta = parseFloat(prompt("Bienvenido " + nombre + ".  \nIngresa el monto a subastar."))

    while (subasta < 10000) {
        alert("La base mínima es de $ 10.000")
        subasta = parseFloat(prompt("Diego, ingresa el monto a subastar."))
    }
    alert(nombre + " Ingresaste $ " + subasta)
    opcion_cuotas = prompt("Diego tus opciones de cuotas son: \n 1. Tres cuotas (10% Interés),  \n 2. Seis cuotas (20% interés), \n 3.Ahora Doce (30% Interés).  \n Ingrese la opción seleccionada.")

    while(opcion_cuotas !=="CANCELAR"){
    switch (opcion_cuotas) {
        case "1":
            alert("Su monto a subastar es $ " + subasta + " \n Su elección de pago es 3 cuotas con 10% de interés. \n Su interés mensual es de $ " + parseInt(subasta*0.1) +".  \n El valor final de su subasta es de $" + parseInt(subasta*1.1));
            alert("Ahora será redirigido a la web para realizar los pagos")
            location.href="https://www.mercadopago.com.ar/home"
                    break;
        case "2":
            alert("Su monto a subastar es $ " + subasta + " \n Su elección de pago es 6 cuotas con 20% de interés." + "Su interés mensual es de " + parseInt(subasta*0.2) +". El valor final de su subasta es de $" + parseInt(subasta*1.2))
            alert("Ahora será redirigido a la web para realizar los pagos")
            location.href="https://www.mercadopago.com.ar/home"
        break;

        case "3":
            alert("Su monto a subastar es $ " + subasta + " \n Su elección de pago es 12 cuotas con 30% de interés." + "Su interés mensual es de " + parseInt(subasta*0.3) +". El valor final de su subasta es de $" + parseInt(subasta*1.3))
            alert("Ahora será redirigido a la web para realizar los pagos")
            location.href="https://www.mercadopago.com.ar/home"
        break;

        default:
            alert("La opción ingresada no es correcta por favor ingrese nuevamente su elección en cuotas")
            }
     break
}

}