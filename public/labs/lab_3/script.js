const arrayCarousel = [
    '<img src="./images/onigiri_1.png" alt="Image 1">',
    '<img src="./images/onigiri_2.png" alt="Image 2">',
    '<img src="./images/onigiri_3.png" alt="Image 3">',
    '<img src="./images/onigiri_4.png" alt="Image 4">',
    '<img src="./images/roll_1.png" alt="Image 5">',
    '<img src="./images/roll_2.png" alt="Image 6">',
    '<img src="./images/roll_3.png" alt="Image 7">'
];

let currentImageIndex;

window.addEventListener('load', function(event) {
    currentImageIndex = 0;
    document.getElementById("carousel").innerHTML = arrayCarousel[currentImageIndex];
});
    
function changeImage(changeByValue){
    
    currentImageIndex = currentImageIndex + changeByValue;
    
    if (currentImageIndex == 7) {
        currentImageIndex = 0;
    }

    if (currentImageIndex == -1) {
        currentImageIndex = 6;
    }

    arrayCarousel.map((item, index) => {
        if (index == currentImageIndex) {
            document.getElementById("carousel").innerHTML = item;
        }
    });

};