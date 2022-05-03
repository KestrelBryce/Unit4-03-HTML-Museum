  /* This function compares the user's age to current Canadian age restrictions on movies. 
*/

function displayGreeting () {

    // user input
  let userAge = parseInt((document.getElementById('Inserted-age-here').value));

  
    // Process
    // R-RATED
  if (userAge >= 18) {
    document.getElementById("greeting").innerHTML = "You are " + userAge + ", which means you are allowed to see an R-rated movie alone."
  }
  
    // PG-14
  else if (userAge >= 14) {
    document.getElementById("greeting").innerHTML = "You are " + userAge + ", which means you are allowed to see a PG-14 movie alone."
  }

    // PG-13
  else if (userAge == 13) {
    document.getElementById("greeting").innerHTML = "You are " + userAge + ", which means you are allowed to see a PG-13 movie alone."
  }

    // G/PG
  else if (userAge >= 10) {
    document.getElementById("greeting").innerHTML = "You are " + userAge + ", which means you are allowed to see a G/PG movie alone."
  }

  // No movies for you
  else {
    document.getElementById("greeting").innerHTML = "You are " + userAge + ", which means you are not allowed to see any movies alone."
  }

}
