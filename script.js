const promise1 = fetch('instruments1.json').then(response => response.json());
const promise2 = fetch('instruments2.json').then(response => response.json());

Promise.all([promise1, promise2])
  .then(([data1, data2]) => {
    list1 = data1;
    list2 = data2;

    console.log(list1, list2)

    const instruments = list1.concat(list2);
    let arregloSinRepetidos = []

    instruments.forEach(function (elemento) {
      if (arregloSinRepetidos.every((e) => e.id != elemento.id)) {
        arregloSinRepetidos.push(elemento);
      }
    });

    console.log(instruments);
 
    // Escuchar el clic en el botón "Agregar al carrito" en cada tarjeta
    document.addEventListener('click', (event) => {
      if (event.target.classList.contains('add-to-cart')) {
        const card = event.target.closest('.card');
        const instrumentId = card.dataset.instrumentId;
        const instrument = arregloSinRepetidos.find(
          (item) => item.id === instrumentId
        );
        if (instrument) {
          addToCart(instrument);
        }
      }
    });

    // Función para generar una tarjeta para un instrumento
    function createInstrumentCard(instrument) {
      return `
        <div class="col">
          <div class="card h-100" data-instrument-id="${instrument.id}">
            <img src="${instrument.image}" alt="${instrument.name}" class="card-img-top w-100" style="max-height: 200px;">
            <div class="card-body">
              <h5 class="card-title">${instrument.name}</h5>
              <p class="card-text">Tipo: ${instrument.type}</p>
              <p class="card-text">Precio: $${instrument.price}</p>
              <button class="btn btn-primary add-to-cart">Agregar al carrito</button>
              <!-- Agregar más detalles aquí, como el botón "Agregar al carrito" -->
            </div>
          </div>
        </div>
      `;
    }

    // Función para mostrar la lista de instrumentos en la página
    function renderInstrumentList() {
      const instrumentList = document.querySelector(".row.row-cols-1.row-cols-md-3.g-4");
      arregloSinRepetidos.forEach((instrument) => {
        const cardHTML = createInstrumentCard(instrument);
        instrumentList.innerHTML += cardHTML;
      });
    }

    renderInstrumentList();
  })




