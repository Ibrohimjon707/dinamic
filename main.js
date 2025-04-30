let form = document.querySelector("form");
let input = document.querySelector("input");
let container = document.querySelector(".container");

async function getName(ism) {
  try {
    let respons = await fetch(`https://api.nationalize.io/?name=${ism}`);
    let data = await respons.json();
    container.innerHTML = null;
    data.country.map((item, index) => {
      let card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <span>${index + 1}</span>
        <h2>${item.country_id}</h2>
        <p>${(item.probability), String(item.probability).slice(0, 4)}</p>
      `;
      
      container.appendChild(card);
    });
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getName(input.value.toLowerCase());
  input.value = null;
});

