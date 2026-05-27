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
        "Zudaten": "Beef, Bacon, Dill pickles, Smoked cheese, Ketchup, BBQ souce",
        "Preis": "15,90€",
        "Bild": "burger.png",
    },

    {
        "Kategorie": "Burger",
        "Gericht": "Beef red Burger",
        "Zudaten": "Beef, Cheese, Tomatoes, Lettuce, Onion",
        "Preis": "14,90€",
        "Bild": "redburger.png",
    },

    {
        "Kategorie": "Burger",
        "Gericht": "Blg chicken burger",
        "Zudaten": "Chicken, Cheese, Tomatoes, Lettuce, Onion, Bell pepper",
        "Preis": "15,90€",
        "Bild": "chickenburger.png",
    },

    {
        "Kategorie": "Pizza",
        "Gericht": "Pizza Margherita",
        "Zudaten": "Tomato Sauce, Mozzarella",
        "Preis": "11,90€",
        "Bild": "pizzamar.png",
    },

    {
        "Kategorie": "Pizza",
        "Gericht": "Pizza Chorizo",
        "Zudaten": "Tomato slices, Mozzerella, Chorizo",
        "Preis": "13,90€",
        "Bild": "chorizo.png",
    },

    {
        "Kategorie": "Pizza",
        "Gericht": "Funghi",
        "Zudaten": "Red onion, Olives, Button Mushrooms",
        "Preis": "12,90€",
        "Bild": "funghi.png",
    },
    
    {
        "Kategorie": "Pizza",
        "Gericht": "Quattro Formaggi with Chicken",
        "Zudaten": "Chicken, Mozzeralla, Gorganzola, Fontina, Parmigiano Reggiano",
        "Preis": "15,90€",
        "Bild": "quattro.png",
    },

    {
        "Kategorie": "Salad",
        "Gericht": "Warm beef arugula salad",
        "Zudaten": "Beef, Arugula, Field salad, Greek feta, Cherry tomatoes, Sun-dried Tomatoes, Balsamic-vinegar dressing",
        "Preis": "16,90€",
        "Bild": "arugulasalad.png",
    },

    {
        "Kategorie": "Salad",
        "Gericht": "Mini green Salad",
        "Zudaten": "Green salad, Cucumber, Carrots, Parsley, Radishes",
        "Preis": "7,90€",
        "Bild": "minisalad.png",
    },

    {
        "Kategorie": "Salad",
        "Gericht": "Green Salad with sea food",
        "Zudaten": "Mixed greens, Cherry tomatoes, Red onion, Mussels, Squid rings, Shrimp, Dijon mustard-lemon dressing with dill",
        "Preis": "16,90€",
        "Bild": "seafoodsalad.png",
    },

    {
        "Kategorie": "Salad",
        "Gericht": "Vegan green salad with tofu",
        "Zudaten": "Green salad, Cherry tomatoes, Cucumber, Baby spinach, Edamame, Radishes, Bittercress, Tofu, Peanuts",
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
  let contentRef = document.getElementById('content');
  contentRef.innerHTML = "";

  for (let indexItem = 0; indexItem < items.length; indexItem++) {
    contentRef.innerHTML += getItemTemplate(indexItem);
    
  }
}