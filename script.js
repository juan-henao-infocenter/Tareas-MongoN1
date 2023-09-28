const cartItems =[
    {
      "name": "Acoustic Guitar",
      "type": "String Instrument",
      "image": "https://example.com/acoustic_guitar.jpg",
      "id": "abc123",
      "price": 500,
      "retail_price": 800,
      "quantity":5
    },
    {
      "name": "Electric Guitar",
      "type": "String Instrument",
      "image": "https://example.com/electric_guitar.jpg",
      "id": "def456",
      "price": 700,
      "retail_price": 1200,
      "quantity":2
    },
    {
      "name": "Drums",
      "type": "Percussion Instrument",
      "image": "https://example.com/drums.jpg",
      "id": "ghi789",
      "price": 1000,
      "retail_price": 1500,
      "quantity":1
    },
    {
      "name": "Piano",
      "type": "Keyboard Instrument",
      "image": "https://example.com/piano.jpg",
      "id": "jkl012",
      "price": 2000,
      "retail_price": 3000,
      "quantity":1
    },
    {
      "name": "Violin",
      "type": "String Instrument",
      "image": "https://example.com/violin.jpg",
      "id": "mno345",
      "price": 300,
      "retail_price": 500,
      "quantity":5
    },
    {
      "name": "Trumpet",
      "type": "Brass Instrument",
      "image": "https://example.com/trumpet.jpg",
      "id": "pqr678",
      "price": 400,
      "retail_price": 700,
      "quantity":3
    },
    {
      "name": "Flute",
      "type": "Woodwind Instrument",
      "image": "https://example.com/flute.jpg",
      "id": "stu901",
      "price": 200,
      "retail_price": 400,
      "quantity":1
    },
    {
      "name": "Saxophone",
      "type": "Woodwind Instrument",
      "image": "https://example.com/saxophone.jpg",
      "id": "vwx234",
      "price": 800,
      "retail_price": 1300,
      "quantity":2
    },
    {
      "name": "Clarinet",
      "type": "Woodwind Instrument",
      "image": "https://example.com/clarinet.jpg",
      "id": "yz0123",
      "price": 400,
      "retail_price": 700,
      "quantity":2
    },
    {
      "name": "Bass Guitar",
      "type": "String Instrument",
      "image": "https://example.com/bass_guitar.jpg",
      "id": "456789",
      "price": 600,
      "retail_price": 1000,
      "quantity":3
    }
  ]


  const totalPrice = cartItems.reduce(function(total, instrument) {
    return total + (instrument.precio*instrument.quantity);
  }, 0);


  document.write(totalPrice);