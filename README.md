Código para calcular la nota final de alumnos

Este código es una aplicación simple que permite calcular la nota final de los alumnos en base a las notas parciales y la nota final ingresadas. El código utiliza funciones y condicionales para validar los datos ingresados y realizar los cálculos necesarios. No se utilizan arrays en este código.

Elementos utilizados
El programa utiliza los siguientes elementos:

Variables: se utilizan variables para almacenar la cantidad de alumnos, el nombre de cada alumno y las notas parciales y nota final de cada uno.
Funciones: se define la función calcularNotaFinal() que realiza el cálculo de la nota final de un alumno dado su nombre, notas parciales y nota final.
Condicionales: se utilizan condicionales (if) para validar que las notas estén dentro del rango válido (0-10) y que el nombre solo contenga letras.
Bucle for: se utiliza un bucle for para iterar la cantidad de veces ingresada por el usuario y recopilar los datos de cada alumno.
Bucle while: se utiliza un bucle while para solicitar nuevamente los datos (nombre y notas) si no cumplen con los requisitos establecidos.

Pasos para utilizar el código
El programa solicitará al usuario ingresar la cantidad de alumnos a evaluar.
Luego, se iniciará un bucle que se repetirá la cantidad de veces especificada.
En cada iteración del bucle, se solicitará el nombre del alumno.
Se verificará si el nombre es válido, es decir, si solo contiene letras. En caso contrario, se mostrará un mensaje de error.
Si el nombre es válido, se solicitarán las notas parciales y la nota final del alumno.
Se verificará si las notas son números válidos y si están dentro del rango válido (0-10). En caso contrario, se mostrará un mensaje de error.
Si las notas son válidas, se calculará la nota final del alumno utilizando la función calcularNotaFinal() y se mostrará el resultado.
Se repetirán los pasos 3 a 7 hasta que se hayan evaluado todos los alumnos.
