function myFunction(){
	alert("Welcome to the house of adventure!")
    var enterhouse = alert("You've arrived in a strange house, lets's get started!");

	alert("You are now in the first stage. Please answer the follwing questions in English:")

    var Preference = prompt("Please chose a catagorie by writing it in the box.. iq or general")

    if (Preference == "general"){



    var s1q1 = prompt("Who won the football world cup in 2002?");
    if (s1q1 == "brazil") {
	   alert("Correct! you have earned 5hp!")

    var s1q2 = prompt("Which country is famous for Suchi?");
    if (s1q2 == "Japan") {
    	alert("Correct! you earned 5hp. You have now 20hp!");

    alert("You are going to the final qustion of stage 1. GL!");

    var s1q3 =	prompt("What is the biggest animal in the wordl?");
    if (s1q3 == "Blue Whale") {
    	alert("Correct! Congratulations! You have completed the first stage with 30hp!");
    	}
   }
     else if (s1q3 != "Blue Whale") {
     	alert("Incorrect! Have a terrifying stay at my adventurous home :)")
     }

    else if (s1q2 != "Japan"){
    	alert("Incorrect! You were alomst free to go home. Try again!")
    }

    }

    else if (s1q1 != "brazil") {
	alert("Incorrect! Try again and Good luck!")
    }
 }
    if (Preference == "iq") {
    var s2q1 = prompt("Solve this please: 7.8?");
    if (s2q1 == "56") {
    	alert("Correct! You have earned 5hp!")
     }
  }

  var s2q2 = prompt("Which number should come next in the pattern? 37, 34, 31, 28..?")
  if (s2q2 == "25") {
  	alert("Correct! You are doing well, to the next qustion we go!")
  }

  var s2q3 = prompt("Solve this please: 900-143?")
  if (s2q3 == "757") {
  	alert("Correct! You have completed the challenge, and you are allowed to go home harmless!:)")
  }

  else if (s2q3 != "757") {
  	alert("Whoa, you have faild the challenge, welcome to my terrifying home. :)")
  }

  else if (s2q2 != "25") {
  	alert("Oops. that was not the right move.. :(")
  }

  else if (s2q1 != "56") {
  	alert("Whopsie, that was not right. You can try again!")
  }



}


