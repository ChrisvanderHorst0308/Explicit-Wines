document.addEventListener("DOMContentLoaded", () => {
    const heroHeading = document.getElementById("hero-heading");
    const heroSection = document.querySelector(".hero");
    const textContainer = document.querySelector('.text-container');
    const line = document.getElementById("line");
    const heroImage = document.getElementById("hero-image");

    // Stap 1: Tekstcontainer uitbreiden en lijn animeren
    setTimeout(() => {
        textContainer.classList.add("text-reveal");
    }, 500); // Wacht 0.5 seconde voordat de animatie begint

    // Verwijder de lijn en laat de tekst in het midden staan
    setTimeout(() => {
        line.classList.add("line-hidden");
    }, 1500); // Verberg de lijn na 1 seconde animatie

    // Stap 2: Verplaats de tekst naar boven zonder stuiteren, verander de achtergrondkleur, en toon de afbeelding
    setTimeout(() => {
        heroHeading.classList.add("move-up");
        heroSection.classList.add("new-bg");
        heroImage.classList.add("visible");
    }, 2000); // Wacht 0.5 seconde na het verbergen van de lijn

    // Stap 3: Verhoog het font-weight van de h2
    setTimeout(() => {
        heroHeading.classList.add("bold-text");
    }, 2500); // Wacht nog eens 0.5 seconde
});
