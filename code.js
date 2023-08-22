/* Pre-Entrega 1 - Aguiar Emilia */

let subTotalCompra = 0;
let totalCompra = subTotalCompra;

function calcularsubTotalCompra(valorpromo) {
    subTotalCompra = subTotalCompra + valorpromo;
    console.log("Subtotal $" + subTotalCompra);
}

function calcularTotalCompra(medioDePago) {
    totalCompra = totalCompra + medioDePago;
}



let idProducto = parseInt(prompt("Agregá promos al carrito de compras\n\n1- 50 Rompecocos ~ $18.000\n2- 20 Anteojos Way ~ $15.000\n3- 10 Sombreros Bahianos ~ $6.500\n4- 15 Tiradores Fluo ~ $9.500\n5- 20 Vinchas LED ~ $12.000\n6- Finalizar"));

while (idProducto !== 6) {
    switch (idProducto) {
        case 1:
            alert("Agregaste la promo 50 Rompecocos ~ $18.000");
            calcularsubTotalCompra(18000);
            break;

        case 2:
            alert("Agregaste la promo 20 Anteojos Way ~ $15.000");
            calcularsubTotalCompra(15000);
            break;

        case 3:
            alert("Agregaste la promo 10 Sombreros Bahianos ~ $6.500");
            calcularsubTotalCompra(6500);
            break;

        case 4:
            alert("Agregaste la promo 15 Tiradores Fluo ~ $9.500");
            calcularsubTotalCompra(9500);
            break;

        case 5:
            alert("Agregaste la promo 20 Vinchas LED ~ $12.000");
            calcularsubTotalCompra(12000);
            break;

        default:
            alert("Por favor, seleccioná una opción válida");
    }
    idProducto = parseInt(prompt("Agregá promos al carrito de compras\n\n1- 50 Rompecocos ~ $18.000\n2- 20 Anteojos Way ~ $15.000\n3- 10 Sombreros Bahianos ~ $6.500\n4- 15 Tiradores Fluo ~ $9.500\n5- 20 Vinchas LED ~ $12.000\n6- Finalizar"));
}

alert("El total de tu compra es $" + subTotalCompra);

if (subTotalCompra >= 60000) {
    let descuento = subTotalCompra - (subTotalCompra * 20 / 100);
    alert("¡Tu compra supera los $60,000! Por eso, te damos un descuento del 20% y envío gratis~ Total con descuento: $" + descuento);
} else if (subTotalCompra >= 45000) {
    let descuento = subTotalCompra - (subTotalCompra * 20 / 100);
    alert("¡Tu compra supera los $45,000! Por eso, te damos un descuento del 20% ~ Total con descuento: $" + descuento);
} else if (subTotalCompra >= 30000) {
    let descuento = subTotalCompra - (subTotalCompra * 10 / 100);
    alert("¡Tu compra supera los $30,000! Por eso, te damos un descuento del 10% ~ Total con descuento: $" + descuento);
} else {
    let agregarProductos =parseInt(prompt("¿Sabías que las compras superiores a $30000 tienen descuento?\n\n1- ¡Quiero aprovechar el descuento! Seguir comprando\n2- No quiero agregar productos, continuar."));

    switch (agregarProductos) {
        case 1:
            let idProducto = parseInt(prompt("Agregá promos al carrito de compras\n\n1- 50 Rompecocos ~ $18.000\n2- 20 Anteojos Way ~ $15.000\n3- 10 Sombreros Bahianos ~ $6.500\n4- 15 Tiradores Fluo ~ $9.500\n5- 20 Vinchas LED ~ $12.000\n6- Finalizar"));

            while (idProducto !== 6) {
                switch (idProducto) {
                    case 1:
                        alert("Agregaste la promo 50 Rompecocos ~ $18.000");
                        calcularsubTotalCompra(18000);
                        break;
            
                    case 2:
                        alert("Agregaste la promo 20 Anteojos Way ~ $15.000");
                        calcularsubTotalCompra(15000);
                        break;
            
                    case 3:
                        alert("Agregaste la promo 10 Sombreros Bahianos ~ $6.500");
                        calcularsubTotalCompra(6500);
                        break;
            
                    case 4:
                        alert("Agregaste la promo 15 Tiradores Fluo ~ $9.500");
                        calcularsubTotalCompra(9500);
                        break;
            
                    case 5:
                        alert("Agregaste la promo 20 Vinchas LED ~ $12.000");
                        calcularsubTotalCompra(12000);
                        break;
            
                    default:
                        alert("Por favor, seleccioná una opción válida");
                }
                idProducto = parseInt(prompt("Agregá promos al carrito de compras\n\n1- 50 Rompecocos ~ $18.000\n2- 20 Anteojos Way ~ $15.000\n3- 10 Sombreros Bahianos ~ $6.500\n4- 15 Tiradores Fluo ~ $9.500\n5- 20 Vinchas LED ~ $12.000\n6- Finalizar"));
            }
            break;
}
    
    
    alert("El total de tu compra es $" + subTotalCompra);
    
    if (subTotalCompra >= 60000) {
        let descuento = subTotalCompra - (subTotalCompra * 20 / 100);
        alert("¡Tu compra supera los $60,000! Por eso, te damos un descuento del 20% y envío gratis~ Total con descuento: $" + descuento);
    } else if (subTotalCompra >= 45000) {
        let descuento = subTotalCompra - (subTotalCompra * 20 / 100);
        alert("¡Tu compra supera los $45,000! Por eso, te damos un descuento del 20% ~ Total con descuento: $" + descuento);
    } else if (subTotalCompra >= 30000) {
        let descuento = subTotalCompra - (subTotalCompra * 10 / 100);
        alert("¡Tu compra supera los $30,000! Por eso, te damos un descuento del 10% ~ Total con descuento: $" + descuento);
    
    }
}

let suscripcion = prompt("Antes de finalizar la compra ¿Te gustaría suscribirte a nuestro newsletter para recibir promos exclusivas?\n\n1- Quiero suscribirme \n2- Finalizar la compra sin suscribirme");

switch (suscripcion) {
    case "1":
        let email = prompt("Ingresa tu email para suscribirte");
        alert("¡Gracias por suscribirte! Ya podés continuar al pago");
        break;

    case "2":
        break;

    default:
        alert("Ingrese un mail válido.");
}

let modoDePago = parseInt(prompt("¿Cómo querés abonar tu compra?\n\n1- Tarjeta de crédito ~ 5% de recargo\n2- Tarjeta de débito\n3- Transferencia ~5% OFF acumulable\n4- Cancelar compra"));

while (modoDePago !== 4) {
    switch (modoDePago) {
        case 1:
            alert("Elegiste pago con tarjeta de crédito, tendrás un recargo del 5%.");
            totalCompra = subTotalCompra * 1.05;
            alert("Total con recargo: $" + totalCompra);
            break;

        case 2:
            alert("Elegiste pago con tarjeta de débito.");
            totalCompra = subTotalCompra + 0;
            alert("Total: $" + totalCompra);
            break;

        case 3:
            alert("Elegiste pago por transferencia. Tu compra tiene un descuento extra del 5%.\n\nDatos bancarios: \nCuenta Corriente BBVA\nAlias:COTI.LLONISIMO\nCUIT:30-12877124-6");
            totalCompra = subTotalCompra * 0.95;
            alert("Total con descuento: $" + totalCompra);
            break;

        default:
            alert("Por favor, seleccioná una opción válida");
            break;
    }
    break;
}

let finalizarCompra = parseInt(prompt("¡Estamos listos para confirmar tu pedido!\n\n1- Finalizar compra \n2- Seguir comprando\n3- Cancelar pedido"));

switch (finalizarCompra) {
    case 1:
        alert("¡Gracias por elegirnos!\n\nNos podremos en contacto para coordinar el envío dentro de las próximas 24 hs.");
        break;

    case 2:
        alert("¿Olvidaste algo? \n\nSeguí comprando, nosotros guardamos tu carrito de compras.");
        break;
    case 3:
        alert("¡Lamentamos que canceles tu compra!\n\n ¿Hay algo que podamos mejorar? Escribinos por Whatsapp.");
        break;
    }
