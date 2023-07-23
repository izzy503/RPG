import Character from "./js/character.js";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function handleFormSubmission() {
// event.preventDefault();
// debugger;
// const length1 = parseInt(document.querySelector('#length1').value);
// const length2 = parseInt(document.querySelector('#length2').value);
// const length3 = parseInt(document.querySelector('#length3').value);
// const triangle = new Triangle(length1, length2, length3);
// const response = triangle.checkType();
// const pTag = document.createElement("p");
// pTag.append(response);
// document.querySelector('#response').append(pTag);

  const knight = new Character("Knight", 100, 10, 10);
  const paladin = new Character("Paladin", 100, 10, 10);
  const wizard = new Character("Wizard", 100, 10, 10);
  const charArr = [knight, paladin, wizard];

  return charArr;
}

window.addEventListener("load", function () {
  document.querySelector("#triangle-checker-form").addEventListener("submit", handleFormSubmission);
});



// class Battle {
//     constructor(Knight, Paladin, Wizard){
//       this.Knight = Knight
//       this.Paladin = Paladin
//       this.Wizard = Wizard 
//     }


// start() {
//     console.log('Battle begins between ${this.knight} and ${this.Wizard}!');
//     let attacker = this.knight;
//     let defender = this.Wizard;

//     while (this.knight.isALive() && this.Wizard.isAlive()) { 
//     attacker.attack(defender);

//     // Swap roles
//     [attacker,defender] = [defender, attacker];
//     }


//     console.log(`${attacker.Wizard} has fallen!' ${defender.Knight} is victorius! `);
//     }

// }
