const ecranOuverture = document.getElementById("ecranOuverture");
const boutonOuverture = document.getElementById("ouvrirInvitation");

boutonOuverture.addEventListener("click", function () {
    ecranOuverture.classList.add("fermer");
});

const dateMariage = new Date("2026-12-15T18:00:00").getTime();

function compteARebours() {

    const maintenant = new Date().getTime();

    const difference = dateMariage - maintenant;

    document.getElementById("jours").textContent =
        Math.floor(difference / (1000 * 60 * 60 * 24));

    document.getElementById("heures").textContent =
        Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("minutes").textContent =
        Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("secondes").textContent =
        Math.floor((difference % (1000 * 60)) / 1000);
}

compteARebours();

setInterval(compteARebours, 1000);