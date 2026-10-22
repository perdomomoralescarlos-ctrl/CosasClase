// ============================================================
// CLASE PADRE: Futbolista
// ============================================================
class Futbolista {
  // Propiedades públicas: accesibles desde cualquier parte del código
  public nombre: string;
  public edad: number;

  // Propiedad protegida (encapsulamiento): solo accesible desde esta clase
  // y desde las clases que heredan de ella (Delantero, Portero)
  protected dorsal: number;

  /**
   * Constructor: inicializa las propiedades del futbolista.
   * Será invocado por las clases hijas mediante super().
   */
  constructor(nombre: string, edad: number, dorsal: number) {
    this.nombre = nombre;
    this.edad = edad;
    this.dorsal = dorsal;
  }

  /**
   * obtenerFicha(): devuelve una cadena con los datos básicos del jugador.
   * Puede leer 'dorsal' porque está dentro de la propia clase.
   */
  public obtenerFicha(): string {
    return `Ficha -> Nombre: ${this.nombre} | Edad: ${this.edad} | Dorsal: ${this.dorsal}`;
  }

  /**
   * calcularSalario(): devuelve el salario base mensual (2000 €).
   * Las clases hijas lo sobrescribirán (polimorfismo).
   */
  public calcularSalario(): number {
    return 2000;
  }
}

// ============================================================
// CLASE HIJA 1: Delantero
// ============================================================
class Delantero extends Futbolista {
  // Propiedad propia del delantero
  public golesTemporada: number;

  /**
   * Constructor: recibe los datos comunes y los pasa al padre con super();
   * después inicializa su propiedad específica.
   */
  constructor(nombre: string, edad: number, dorsal: number, golesTemporada: number) {
    super(nombre, edad, dorsal);
    this.golesTemporada = golesTemporada;
  }

  /**
   * calcularSalario(): POLIMORFISMO.
   * Sobrescribe el método del padre: salario base + 100 € por cada gol.
   * super.calcularSalario() reutiliza el cálculo base (2000 €).
   */
  public calcularSalario(): number {
    return super.calcularSalario() + this.golesTemporada * 100;
  }

  /**
   * celebrarGol(): método propio del delantero (no existe en Futbolista).
   */
  public celebrarGol(): string {
    return `¡GOOOL! ${this.nombre} (dorsal ${this.dorsal}) celebra deslizándose de rodillas por el césped.`;
  }
}

// ============================================================
// CLASE HIJA 2: Portero
// ============================================================
class Portero extends Futbolista {
  // Propiedad propia del portero
  public paradasClave: number;

  /**
   * Constructor: datos comunes al padre con super() + paradas clave.
   */
  constructor(nombre: string, edad: number, dorsal: number, paradasClave: number) {
    super(nombre, edad, dorsal);
    this.paradasClave = paradasClave;
  }

  /**
   * calcularSalario(): POLIMORFISMO.
   * Sobrescribe el método del padre: salario base + 150 € por cada parada clave.
   */
  public calcularSalario(): number {
    return super.calcularSalario() + this.paradasClave * 150;
  }

  /**
   * pararPenalti(): método propio del portero.
   */
  public pararPenalti(): string {
    return `¡PARADÓN! ${this.nombre} (dorsal ${this.dorsal}) se lanza a su izquierda y detiene el penalti.`;
  }
}

// ============================================================
// PRUEBA FINAL
// ============================================================

// Instanciación de objetos (nombre, edad, dorsal, goles/paradas)
const delanteroEstrella = new Delantero("Carlos 'El Rayo' Martínez", 24, 9, 15);
const porteroTitular = new Portero("David 'Muro' Silvestre", 31, 1, 12);

// Pruebas del delantero: ficha, método propio y salario (2000 + 15*100 = 3500 €)
console.log(delanteroEstrella.obtenerFicha());
console.log(delanteroEstrella.celebrarGol());
console.log(`Sueldo mensual: ${delanteroEstrella.calcularSalario()} €\n`);

// Pruebas del portero: ficha, método propio y salario (2000 + 12*150 = 3800 €)
console.log(porteroTitular.obtenerFicha());
console.log(porteroTitular.pararPenalti());
console.log(`Sueldo mensual: ${porteroTitular.calcularSalario()} €`);
