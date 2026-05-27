let items = [
    {
        "Kategorie": "Burger",
        "Gericht": "Veggie mushroom black burger",
        "Zutaten": "Mixed green salad, Tomatoes, Edamame, Mushrooms",
        "Preis": "16,90€",
        "Bild": "blackburger.png"
    },

    {
        "Kategorie": "Pizza",
        "Gericht": "Pizza Margherita",
        "Zutaten": "Tomato Sauce, Mozzarella",
        "Preis": "11,90€",
        "Bild": "pizzamarg.png"
    },
    {
        "Kategorie" : "Salad",
        "Gericht" : "Warm beef arugula salad",
        "Zutaten" : "Beef, Arugula, Field salad, Greek feta, Cherry tomatoes, Sun-dried Tomatoes, Balsamic vinegar dressing",
        "Preis" : "16,90€",
    },
    {
        "Kategorie" : "Salad",
        "Gericht" : "Warm beef arugula salad",
        "Zutaten" : "Beef, Arugula, Field salad, Greek feta, Cherry tomatoes, Sun-dried Tomatoes, Balsamic vinegar dressing",
        "Preis" : "16,90€",
    }
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