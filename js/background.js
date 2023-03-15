const images = [
    "벼랑위의포뇨.jpg","벼랑위의포뇨2.jpg",
    "센과치히로.jpg","센과치히로5.jpeg",
    "지브리파크.jpg","토토로.jpg","토토로2.jpg","토토로3.jpg",
    "하울의움직이는성3.png","하울의움직이는성4.png"
]

const chosenImage = images[Math.floor(Math.random()* images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

bgImage.id = "bgImage" //이렇게하면 id가 생성이되는듯?

// const pickedImageNumber = Math.floor(Math.random()* images.length);
// document.body.style.backgroundImage = `img(${images[pickedImageNumber]})`;