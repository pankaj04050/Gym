let randomint;

// Function to generate a random price
function generateRandomPrice() {
  return (Math.floor(Math.random() * 100) + 99).toFixed(2); // Generates a random price between 50 and 149.99
}
function generateRandomreviewcount() {
  return (Math.floor(Math.random() * 100) + 1050).toFixed(0); // Generates a random price between 50 and 149.99
}
function generateRandomreview() {
  randomint = (Math.random() * 1.5 + 3.5).toFixed(1);
  return randomint;
}
function generateStar() {
  if (randomint == 3) {
    return '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>';
  } else if (randomint >= 3.1 && randomint < 4) {
    return '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>';
  } else if (randomint == 4) {
    return '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>';
  } else if (randomint > 4 && randomint <= 4.9) {
    return '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>';
  } else if (randomint == 5) {
    return '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>';
  }
}

function generateEquipmentName(index) {
  const names = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
  ];

  return names[index % names.length];
}
function generateimagepath(index) {
  const imgpath = [
    "https://placehold.jp/500	x500.png",
    "https://placehold.jp/500	x500.png",
    "https://placehold.jp/500	x500.png",
    "https://placehold.jp/500	x500.png",
    "https://placehold.jp/500	x500.png",
    "https://placehold.jp/500	x500.png",
    "https://placehold.jp/500	x500.png",
    "https://placehold.jp/500	x500.png",
    "https://placehold.jp/500	x500.png",
    "https://placehold.jp/500	x500.png",
  ];
  return imgpath[index % imgpath.length];
}

const price = generateRandomPrice();
// Function to generate 10 cards
function generateCards() {
  const itemsContainer = document.getElementById("items-container");
  for (let i = 0; i < 10; i++) {
    const card = document.createElement("div");
    const price = generateRandomPrice();
    card.className = "card c-" + (i + 1);
    card.innerHTML = `
           <div class="off"><p>10% OFF</p></div>
<img src="${generateimagepath(i)}" alt="Gym Equipment Image">
<h3>${generateEquipmentName(i)}</h3>
<p class="price">Price: ₹${
  ((price * 75) - (price * 75 * (10 / 100))).toFixed(2)
}&nbsp &nbsp <strike>₹${(price * 75).toFixed(2)}</strike></p>
<p class="rating">Rating: <span>${generateRandomreview()}/5 (${generateRandomreviewcount()} reviews)</span></p>
<p class="star">${generateStar()}</p>
<div class="buttons">
  <div data-tooltip="Price: ₹${
    ((price * 75) - (price * 75 * (10 / 100))).toFixed(2)
  }" class="button">
    <div class="button-wrapper">
      <div class="text">Buy Now</div>
      <span class="icon">
        <svg class="icon-cart" viewBox="0 0 24.38 30.52" height="30.52" fill="currentcolor" width="24.38" xmlns="http://www.w3.org/2000/svg">
          <title>icon-cart</title>
          <path transform="translate(-3.62 -0.85)" d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"></path>
        </svg>
      </span>
    </div>
  </div>
  <div class="card-button"><i class="far fa fa-shopping-cart"></i></div>
</div>
        `;
    itemsContainer.appendChild(card);
  }
}

// Generate the cards when the page loads
window.onload = function () {
  generateCards();
};
