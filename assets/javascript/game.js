window.onload = function () {
    var wins = 0;
    var losses = 0;
    document.getElementById("mywins").innerHTML = "Games Won: " + wins;
    document.getElementById("mylosses").innerHTML = "Games Lost: " + losses;
    runHangman();

  function runHangman() {
  
    var word ;              // Selected word
    var letter ;             // User guess
    var guesses = [ ];      // Stored guesses
    var lives ;             // number of times user can guess before losing
    var wins ;              // Count correct geusses
    var losses;             // Count times player dies
    var space;              // Number of spaces in word '-'
    var boolean;            // Tests if a letter is present
    var wordNum;            // The array identifier of the selected word
    var numLettersMatched;  // Indentify if entire word is completed


    var lives = 10;
    var numLettersMatched = guesses.length;

    var hangmanWords = ["BUTTERCUP", 
                        "NEMO", 
                        "BASKETBALL", 
                        "RACING", 
                        "ITALY", 
                        "PINBALL",
                        "GELATO",
                        "POPCORN",
                        "AWKWARD",
                        "BANJO",
                        "DWARVS",
                        "GYPSY",
                        "FISHOOK",
                        "GAZEBO",
                        "HAIKU",
                        "IVORY",
                        "YACHT",
                        "ZOMBIE",
                        "BAGPIPES",
                        "VAGABOND",
                        "HEALTHCARE"]

    var wordNum = Math.floor((Math.random() * 20) + 0);
    word = hangmanWords[wordNum];
    var space = word.length;
    var holder = [space];

    console.log("word " + wordNum);
    console.log(word);
    console.log(space + " letters");

    document.getElementById("guesses").innerHTML = "Incorrect Letters Guessed: ";

  // display underscore placeholders
    for (i = 0; i < space; i++) {
      holder[i] = "_ ";
      document.getElementById("wordspace").innerHTML = holder.join(" ");
    }

  //when the user presses a key the letter logged
  document.onkeyup = function(event) {
    var letter = event.key;
    letter = letter.toUpperCase();
    // console.log ("Letters: " + guesses.join (", "));
      
   //Is the letter in the word?
    for (var i = 0; i < word.length; i++) {
      if(word[i] === letter) {
        holder[i] = letter + " ";
        displayLetters();
        var boolean = true;
        // console.log(boolean);
        console.log(holder);
        winning();
      }
    }
    if (!boolean) {
      var letter = event.key;
      letter = letter.toUpperCase();
      guesses.push(letter);
      displayGuesses();
      remainingGuesses();
      if (guesses.length == 10) {
        gamesLost();
        displayGuesses();
        alert ("Sorry, you lose!\nThe word was " + word);
        if(confirm("Would you like to play again?")) {
          runHangman();
        }
        
      }
    }

    //Did the player win?
    function winning() {
        var win = true; 
        for (var i = 0; i < holder.length; i++){
          if(holder[i] === "_ "){
            var win = false;
          }
        }
        if (win) {
          gamesWon();
          alert("You win!\nThe word was " + word);
          if(confirm("Would you like to play again?")) {
            runHangman();
          }
        }
    }
    //Display incorrectly guessed letters
    function displayGuesses() {
      for (var i = 0; i < guesses.length; i++) {
            document.getElementById("myguesses").innerHTML = guesses.join(", ");
      }
    }

    //Add correct letters to the word
    function displayLetters() {
      for (var i = 0; i < holder.length; i++) {
        document.getElementById("wordspace").innerHTML = holder.join(" ");
      }
    }


    //Display remaining guesses
    function remainingGuesses() {
      lives--;
      document.getElementById("mylives").innerHTML = "Remaining Lives: " + lives;
    }

  }
}
    //Display games lost
    function gamesLost () {
      losses++;
      document.getElementById("mylosses").innerHTML = "Games Lost: " + losses;
    }
    //Display games won
    function gamesWon() {
      wins++;
      document.getElementById("mywins").innerHTML = "Games Won: " + wins;
    }
}
    //Display games won
    // function gamesWon () {
    //   wins++;
    //   document.getElementById("mywins").innerHTML = "Games Won: " + wins; 
    // }

    //Check to see if letter appears more than once (rough)
      // for (var j = 0; j < space; j++) {
      //     if (word.charAt(j) === letter) {
      //         numLettersMatched++;
      //         console.log(numLettersMatched)
      //     }
      // // }

      // if (boolean == "true") {
      //     var str = document.getElementById("wordspace").innerHTML;
      //     var txt = str.replace(/"_ "/g,letter);
      //     document.getElementById("wordspace").innerHTML = txt;

      // // }




   // numLettersMatched += letter;
   //      if (numLettersMatched === space) {
   //          gameOver(true);
   //      }

 //string length??
 //checkletter??
  
// function gameOver(win) {
//         if (win) {
//             output.innerHTML = messages.win;
//             output.classList.add('win');
//         } else {
//             output.innerHTML = messages.lose;
//             output.classList.add('error');
//         }

  // Show lives
//    comments = function () {
//     showLives.innerHTML = "You have " + lives + " guesses left.";
//     if (lives < 1) {
//       showLives.innerHTML = "Game Over";
//     }
    // for (var i = 0; i < guesses.length; i++) {
    //   if (counter + space === guesses.length) {
    //     showLives.innerHTML = "You Win!";
    //   }
    // }



//   }

//       // Animate man
//   var animate = function () {
//     var drawMe = lives ;
//     drawArray[drawMe]();
//   }

  
//    // Hangman
//   canvas =  function(){

//     myStickman = document.getElementById("stickman");
//     context = myStickman.getContext('2d');
//     context.beginPath();
//     context.strokeStyle = "#fff";
//     context.lineWidth = 3;
//   };
  
//     head = function(){
//       myStickman = document.getElementById("stickman");
//       context = myStickman.getContext('2d');
//       context.beginPath();
//       context.arc(60, 25, 10, 0, Math.PI*2, true);
//       context.stroke();
//     }
    
//   draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    
//     context.moveTo($pathFromx, $pathFromy);
//     context.lineTo($pathTox, $pathToy);
//     context.stroke(); 
// }

//    frame1 = function() {
//      draw (0, 150, 150, 150);
//    };
   
//    frame2 = function() {
//      draw (10, 0, 10, 600);
//    };
  
//    frame3 = function() {
//      draw (0, 5, 70, 5);
//    };
  
//    frame4 = function() {
//      draw (60, 5, 60, 15);
//    };
  
//    torso = function() {
//      draw (60, 36, 60, 70);
//    };
  
//    rightArm = function() {
//      draw (60, 46, 100, 50);
//    };
  
//    leftArm = function() {
//      draw (60, 46, 20, 50);
//    };
  
//    rightLeg = function() {
//      draw (60, 70, 100, 100);
//    };
  
//    leftLeg = function() {
//      draw (60, 70, 20, 100);
//    };
  
//   drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 

    
//    // Reset

//   document.getElementById('reset').onkeyup = function() {
//     correct.parentNode.removeChild(correct);
//     letters.parentNode.removeChild(letters);
//     context.clearRect(0, 0, 400, 400);
//     play();
//   }
// }