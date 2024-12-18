function validerQuizz() {
    const form = document.forms["quiz-form"];

    // Correct answers for each question
    const reponses = {
        q1: "HyperText Markup Language",
        q2: "CSS",
        q3: "a"
    };

    let score = 0;
    const totalQuestions = Object.keys(reponses).length;

    // Loop through each question to check the answers
    for (let question in reponses) {
        const selectedAnswer = form[question].value; // Get the selected value
        if (selectedAnswer === reponses[question]) {
            score++;
        }
    }

    // Display the result
    document.getElementById("resultat").innerHTML = `
        <p>Votre score est : ${score} / ${totalQuestions}</p>
    `;
}
