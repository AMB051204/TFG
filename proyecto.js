// Datos de ejemplo de videojuegos
var games = [
    { 
        title: "Super Mario Odyssey", 
        price: 49.99,
        platform: "Nintendo Switch",
        image: "marioodissey.jpg"
    },
    { 
        title: "The Last of Us Part II", 
        price: 59.99,
        platform: "PlayStation 4",
        image: "thelast.jpg"
    },
    { 
        title: "The Legend of Zelda: Breath of the Wild", 
        price: 59.99,
        platform: "Nintendo Switch",
        image: "zelda.jpg"
    },
    { 
        title: "Grand Theft Auto V", 
        price: 29.99,
        platform: "PC, PlayStation 4, Xbox One",
        image: "gta.jpg"
    },
    { 
        title: "The Witcher 3: Wild Hunt", 
        price: 39.99,
        platform: "PC, PlayStation 4, Xbox One, Nintendo Switch",
        image: "witcher.jpg"
    },
    { 
        title: "God of War", 
        price: 19.99,
        platform: "PlayStation 4",
        image: "godofwar.jpg"
    },
    { 
        title: "Uncharted 4: A Thief's End", 
        price: 19.99,
        platform: "PlayStation 4",
        image: "uncharted.jpg"
    },
    { 
        title: "Horizon Zero Dawn", 
        price: 19.99,
        platform: "PlayStation 4, PC",
        image: "horizon.jpg"
    },
    { 
        title: "Sekiro: Shadows Die Twice", 
        price: 59.99,
        platform: "PC, PlayStation 4, Xbox One",
        image: "sekiro.jpg"
    }
];

// Función para mostrar los videojuegos en la página
function addGamesToColumn(games, columnId) {
    var column = document.getElementById(columnId);
    if (!column) return;

    games.forEach(function(game) {
        var gameItem = document.createElement("div");
        gameItem.classList.add("game-item");

        var title = document.createElement("h2");
        title.textContent = game.title;

        var platform = document.createElement("p");
        platform.textContent = "Plataforma: " + game.platform;

        var price = document.createElement("p");
        price.textContent = "Precio: $" + game.price.toFixed(2);

        var image = document.createElement("img"); // Elemento para la imagen de la carátula
        image.src = game.image; // Ruta de la imagen de la carátula
        image.alt = game.title; // Texto alternativo para accesibilidad

        gameItem.appendChild(image);
        gameItem.appendChild(title);
        gameItem.appendChild(platform);
        gameItem.appendChild(price);

        column.appendChild(gameItem);
    });
}

// Llama a la función para agregar los juegos a cada columna
document.addEventListener("DOMContentLoaded", function() {
    addGamesToColumn(games.slice(0, 3), "game-column-1"); // Primeros 3 juegos
    addGamesToColumn(games.slice(3, 6), "game-column-2"); // Siguientes 3 juegos
    addGamesToColumn(games.slice(6, 9), "game-column-3"); // Últimos 3 juegos
});


