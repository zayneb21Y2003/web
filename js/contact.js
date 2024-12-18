// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
    // Select the form
    const form = document.querySelector("form");

    // Add an event listener for the form submission
    form.addEventListener("submit", (event) => {
        // Get all input values
        const name = document.getElementById("nom").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Check if all fields are filled
        if (!name || !email || !message) {
            alert("Tous les champs sont obligatoires. Veuillez remplir tous les champs.");
            event.preventDefault(); // Prevent form submission
            return;
        }

        // Validate email format
        if (!email.includes("@") || !email.includes(".")) {
            alert("Veuillez entrer une adresse email valide contenant '@' et un domaine.");
            event.preventDefault(); // Prevent form submission
            return;
        }

        // If everything is valid, the form will be submitted
    });
});
