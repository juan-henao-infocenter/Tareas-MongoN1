getNestedRecordsExample = () => [
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
        descripcion: 'matricula normal',
        contacto: {
          value: 'jyarce@mail.com',
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
          value: 'abenitez@mail.com',
		  telefono: 234534566
        },
		valorMatricula: 600000
      },
    },
  ];

  const totalMaticulas = getNestedRecordsExample().reduce((total, item) => total + item.detalles.valorMatricula, 0);
  document.write(`<h2>${totalMaticulas}</h2>`);
  