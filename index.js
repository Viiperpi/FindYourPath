let a1 = 0;
function fonction_question1(button, buttonvalue) {
  console.log("Button value for question 1:", buttonvalue);
  console.log("Previous value of a1:", a1);
  a1 = buttonvalue;
  console.log("Updated value of a1:", a1);
  
  // Make a list for all the questions 1 button and find in if any other button has the class 'clicked' and is not the buton that the user clicked.
  var otherClickedButton = Array.from(document.querySelectorAll('.button_question1')).find(btn => btn.classList.contains('clicked') && btn !== button);
  
  if (otherClickedButton) {
    otherClickedButton.classList.remove('clicked'); // Remove "clicked" class from the other button
  }
  button.classList.add('clicked'); // Add "clicked" class to the clicked button
}

let a2 = 0;
function fonction_question2(button, buttonvalue) {
  console.log("Button value for question 2:", buttonvalue);
  console.log("Previous value of a2:", a2);
  a2 = buttonvalue;
  console.log("Updated value of a2:", a2);
  
  // Make a list for all the questions 2 button and find in if any other button has the class 'clicked' and is not the buton that the user clicked.
  var otherClickedButton = Array.from(document.querySelectorAll('.button_question2')).find(btn => btn.classList.contains('clicked') && btn !== button);
  
  if (otherClickedButton) {
    otherClickedButton.classList.remove('clicked'); // Remove "clicked" class from the other button
  }
  button.classList.add('clicked'); // Add "clicked" class to the clicked button
}

let a3 = 0;
function fonction_question3(button, buttonvalue) {
  console.log("Button value for question 3:", buttonvalue);
  console.log("Previous value of a3:", a3);
  a3 = buttonvalue;
  console.log("Updated value of a3:", a3);

    // Make a list for all the questions 3 button and find in if any other button has the class 'clicked' and is not the buton that the user clicked.
    var otherClickedButton = Array.from(document.querySelectorAll('.button_question3')).find(btn => btn.classList.contains('clicked') && btn !== button);
  
    if (otherClickedButton) {
      otherClickedButton.classList.remove('clicked'); // Remove "clicked" class from the other button
    }
    button.classList.add('clicked'); // Add "clicked" class to the clicked button
  }

function similarity(vec1, vec2) {
  if (vec1.length === vec2.length) {
    let cos = 0;
    let calculation1 = 0;
    let lengthVector1 = 0;
    let lengthVector2 = 0;
    for (let i = 0; i < vec1.length; i++) {
      calculation1 += (vec1[i] * vec2[i]);
      // Find the length of the two vectors
      lengthVector1 += (vec1[i] ** 2);
      lengthVector2 += (vec2[i] ** 2);
    }
    lengthVector1 = Math.sqrt(lengthVector1);
    lengthVector2 = Math.sqrt(lengthVector2);
    // Absolute value of the lengths of the two vectors (even if there is no possibility for them to be negative)
    if (lengthVector1 < 0 || lengthVector2 < 0) {
      lengthVector1 = Math.sqrt(lengthVector1) ** 2;
      lengthVector2 = Math.sqrt(lengthVector2) ** 2;
    }
    // Final calculation
    cos = calculation1 / (lengthVector1 * lengthVector2);
    console.log(`The similarity of these two vectors is: ${cos}`);
    return cos
  } else {
    console.log("The two vectors don't have the same number of attributes");
  }
}

async function submit() {
  let user_vector = [a1, a2, a3];
  console.log(user_vector);

  // Reference vectors and their names
  let vectors = [
    { name: "Admin", vector: [2, 9, 2], lien: "https://collegial.sainteanne.ca/etudes/profil-administration-marketing/"},
    { name: "SciencePure", vector: [2, 8, 3], lien: "https://collegial.sainteanne.ca/etudes/sciences-pures-et-appliquees/"},
    { name: "ScienceSanté", vector: [8, 6, 0], lien: "https://collegial.sainteanne.ca/etudes/sciences-de-la-sante/"}
  ];

  // Calculate similarity value for each reference vector
  let similarities = vectors.map(item => ({
    name: item.name,
    similarity: similarity(user_vector, item.vector),
    lien: item.lien
  }));
  console.log(similarities)

  // Find the most similar vector
  let similaritiesArray = similarities.map(item => item.similarity);
  let maxSimilarity = Math.max(...similaritiesArray);
  let mostSimilarVector = similarities.find(item => item.similarity === maxSimilarity);

  // Display the result
  let result = document.getElementById('FieldOfStudy');
  result.textContent = mostSimilarVector.name + " (" + maxSimilarity + ")";
  document.querySelector("#FieldOfStudy").setAttribute('href', mostSimilarVector.lien);
  console.log(mostSimilarVector.lien)
}
