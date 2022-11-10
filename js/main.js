let sliderImage = Array.from(document.querySelectorAll('.slider-container div'));
let sliderCount = sliderImage.length;
let currentSlide = 1;

var paginationElement = document.createElement('ul');
paginationElement.setAttribute('id', 'pagination-ul');
for (let i = 1; i <= sliderCount; i++) {
    let paginationItem = document.createElement('li');
    paginationItem.setAttribute('data-index', i);
    paginationElement.appendChild(paginationItem);
};
document.getElementById('indicators').appendChild(paginationElement);

let paginationCreatedUl = document.getElementById('pagination-ul');
let paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));


for (let i = 0; i < paginationsBullets.length; i++) {
    paginationsBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    };
};

setInterval(() => {
    currentSlide++;
    if (currentSlide === sliderCount + 1) {
        currentSlide = 1;
    };
    theChecker();
}, 2500);

theChecker();

// Functions
function theChecker() {
    removeAllActive();
    sliderImage[currentSlide - 1].classList.add('active');
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');
};

function removeAllActive() {
    sliderImage.forEach((img) => {
        img.classList.remove('active');
    });
    paginationsBullets.forEach((li) => {
        li.classList.remove('active');
    });
};
