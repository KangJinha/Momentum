const images = [
  "../img/겨울왕국.jpg",
  "../img/미니언즈.jpg",
  "../img/토이스토리.jpg",
  "../img/토이스토리2.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

bgImage.id = "bgImage"; //이렇게하면 id가 생성이되는듯?
