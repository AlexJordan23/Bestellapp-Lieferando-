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
        "Bild": "",
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