var arrayFortuneOne = ["will sit on a ", "will run away from a ", "will scream at a ", "will jump off of a ", "will kick a ", "will fight a ", "will play with a ", "will sleep next to a ", "will sing to a ", "will doodle on a ", "will marry a ", "will eat a ", "will dance with a ", "will have an adventure with a ", "will stare at a "];
var arrayFortuneTwo = ["bed ", "big cat ", "small puddle ", "scary bear ", "wobbly chair ", "monster ", "a creepy doll ", "little bird ", "very large bird ", "gameboy advance ", "404 error ", "melted ice cream ", "cheese ", "faraway observer", "tall pedestal ", "fortune cookie ", "hippopotamus ", "number seven ", "vampire ", "tiny ravenous dog ", "very cute fish ", "silly clown ", "cool graphic novel ", "greek statue ", "magic carpet "];
var arrayFortuneThree = ["and die ", "and cry ", "and dance ", "and win an award ", "and get tutoring for an exam ", "and learn a new language ", "and mysteriously disappear ", "and fall down a cliff ", "and have a good day ", "and have an unlucky day ", "and find a new hobby ", "and burn their toast ", "and break an old record ", "and grieve ", "and fall in love ", "and bring others happiness ", "and become haunted ", "and never escape ", "and become a mermaid ", "and fly into the sunset ", "and slay a dragon"];


//remember it needs to be an alert
function halfNumber(){
  var num = document.querySelector('#half-input').value;
  var result = num/2;
  alert(result);
}

function fortune(){
  var visName = document.querySelector('#fortune-input').value;
  var partOne = Math.floor( Math.random() * arrayFortuneOne.length );
  var partTwo = Math.floor( Math.random() * arrayFortuneTwo.length );
  var partThree = Math.floor( Math.random() * arrayFortuneThree.length );
  var result = visName;
  var outputText = document.getElementById("fortuneResult");
  outputText.innerHTML = result;
}
