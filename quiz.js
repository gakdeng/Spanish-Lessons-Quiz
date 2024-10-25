
alert('Spanish Lessons');

  // start by writing an array of questions
let questions = [
    { q: "un gato esta aqui is 'A cat is here' in English", a: 't' },
    { q: "Ese perro es muy grande! is 'A pig is big' in English", a: 'f' },
    { q: "Mi abrigo es muy barato is 'My hat is not cheap' in English", a: 'f' },
    { q: "Soy es estudiante en universidad is 'I am a student in the university' in English", a: 't' },
    { q: "Mi maestro es perfecto en espanol is 'My teacher is perfect in Spanish' in English", a: 't' }
];
  // iterating through the score 
let score = 0;

 // loop through questions
questions.forEach((question) => {
    let userInput = confirm(question.q);

    if ((userInput && question.a === 't') || (!userInput && question.a === 'f')) {
        score++;    // increment through scores 
        alert("That's correct");
    } else {
        alert("Oops! That's wrong!");
    }
});

alert('Your score is ' + score);
