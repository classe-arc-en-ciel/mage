const monBouton = document.querySelector("#BT1");
const myHeading = document.querySelector("#titre2");

function EntrerNom() {
    const monNom = prompt("Veuillez saisir votre prénom.");
    localStorage.setItem("nom", monNom);
    myHeading.textContent = "Bonjour " + monNom + " !";
}

monBouton.addEventListener("click", function () {
    EntrerNom();
});

