// ABOUT POPUP

const aboutButton = document.getElementById("aboutButton");
const aboutPopup = document.getElementById("aboutPopup");

if (aboutButton && aboutPopup) {
  aboutButton.addEventListener("click", function () {
    aboutPopup.classList.toggle("open");
  });
}


// QUFFA GALLERY LIGHTBOX

const galleryImages = document.querySelectorAll(".quffa-gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

if (galleryImages.length > 0 && lightbox && lightboxImage) {

  galleryImages.forEach(function (image) {
    image.addEventListener("click", function () {
      lightboxImage.src = image.src;
      lightbox.classList.add("open");
    });
  });

  lightbox.addEventListener("click", function () {
    lightbox.classList.remove("open");
  });

}


const flyingObject = document.getElementById("flyingObject");

if (flyingObject) {

  let x = window.innerWidth * 0.2;
  let y = window.innerHeight * 0.7;

  let speedX = 3;
  let speedY = 2;

  const maxSpeed = 4

  let rotation = 0;
  let rotationSpeed = 0.5;

  const extraSpace = 400;

  function moveFlyingObject() {

    // Slightly change direction
    speedX += (Math.random() - 0.5) * 0.008;
    speedY += (Math.random() - 0.5) * 0.008;



    speedX = Math.max(-maxSpeed, Math.min(maxSpeed, speedX));
    speedY = Math.max(-maxSpeed, Math.min(maxSpeed, speedY));

    // Slightly change rotation speed
    rotationSpeed += (Math.random() - 0.5) * 0.002;

    const maxRotationSpeed = 0.35;

    rotationSpeed = Math.max(
      -maxRotationSpeed,
      Math.min(maxRotationSpeed, rotationSpeed)
    );

    // Move
    x += speedX;
    y += speedY;

    rotation += rotationSpeed;

    const objectWidth = flyingObject.offsetWidth;
    const objectHeight = flyingObject.offsetHeight;

    // Turn around outside the screen
    if (
      x <= -objectWidth - extraSpace ||
      x >= window.innerWidth + extraSpace
    ) {
      speedX *= -1;
    }

    if (
      y <= -objectHeight - extraSpace ||
      y >= window.innerHeight + extraSpace
    ) {
      speedY *= -1;
    }

    flyingObject.style.left = x + "px";
    flyingObject.style.top = y + "px";
    flyingObject.style.transform = `rotate(${rotation}deg)`;

    requestAnimationFrame(moveFlyingObject);
  }

  moveFlyingObject();
}



const tangerSlide = document.getElementById("tangerSlide");

if (tangerSlide) {

  const tangerImages = [
    "find tanger in my bag/slide01.jpg",
    "find tanger in my bag/slide02.jpg",
    "find tanger in my bag/slide03.jpg",
    "find tanger in my bag/slide04.jpg",
    "find tanger in my bag/slide05.jpg",
    "find tanger in my bag/slide06.jpg",
  ];

  let currentTangerSlide = 0;

  tangerSlide.addEventListener("click", function () {

    currentTangerSlide = currentTangerSlide + 1;

    if (currentTangerSlide >= tangerImages.length) {
      currentTangerSlide = 0;
    }

    tangerSlide.src = tangerImages[currentTangerSlide];

  });

}


const whatdidyoujusthaveSlide = document.getElementById("whatdidyoujusthaveSlide");

if (whatdidyoujusthaveSlide) {

  const whatdidyoujusthaveImages = [
    "whatdidyoujusthave/slide01.jpg",
    "whatdidyoujusthave/slide02.jpg",
    "whatdidyoujusthave/slide03.jpg",
    "whatdidyoujusthave/slide04.jpg",
    "whatdidyoujusthave/slide05.jpg",
    "whatdidyoujusthave/slide06.jpg",
  ];

  let currentwhatdidyoujusthaveSlide = 0;

  whatdidyoujusthaveSlide.addEventListener("click", function () {

    currentwhatdidyoujusthaveSlide = currentwhatdidyoujusthaveSlide + 1;

    if (currentwhatdidyoujusthaveSlide >= whatdidyoujusthaveImages.length) {
      currentwhatdidyoujusthaveSlide = 0;
    }

    whatdidyoujusthaveSlide.src = whatdidyoujusthaveImages[currentwhatdidyoujusthaveSlide];

  });

}