let entradaNota = "diez"; // Prueba: "diez", "15", "-3", "8"

try {
  const nota = Number(entradaNota);

  if (isNaN(nota)) {
    const error = new Error("La nota debe ser un valor numérico");
    error.name = "ErrorDeValidacion";
    error.respuesta = {
      estado: 401,
      argumentos: entradaNota,
      mensaje: `El valor "${entradaNota}" no se puede convertir a número`
    };
    throw error;
  }

  if (nota < 0 || nota > 10) {
    throw new RangeError(`La nota ${nota} está fuera del intervalo [0, 10]`);
  }

  alert(`Nota validada: ${nota} - Estado: Aprobado`);

} catch (error) {
  if (error.respuesta) {
    alert(`Error ${error.respuesta.estado}: ${error.respuesta.mensaje}`);
  } else if (error instanceof RangeError) {
    alert(`Error de rango: ${error.message}`);
  } else {
    console.warn("Error inesperado detectado:", error);
    throw error;
  }
}