
function showMessage() {
    const surpriseSection = document.getElementById("surprise");
    surpriseSection.classList.remove("hidden"); 
    surpriseSection.scrollIntoView({ behavior: "smooth" }); 
}
function revealLetter() {
    const letter = document.getElementById("letter");
    letter.classList.remove("hidden");
    letter.classList.add("show");
    letter.scrollIntoView({ behavior: "smooth" });
}
