 function throwDice(){
    var pig1 = document.getElementById("pig1");
    var pig2 = document.getElementById("pig2");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
     var d2 = Math.floor(Math.random() * 6) + 1;
     var diceTotal = d1 + d2;
     pig1.innerHTML = d1;
     pig2.innerHTML = d2;
     status.innerHTML = "You  rolled"+diceTotal+".";
     if(d1===d2){
       status.innerHTML +="DOUBLES! You get a free turn!!";
     }
 }
