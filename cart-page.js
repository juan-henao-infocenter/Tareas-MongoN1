const promise1 = fetch('cart-items.json').then(response => response.json());

Promise.all([promise1])
  .then(([data1]) => {
    cartItems = data1;

    console.log(cartItems);

// Obtén una referencia a la lista donde se mostrarán los elementos del carrito
const cartList = document.getElementById("cart-container");
// Obtén una referencia al elemento donde se mostrará el precio total de todos los productos
const totalPriceElement = document.getElementById("total-price");

// Utiliza map() para crear una lista de elementos del carrito
const cartItemsHTML = cartItems.map((item) => {
  const unitTotalPrice = item.price * item.quantity;

  return `
    <li class="list-group-item">
      <div class="d-flex flex-row justify-content-start">
        
        <div class="col-md-2">
          <img src="${item.image}" alt="${item.name}" class="img-fluid" style="height: 100px;"/>
        </div>

        <div class="col-md-10 d-flex flex-row justify-content-between">
          <h5 style="width: 200px;">${item.name}</h5>
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
const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
totalPriceElement.textContent = `$${totalPrice}`;
  })




