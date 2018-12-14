 function throwDice() {
   var pig1 = document.getElementById("pig1");
   var pig2 = document.getElementById("pig2");
   var status = document.getElementById("result");
   var p1 = Math.floor(Math.random() * 6) + 1;
   var p2 = Math.floor(Math.random() * 6) + 1;
   var pigDiceTotal = p1 + p2;
   pig1.innerHTML = p1;
   pig2.innerHTML = p2;
   result.innerHTML = "You  rolled" + pigDiceTotal + ".";
   if(p1 === 1 || p2 === 1) {
     result.innerHTML += "YOU LOSE. Next player throw dice!";
   }
   else if(p1 === p2) {
     result.innerHTML += "DOUBLES! Free turn.Throw again!!";
   }
   else if (p1 >= 4) {
     result.innerHTML += "CONGRATS!! You won 2 extra points";
   }
   else if (p2 < 4) {
     result.innerHTML += "OOPS!! You lost 2 points";
   }
 }
