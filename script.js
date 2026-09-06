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