const dateMariage = new Date("2026-08-15T18:00:00").getTime();

function compteARebours() {

    const maintenant = new Date().getTime();

    const difference = dateMariage - maintenant;

    const jours = Math.floor(difference / (1000 * 60 * 60 * 24));
    const heures = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const secondes = Math.floor(
        (difference % (1000 * 60)) / 1000
    );

    document.getElementById("jours").textContent = jours;
    document.getElementById("heures").textContent = heures;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("secondes").textContent = secondes;
}

compteARebours();

setInterval(compteARebours, 1000);

// Écran d'ouverture

const ecranOuverture = document.getElementById("ecranOuverture");
const boutonOuverture = document.getElementById("ouvrirInvitation");

boutonOuverture.addEventListener("click", function () {

    ecranOuverture.classList.add("fermer");

});