// //  I am a comment!
//
// console.log("pac-man eats chosts for lunch!");
//
// /*
// each
// of
// these
// lines
// are
// comments
// */
//
// var ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde'];
//
// console.log('There are ' + ghosts.length + ' ghosts.');
// console.log('Their names are: ');
// console.log(ghosts[0]);
// console.log(ghosts[1]);
// console.log(ghosts[2]);
// console.log(ghosts[3]);

// var inky = {};
// inky.colour = 'Cyan';
// inky.personality = 'Shadow';
// console.log(inky);
//
// var ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde'];
//
// for (var index = 0; index < ghosts.length; index++) {
//   console.log('Pac-Man eats ', ghosts[index]);
// }


var powerPelletEaten = false;
var ghosts = 4;

while (true) {
  console.log('Ghosts remaining: ' + ghosts);

  if (powerPelletEaten == false) {
    console.log('Pac-Man eats the power pellet.');
    powerPelletEaten = true;
  } else if (ghosts > 0) {
    console.log('Pac-Man eats a ghost.');
    ghosts--;
  } else {
    break;
  }
}

console.log('Pac-Man returns home after a long day in the maze.');
