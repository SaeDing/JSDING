const images =[
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
]

const imageselect = images [Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");

bgimage.src = `img/${imageselect}`;


document.body.appendChild(bgimage);