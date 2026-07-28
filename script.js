const ecranOuverture = document.getElementById("ecranOuverture");
const boutonOuverture = document.getElementById("ouvrirInvitation");

boutonOuverture.addEventListener("click", function () {
    ecranOuverture.classList.add("fermer");
});