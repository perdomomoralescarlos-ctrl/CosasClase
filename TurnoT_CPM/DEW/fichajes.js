class ClubFutbol{
    #presupuesto

    constructor(nombre, presupuestoInicial){
        this.nombre = nombre;
        
        if (presupuestoInicial < 0){
            console.log("Aviso: El saldo inicial no puede ser negativo para " + nombre + ". Se asignara 0.");
            this.#presupuesto = 0;
        } else {
            this.#presupuesto = presupuestoInicial;
        }
    }

    get presupuesto() {
        return this.#presupuesto;
    }

    set presupuesto(valor) {
        if (valor < 0) {
            console.error("No se pudo asignar el presupuesto");
            return;
        }
        this.#presupuesto = valor;
    }

    consultarEstado() {
    console.log("Titular: " + this.nombre + " | Saldo actual: " + this.#presupuesto + " euros");
}

ingresarDinero(cantidad) {
        if (cantidad > 0) {
            this.#presupuesto = this.#presupuesto + cantidad;
            console.log("Has depositado " + cantidad + " euros. Nuevo saldo: " + this.#presupuesto + " euros.");
        } else {
            console.log("Error: La cantidad a depositar debe ser mayor que cero.");
        }
    }

    retirarDinero(cantidad) {
        if (cantidad > 0 && cantidad <= this.#presupuesto) {
            this.#presupuesto = this.#presupuesto - cantidad;
            console.log("Has retirado " + cantidad + " euros. Saldo restante: " + this.presupuesto + " euros.");
            return true;
        } else {
            console.log("Error: Fondos insuficientes o cantidad no valida para " + this.nombre);
            return false;
        }
    }

    //metodo estatico coordinador
    static ficharJugador(clubComprador, clubVendedor, nombreJugador, costoFichaje) {
        if (clubComprador === clubVendedor) {
            console.log("Error: un club no puede fichar a un jugador de si mismo.");
            return false;
        }

        if (clubComprador.retirarDinero(costoFichaje)) {
            clubVendedor.ingresarDinero(costoFichaje);
            console.log("Fichaje Terminado: " + nombreJugador + " pasa de " +clubVendedor.nombre + " a " +clubComprador.nombre + " por " + costoFichaje + " €.");
            return true;
        }
        console.log("Fichaje Fallido: " + clubComprador.nombre + " no puede pagar " + costoFichaje + " € por " + nombreJugador + ".");
        return false;
    }
}

const barcelona = new ClubFutbol("Barça", -100);
const madrid = new ClubFutbol("Real Madrid", 200000);
barcelona.consultarEstado();
madrid.consultarEstado();

//Setter en negativo
barcelona.presupuesto = -50;
console.log(barcelona.presupuesto);

//setter valido
barcelona.presupuesto = 1000000;
console.log(barcelona.presupuesto);

//fichaje con fondos suficientes
ClubFutbol.ficharJugador(madrid, barcelona, "Lamine Jamal", 120000);

//fichaje sin fondos
ClubFutbol.ficharJugador(barcelona, madrid, "Pedro Sanchez", 99999999);

barcelona.consultarEstado();
madrid.consultarEstado();