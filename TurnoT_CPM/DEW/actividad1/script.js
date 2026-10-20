//variables de nombre y edad
let nombre = prompt("Introduce tu nombre");
let edadTxt = prompt("Introduce tu edad");

//Si la edad no es numerica o no tiene nada da la alerta de que la edad introducida no es valida
if (isNaN(edadTxt) || edadTxt === null || edadTxt.trim() === "") {
    alert("La edad introducida no es valida.");
} else {
    let edad = Number(edadTxt);
    let esVip = confirm("¿Eres vip?");
    let descuento = edad < 18
    ? "Descuento Juvenil (30%)"
    : (edad >=18 && esVip)
        ? "Descuento Vip (20%)"
        : "Sin descuento";
alert("Usuario: " + nombre + "\nEdad: " + edad + "\nBeneficio: " + descuento);
  console.log("Usuario:", nombre, "| Edad:", edad, "| VIP:", esVip, "|", descuento);
}
