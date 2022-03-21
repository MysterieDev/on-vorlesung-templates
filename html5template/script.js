const anredeM = "Herr ";
const anredeW = "Frau ";

function returnGreeting(personName, isAnredeM){

    function makeName(personName, isAnredeM){
        if(isAnredeM){
            return "Hello " + anredeM + personName;
        }
        else{
            return "Hello " + anredeW + personName;
        }
    }

    return makeName(personName, isAnredeM);
}

// loops until parameter reaches value 10
function loopUntil10(x) {
    if (x >= 10){
      return;
    }
    console.log(x);
    loopUntil10(x + 1);
  }