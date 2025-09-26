// Grab the favorites list and total
const list = document.getElementById("fav-list");
const totalEl = document.getElementById("fav-total");
let total = 0;

// Grab all the buttons
const buttons = document.querySelectorAll(".fav");

// Loop through each button
for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];

  button.addEventListener("click", function () {
    // Get the parent dish div
    const dish = button.parentElement;

    // Get name and price from the dish attributes
    const name = dish.getAttribute("data-name");
    const price = parseFloat(dish.getAttribute("data-price"));

    // If not selected yet
    if (!dish.classList.contains("selected")) {
      dish.classList.add("selected");
      button.textContent = "Remove from Favorites";

      // Make a new list item
      const li = document.createElement("li");
      li.textContent = name + " - $" + price.toFixed(2);
      list.appendChild(li);

      // Update total
      total = total + price;
    } else {
      // Remove highlight
      dish.classList.remove("selected");
      button.textContent = "Add to Favorites";

      // Find and remove the list item by checking text
      const items = list.getElementsByTagName("li");
      for (let j = 0; j < items.length; j++) {
        if (items[j].textContent.includes(name)) {
          list.removeChild(items[j]);
          break;
        }
      }

      // Subtract from total
      total = total - price;
    }

    // Update total display
    totalEl.textContent = total.toFixed(2);
  });
}

