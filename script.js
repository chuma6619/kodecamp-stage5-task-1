// Array of  Cars object
let cars = [
    { image: "lexus.webp",
    name: " Lexus LX",
    price: "$18000"
    },

    { image: "maserati.webp",
    name: " Maserati Ghibli",
    price: "$31000"
    },

    { image: "mercedes-benz.webp",
    name: " Mercedes-Benz AMG G 63",
    price: "$26000"
    },

    { image: "nissan-magnite.jpg",
    name: " Nissan Magnite",
    price: "$17000"
    },

    { image: "porche.webp",
    name: " Porsche Macan",
    price: "$20000"
    },

    { image: "toyota-rava.png",
    name: " Toyota RAVA",
    price: "$20000"
    },

    { image: "jaguar.webp",
    name: " Jaguar F-TYPE",
    price: "$26000"
    },

    { image: "lamborghini.webp",
    name: " Lamborghini Urus",
    price: "$30000"
    },

    { image: "rolls-royce.webp",
    name: " Rolls Royce Phantom",
    price: "$35000"
    },

    { image: "aston-martin.webp",
    name: " Aston Martin DB11",
    price: "$20000"
    },

    { image: "ferrari.webp",
    name: " Ferrari F8 Tributo",
    price: "$17000"
    },

    { image: "ford-aspire.webp",
    name: " Ford Aspire",
    price: "$15000"
    }
];

// display the array on the DOM
let carWrapper = document.getElementById("car-wrapper");
let gallery="";

for( let i=0; i< cars.length; i++){
    gallery += `
    <div class="col-sm-12 col-md-4 shadow rounded-3 mb-3">
      <div class="car-image">
        <img src="./images/${cars[i].image}" alt="Car" class="img-fluid rounded-3 mt-3" id="image">
      </div>
      <div class="car-info ps-2">
        <h5 class="car-name pt-3 text-navy" id="name">${cars[i].name}</h5>
        <h6 class="car-price text-navy" id="price">${cars[i].price}</h6>
        <button class="btn text-navy bg-orange mb-3 fw-bold">Buy</button>
      </div>
    </div>
    `
    carWrapper.innerHTML = gallery;
};