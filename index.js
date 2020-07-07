const printReturn = (str) => {
  console.log(str);
  return str;
}

const wakeDog = (a,b) => printReturn(`Wake ${a} the ${b}`);
const leashDog = (a,b) => printReturn(`Leash ${a} the ${b}`);
const walkToPark = (a,b) => printReturn(`Walk to the park with ${a} the ${b}`);
const throwFrisbee = (a,b) => printReturn(`Throw the frisbee for ${a} the ${b}`);
const walkHome = (a,b) => printReturn(`Walk home with ${a} the ${b}`);
const unleashDog = (a,b) => printReturn(`Unleash ${a} the ${b}`);
const dogBreed = (a,b) => printReturn(`Wake ${a} the ${b}`);

const routine = [ wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog, dogBreed];

const exerciseDog = (a,b) => routine.map( fn => fn(a,b) );