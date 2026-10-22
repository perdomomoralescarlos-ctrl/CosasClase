class ClubFutbol{
    #presupuesto

    constructor(nombre, presupuestoInicial){
        this.nombre = nombre;
        this.#presupuesto = presupuestoInicial < 0 ? 0 : this.presupuestoInicial;
        
        if (presupuestoInicial < 0){
            console.log("Aviso: El saldo inicial no puede ser negativo para " + nombre + ". Se asignara 0.");
            this.#presupuesto = 0;
        } else {
            this.#presupuesto = presupuestoInicial;
        }
    }

    get presupuesto() {
        return this.#presupuesto
    }

    set presupuesto(valor) {
        if (valor < 0) {
            console.error("No se pudo asignar el presupuesto")
            return;
        }
        this.#presupuesto = valor;
    }

    consultarEstado() {
    console.log("Titular: " + this.nombre + " | Saldo actual: " + this.#presupuesto + " euros");
}

ingreasarDinero(cantidad) {
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
            return false
        }
    }
}

const cuenta2 = new ClubFutbol("Barça", -100);
cuenta2.consultarEstado();
cuenta2.ingreasarDinero(80);
cuenta2.retirarDinero(40);
