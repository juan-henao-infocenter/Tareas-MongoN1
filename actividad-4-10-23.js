const getNestedRecordsExample = () => [
    {
        id: 1,
        nombre: 'Camila Lopez',
        detalles: {
            descripcion: 'matricula normal',
            contacto: {
                email: 'clopez@mail.com',
                telefono: 83242834
            },
            valorMatricula: 200000
        },
    },
    {
        id: 2,
        nombre: 'Pedro Perez',
        detalles: {
            descripcion: 'beca',
            contacto: {
                email: 'pperez@mail.com',
                telefono: 83242834
            },
            valorMatricula: 0
        },
    },
    {
        id: 3,
        nombre: 'Juan Yarce',
        detalles: {
            descripcion: 'matricula condicional',
            contacto: {
                email: 'jyarce@mail.com',
                telefono: 1122334455
            },
            valorMatricula: 400000
        },
    },
    {
        id: 4,
        nombre: 'Alberto Benitez',
        detalles: {
            descripcion: 'matricula condicional',
            contacto: {
                email: 'abenitez@mail.com',
                telefono: 234534566
            },
            valorMatricula: 600000
        },
    },
];

const totalMaticulas = `<h2>${getNestedRecordsExample().reduce((total, item) => total + item.detalles.valorMatricula, 0)}</h2>`;
const telefonos = [];
getNestedRecordsExample().forEach((e) => {
    telefonos.push(`<li><h2>${e.detalles.contacto.telefono}</h2></li>`)
});
telefonosText = telefonos.reduce((c, e) => c + e, '');

console.log(telefonos);
const estudianteMatriculaMax = getNestedRecordsExample().reduce((estudianteMasGrande, estudianteActual) => {
    if (estudianteActual.detalles.valorMatricula > estudianteMasGrande.detalles.valorMatricula) {
        return estudianteActual;
    } else {
        return estudianteMasGrande;
    }
}, getNestedRecordsExample()[0]);

const estudiantesMatriculaCondicional = getNestedRecordsExample().filter((estudianteActual) => estudianteActual.detalles.descripcion === 'matricula condicional');

const estidiantesMatriculaCondicionalText = estudiantesMatriculaCondicional.map(e => `<li><h2>${e.detalles.contacto.email}</h2></li>`)
console.log(estudiantesMatriculaCondicional);

document.write('<h1>Actividad Octubre 4, 2023</h1>', '<h1>Total matriculas</h1>', totalMaticulas, '<h1>Telefonos</h1>', `<ul>${telefonosText}</ul>`, '<h1>Estudiante matricula mas grande</h1>', `<h2>${estudianteMatriculaMax.nombre}</h2>`, '<h1>Estudiante matricula Condicional</h1>', `<h2>${estudiantesMatriculaCondicional.length > 0 ? estudiantesMatriculaCondicional[0].detalles.contacto.email : "No hay estudiantes con matricula condicional"}</h2>`, '<h1>estudiantes matricula condicional</h1>', `<ul>${estidiantesMatriculaCondicionalText}</ul>`);
