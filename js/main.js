function calcularNotaFinal(nombre, notaParcial1, notaParcial2, notaFinal) {
  let notaFinalAlumno = 0;

  if (
    esNumeroValido(notaParcial1) &&
    esNumeroValido(notaParcial2) &&
    esNumeroValido(notaFinal) &&
    esRangoValido(notaParcial1) &&
    esRangoValido(notaParcial2) &&
    esRangoValido(notaFinal)
  ) {
    notaFinalAlumno = (notaParcial1 + notaParcial2 + notaFinal) / 3;
    alert("La nota final de " + nombre + " es: " + notaFinalAlumno.toFixed(2));
  } else {
    alert("Las notas deben ser números en un rango válido (0-10).");
  }
}

function esNumeroValido(numero) {
  return typeof numero === "number" && !isNaN(numero);
}

function esRangoValido(numero) {
  return numero >= 0 && numero <= 10;
}

let cantidadAlumnos = parseInt(
  prompt("Ingrese la cantidad de alumnos a evaluar:")
);

let i = 0;
while (i < cantidadAlumnos) {
  let nombre = prompt("Ingrese el nombre del alumno " + (i + 1) + ":");

  if (!esStringValido(nombre)) {
    alert(
      "El nombre debe contener solo letras. Por favor, ingréselo nuevamente."
    );
  } else {
    let notaParcial1 = parseFloat(
      prompt("Ingrese la primera nota parcial de " + nombre + ":")
    );
    let notaParcial2 = parseFloat(
      prompt("Ingrese la segunda nota parcial de " + nombre + ":")
    );
    let notaFinal = parseFloat(
      prompt("Ingrese la nota final de " + nombre + ":")
    );

    if (
      esNumeroValido(notaParcial1) &&
      esNumeroValido(notaParcial2) &&
      esNumeroValido(notaFinal) &&
      esRangoValido(notaParcial1) &&
      esRangoValido(notaParcial2) &&
      esRangoValido(notaFinal)
    ) {
      calcularNotaFinal(nombre, notaParcial1, notaParcial2, notaFinal);
      i++;
    } else {
      alert(
        "Las notas deben ser números en un rango válido (0-10). Por favor, ingréselas nuevamente."
      );
    }
  }
}

function esStringValido(texto) {
  return typeof texto === "string" && texto.trim() !== "";
}
