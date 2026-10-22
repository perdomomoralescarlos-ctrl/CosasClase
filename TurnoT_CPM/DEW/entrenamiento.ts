// 1. INTERFAZ IEntrenamiento
// Define el "contrato" que deben cumplir todos los tipos de
// entrenamiento. Cualquier clase que la implemente estará
// obligada a tener estos miembros.
interface IEntrenamiento {
  // Nivel de intensidad de la sesión
  intensidad: string;

  // Realiza el calentamiento previo a la rutina principal
  calentar(): void;

  // Ejecuta la rutina principal durante los minutos indicados
  ejecutarRutina(duracionMinutos: number): void;
}

// ------------------------------------------------------------
// 2. CLASE EntrenamientoCarrera
// Implementación concreta de IEntrenamiento para running.
// ------------------------------------------------------------
class EntrenamientoCarrera implements IEntrenamiento {
  // La intensidad se recibe por constructor y se guarda como propiedad pública
  constructor(public intensidad: string) {}

  // Calentamiento específico de carrera: estiramientos en pista
  calentar(): void {
    console.log("[Carrera] Calentamiento: estiramientos en pista.");
  }

  // Rutina principal de carrera: muestra los detalles del running
  ejecutarRutina(duracionMinutos: number): void {
    console.log(
      `[Carrera] Rutina: ${duracionMinutos} minutos de running a intensidad ${this.intensidad}.`
    );
  }
}

// ------------------------------------------------------------
// 3. CLASE EntrenamientoCiclismo
// Implementación concreta de IEntrenamiento para ciclismo.
// ------------------------------------------------------------
class EntrenamientoCiclismo implements IEntrenamiento {
  constructor(public intensidad: string) {}

  // Calentamiento específico de ciclismo: revisar presión de neumáticos
  calentar(): void {
    console.log("[Ciclismo] Calentamiento: revisar la presión de los neumáticos.");
  }

  // Rutina principal de ciclismo: detalles del recorrido en bicicleta
  ejecutarRutina(duracionMinutos: number): void {
    console.log(
      `[Ciclismo] Rutina: ${duracionMinutos} minutos de recorrido en bicicleta a intensidad ${this.intensidad}.`
    );
  }
}

// ------------------------------------------------------------
// 4. CLASE EntrenamientoNatacion
// Implementación concreta de IEntrenamiento para natación.
// ------------------------------------------------------------
class EntrenamientoNatacion implements IEntrenamiento {
  constructor(public intensidad: string) {}

  // Calentamiento específico de natación: movilidad articular en seco
  calentar(): void {
    console.log("[Natación] Calentamiento: movilidad articular en seco.");
  }

  // Rutina principal de natación: detalles de las series en la piscina
  ejecutarRutina(duracionMinutos: number): void {
    console.log(
      `[Natación] Rutina: ${duracionMinutos} minutos de series en la piscina a intensidad ${this.intensidad}.`
    );
  }
}

// ------------------------------------------------------------
// 5. CLASE GESTORA AtletaManager 
// Recibe cualquier objeto que cumpla la interfaz IEntrenamiento.
// (POLIMORFISMO) solo llama a los
// métodos definidos en el contrato
// ------------------------------------------------------------
class AtletaManager {
  // El entrenamiento se recibe por constructor y es privado
  constructor(private entrenamiento: IEntrenamiento) {}

  // Inicia una sesión completa: primero calienta y después ejecuta la rutina.
  // Según el objeto recibido, se ejecutará la versión de cada deporte.
  iniciarSesion(minutos: number): void {
    console.log(`--- Iniciando sesión (intensidad: ${this.entrenamiento.intensidad}) ---`);
    this.entrenamiento.calentar();
    this.entrenamiento.ejecutarRutina(minutos);
    console.log("--- Sesión finalizada ---\n");
  }
}

// ------------------------------------------------------------
// 6. PRUEBA FINAL (Instanciación y ejecución independiente)
// Se crea cada tipo de entrenamiento, se pasa a su AtletaManager
// y se inicia la sesión, comprobando que cada uno funciona
// de forma independiente con el mismo código gestor.
// ------------------------------------------------------------

// Sesión de carrera: intensidad Alta, 45 minutos
const sesionCarrera = new EntrenamientoCarrera("Alta");
const managerCarrera = new AtletaManager(sesionCarrera);
managerCarrera.iniciarSesion(45);

// Sesión de ciclismo: intensidad Media, 90 minutos
const sesionCiclismo = new EntrenamientoCiclismo("Media");
const managerCiclismo = new AtletaManager(sesionCiclismo);
managerCiclismo.iniciarSesion(90);

// Sesión de natación: intensidad Alta, 60 minutos
const sesionNatacion = new EntrenamientoNatacion("Alta");
const managerNatacion = new AtletaManager(sesionNatacion);
managerNatacion.iniciarSesion(60);
