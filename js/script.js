  /* This function compares the user's age to current Canadian age restrictions on movies. 
*/

function displayGreeting () {

    // user input
  let userAge = parseInt((document.getElementById('Inserted-age-here').value));

  let dayWeek = (document.getElementById('Inserted-age-here').value);
  
    // Process
    // Free admission
  if (userAge >= 18) {
    document.getElementById("greeting").innerHTML = "You are " + userAge + ", which means you are allowed to see an R-rated movie alone."
  }
  
    // Student discount
  else if (userAge >= 14) {
    document.getElementById("greeting").innerHTML = "You are " + userAge + ", which means you are allowed to see a PG-14 movie alone."
  }

    // Day discount
  else if (userAge == 13) {
    document.getElementById("greeting").innerHTML = "You are " + userAge + ", which means you are allowed to see a PG-13 movie alone."
  }

  // Normal admission
  else {
    document.getElementById("greeting").innerHTML = "You are " + userAge + ", which means you are not allowed to see any movies alone."
  }

}
