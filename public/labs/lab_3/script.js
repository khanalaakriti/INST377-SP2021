// let currentImageIndex;
let width = 130;
let count = 3;
let list = carousel.querySelector("ul");
let listElement = carousel.querySelector("li");
let position = 0;

carousel.querySelector(".prev").onclick = function () {
    position += width * count;
    position = Math.min(position, 0);
    list.style.marginLeft = position + 'px';
};

carousel.querySelector(".next").onclick = function () {
    position -= width * count;
    position = Math.max(position, -width * (listElement.length - count));
    list.style.marginLeft = position + 'px';
};

function arraysushi() {
    const iarray = [];
    const images = document.querySelector('.images');
    images.forEach((element) => {
        const image = element.querySelector('li');
        console.log(element);
        iarray.append(image);
    });
    console.log(iarray);
};
arraysushi();



// window.addEventListener('load', function(event) {
//     currentImageIndex = 0;
//     document.getElementById("carousel").innerHTML = arrayCarousel[currentImageIndex];
// });
    
// function changeImage(changeByValue){
    
//     currentImageIndex = currentImageIndex + changeByValue;
    
//     if (currentImageIndex == 7) {
//         currentImageIndex = 0;
//     }

//     if (currentImageIndex == -1) {
//         currentImageIndex = 6;
//     }

//     arrayCarousel.map((item, index) => {
//         if (index == currentImageIndex) {
//             document.getElementById("carousel").innerHTML = item;
//         }
//     });

// };