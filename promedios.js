let nombre1 = prompt("Alumno, indique su nombre"); let apellido1 = prompt("ingrese su apellido");

let nombre2 = prompt("Alumno, indique su nombre"); let apellido2 = prompt("indique su apellido");

console.log("El alumno 1 se llama "  +  nombre1    + "  " + apellido1); console.log("El alumno 2 se llama "  +  nombre2    + "  " + apellido2);

const alumnos = [
    {
        nombre: nombre1,
        apellido: apellido1,
        notas: [],
        estado: null,
        promedio: 0
    },
    {
        nombre: nombre2,
        apellido: apellido2,
        notas: [],
        estado: null,
        promedio: 0
    }
]

function agregarNotas(arrayalumnos) {
    arrayalumnos.forEach(function(alumno) {
        for (let i = 0; i < 10; i++) {
            alumno.notas.push(Number(prompt("Ingresa tu nota:" + (i + 1), "1-7")));
        }
    })
}

function sumarNotas(arrayalumnos) {
    let suma = 0;
    arrayalumnos.forEach(function(alumno) {
        alumno.notas.reduce(function(total, cantidad) {
            suma = total + cantidad
        });
        alumno.promedio = promediarNotas(suma, alumno.notas.length);
        if (alumno.promedio >= 4.0) {
            alumno.estado = "Aprobado";
        } else {
            alumno.estado = "Reprobado";
        }
    })
}

function promediarNotas(sumaDeNotas, lengthDelArrayNotas) {
    return (sumaDeNotas / (lengthDelArrayNotas)).toFixed(1);
}

function mostrarResultados(arrayalumnos) {
    arrayalumnos.forEach(function(alumno) {
        document.write(`Alumno: ${alumno.nombre} ${alumno.apellido}, tus notas son: ${alumno.notas}, <br> Tu promedio es: ${alumno.promedio}, <br> Estado: ${alumno.estado} <br>`);
    })
}

agregarNotas(alumnos);
sumarNotas(alumnos);
mostrarResultados(alumnos);
