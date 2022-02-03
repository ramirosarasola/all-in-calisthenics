let nombreProductoA = "Plan Calistenia";
let stockProductoA = 100;
let precioProductoA = 100;
alert("El valor de los planes es de $100")
let cantidadComprada = parseFloat(prompt("Ingrese la cantidad de planes que quiere comprar"));
let precioTotal = cantidadComprada * precioProductoA;

let stockRestante = stockProductoA - cantidadComprada;

alert("El valor total de su compra es de $" + precioTotal);

console.log("Quedan " + stockRestante + " planes disponibles");


