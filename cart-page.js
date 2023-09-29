const cartItems = [
    {
      name: "Guitarra Acústica",
      type: "Instrumento de Cuerdas",
      image: "https://media.istockphoto.com/id/156547833/es/foto/guitarra-ac%C3%BAstica.jpg?s=1024x1024&w=is&k=20&c=nmJYjciohJ-Z7OiyGjOf91bBeV9kQyObZlomf_n_KEg=",
      id: "abc123",
      price: 500,
      retail_price: 800,
      quantity: 5,
    },
    {
      name: "Guitarra Eléctrica",
      type: "Instrumento de Cuerdas",
      image:
        "https://cdn.pixabay.com/photo/2017/08/06/07/28/guitar-2589863_1280.jpg",
      id: "def456",
      price: 700,
      retail_price: 1200,
      quantity: 2,
    },
    {
      name: "Batería",
      type: "Instrumento de Percusión",
      image: "https://cdn.pixabay.com/photo/2023/01/29/00/16/drums-7751985_1280.jpg",
      id: "ghi789",
      price: 1000,
      retail_price: 1500,
      quantity: 1,
    },
    {
      name: "Piano",
      type: "Instrumento de Teclado",
      image: "https://cdn.pixabay.com/photo/2017/04/04/20/40/instrument-2203044_1280.jpg",
      id: "jkl012",
      price: 2000,
      retail_price: 3000,
      quantity: 1,
    },
    {
      name: "Violín",
      type: "Instrumento de Cuerdas",
      image: "https://cdn.pixabay.com/photo/2017/07/14/21/57/instrument-2505099_1280.jpg",
      id: "mno345",
      price: 300,
      retail_price: 500,
      quantity: 5,
    },
    {
      name: "Trompeta",
      type: "Instrumento de Viento Metal",
      image: "https://cdn.pixabay.com/photo/2011/06/17/15/14/trumpet-7975_1280.jpg",
      id: "pqr678",
      price: 400,
      retail_price: 700,
      quantity: 3,
    },
    {
      name: "Flauta",
      type: "Instrumento de Viento Madera",
      image: "https://cdn.pixabay.com/photo/2020/04/16/13/11/antique-5050542_1280.jpg",
      id: "stu901",
      price: 200,
      retail_price: 400,
      quantity: 1,
    },
    {
      name: "Saxofón",
      type: "Instrumento de Viento Madera",
      image: "https://cdn.pixabay.com/photo/2016/05/24/11/54/saxophone-1412218_1280.jpg",
      id: "vwx234",
      price: 800,
      retail_price: 1300,
      quantity: 2,
    },
    {
      name: "Clarinete",
      type: "Instrumento de Viento Madera",
      image: "https://cdn.pixabay.com/photo/2016/10/16/04/51/music-1744419_1280.jpg",
      id: "yz0123",
      price: 400,
      retail_price: 700,
      quantity: 2,
    },
    {
      name: "Bajo Eléctrico",
      type: "Instrumento de Cuerdas",
      image: "https://cdn.pixabay.com/photo/2021/06/10/12/22/bass-guitar-6325873_1280.jpg",
      id: "456789",
      price: 600,
      retail_price: 1000,
      quantity: 3,
    },
    {
      name: "Bajo Eléctrico",
      type: "Instrumento de Cuerdas",
      image: "https://cdn.pixabay.com/photo/2021/06/10/12/22/bass-guitar-6325873_1280.jpg",
      id: "456789",
      price: 600,
      retail_price: 1000,
      quantity: 3,
    },
  ];
  
  console.log(3+3);
  console.log("3"+"3");
  console.log("3"+3);
  console.log(3+"3");
  console.log(3+3-3);
  console.log("3"+"3"-"3");
  
  let arregloSinRepetidos = []
  cartItems.forEach(function (elemento) {
    if (arregloSinRepetidos.every((e)=>e.id != elemento.id)) {
      arregloSinRepetidos.push(elemento);
    }});
  
  console.log(cartItems);
  
  // Obtén una referencia a la lista donde se mostrarán los elementos del carrito
  const cartList = document.getElementById("cart-container");
  // Obtén una referencia al elemento donde se mostrará el precio total de todos los productos
  const totalPriceElement = document.getElementById("total-price");
  
  // Utiliza map() para crear una lista de elementos del carrito
  const cartItemsHTML = arregloSinRepetidos.map((item) => {
    const unitTotalPrice = item.price * item.quantity;
  
    return `
      <li class="list-group-item">
        <div class="d-flex flex-row justify-content-start">
          
          <div class="col-md-2">
            <img src="${item.image}" alt="${item.name}" class="img-fluid" style="height: 100px;"/>
          </div>
  
          <div class="col-md-10 d-flex flex-row justify-content-between">
            <h5>${item.name}</h5>
            <p>Precio: $${item.price}</p>
            <p>Precio Total: $${unitTotalPrice}</p>
            <p>Cantidad: ${item.quantity}</p>
          </div>
  
        </div>
      </li>
    `;
  });
  
  // Agrega la lista generada al contenedor de la lista del carrito
  cartList.innerHTML = cartItemsHTML.join('');
  
  // Calcula y muestra el precio total de todos los productos
  const totalPrice = arregloSinRepetidos.reduce((total, item) => total + item.price * item.quantity, 0);
  totalPriceElement.textContent = `$${totalPrice}`;
  
  
  