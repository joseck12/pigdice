 function throwDice() {
   var pig1 = document.getElementById("pig1");
   var status = document.getElementById("result");
   var p1 = Math.floor(Math.random() * 6) + 1;
   var pigDiceTotal = p1;
   pig1.innerHTML = p1;
   result.innerHTML = "You  rolled" + pigDiceTotal + ".";
   if(p1 === 1) {
     result.innerHTML += "LOST TURN. Next player throw dice!";
   }
   else if(p1 ===2) {
     result.innerHTML += "DOUBLES! Free turn.Throw again!!";
   }
   else if (p1 > 4) {
     result.innerHTML += "CONGRATS!! You won 2 extra points";
   }
 }
