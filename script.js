let items = [
    {
        "Kategorie": "Burger",
        "Gericht": "Veggie mushroom black burger",
        "Zutaten": "Mixed green salad, Tomatoes, Edamame, Mushrooms",
        "Preis": "16,90€",
        "Bild": "blackburger.png"
    },

    {
        "Kategorie": "Burger",
        "Gericht": "All meat burger",
        "Zutaten": "Beef, Bacon, Dill pickles, Smoked cheese, Ketchup, BBQ souce",
        "Preis": "15,90€",
        "Bild": "burger.png",
    },

    {
        "Kategorie": "Burger",
        "Gericht": "Beef red Burger",
        "Zutaten": "Beef, Cheese, Tomatoes, Lettuce, Onion",
        "Preis": "14,90€",
        "Bild": "redburger.png",
    },

    {
        "Kategorie": "Burger",
        "Gericht": "Blg chicken burger",
        "Zutaten": "Chicken, Cheese, Tomatoes, Lettuce, Onion, Bell pepper",
        "Preis": "15,90€",
        "Bild": "chickenburger.png",
    },

    {
        "Kategorie": "Pizza",
        "Gericht": "Pizza Margherita",
        "Zutaten": "Tomato Sauce, Mozzarella",
        "Preis": "11,90€",
        "Bild": "pizzamar.png",
    },

    {
        "Kategorie": "Pizza",
        "Gericht": "Pizza Chorizo",
        "Zutaten": "Tomato slices, Mozzerella, Chorizo",
        "Preis": "13,90€",
        "Bild": "chorizo.png",
    },

    {
        "Kategorie": "Pizza",
        "Gericht": "Funghi",
        "Zutaten": "Red onion, Olives, Button Mushrooms",
        "Preis": "12,90€",
        "Bild": "funghi.png",
    },
    
    {
        "Kategorie": "Pizza",
        "Gericht": "Quattro Formaggi with Chicken",
        "Zutaten": "Chicken, Mozzeralla, Gorganzola, Fontina, Parmigiano Reggiano",
        "Preis": "15,90€",
        "Bild": "quattro.png",
    },

    {
        "Kategorie": "Salad",
        "Gericht": "Warm beef arugula salad",
        "Zutaten": "Beef, Arugula, Field salad, Greek feta, Cherry tomatoes, Sun-dried Tomatoes, Balsamic-vinegar dressing",
        "Preis": "16,90€",
        "Bild": "arugulasalad.png",
    },

    {
        "Kategorie": "Salad",
        "Gericht": "Mini green Salad",
        "Zutaten": "Green salad, Cucumber, Carrots, Parsley, Radishes",
        "Preis": "7,90€",
        "Bild": "minisalad.png",
    },

    {
        "Kategorie": "Salad",
        "Gericht": "Green Salad with sea food",
        "Zutaten": "Mixed greens, Cherry tomatoes, Red onion, Mussels, Squid rings, Shrimp, Dijon mustard-lemon dressing with dill",
        "Preis": "16,90€",
        "Bild": "seafoodsalad.png",
    },

    {
        "Kategorie": "Salad",
        "Gericht": "Vegan green salad with tofu",
        "Zutaten": "Green salad, Cherry tomatoes, Cucumber, Baby spinach, Edamame, Radishes, Bittercress, Tofu, Peanuts",
        "Preis": "14,90€",
        "Bild": "vegansalad.png",
    },
]

function getItemTemplate(indexItem){
    return `
        <div class="item-card">

            ${items[indexItem].Bild ? 
            `<img class="burger-img" src="${items[indexItem].Bild}">`
            : ""}

            <div class="item-info">
                <h2>${items[indexItem].Gericht}</h2>

                <p>${items[indexItem].Zutaten}</p>
            </div>

            <span class="price">
                ${items[indexItem].Preis}
            </span>

        </div>
    `;
}



function renderItem() {
    let burgerbox = document.getElementById('burger_box')
    burgerbox.innerHTML = "";
    let pizzabox = document.getElementById('pizza_box')
    pizzabox.innerHTML = "";
    let saladbox = document.getElementById('salad_box')
    saladbox.innerHTML = "";
  for (let indexItem = 0; indexItem < items.length; indexItem++) {
    if(items[indexItem].Kategorie === "Pizza"){
        pizzabox.innerHTML += getItemTemplate(indexItem);
    }
    else if(items[indexItem].Kategorie === "Burger"){
        burgerbox.innerHTML += getItemTemplate(indexItem);
    }
    else if(items[indexItem].Kategorie === "Salad"){
        saladbox.innerHTML += getItemTemplate(indexItem);
  }      
  }
  

}

