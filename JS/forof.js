// Task 1
function logDairy() {
    var dairys = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

    for (var i of dairys) {
        console.log(i); 
    }
}
logDairy()
// Task 2
function birdCan() {
    const animal = {
        canJump: true
        };
    const bird = Object.create(animal);
        bird.canFly = true;
        bird.hasFeathers = true;


    for (key of Object.keys(bird)) {
        console.log(key, ": ", bird[key]);
    }
}
birdCan();
// Task 3
function animalCan() {
    const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;


    for (propiedad in bird) {
        console.log(propiedad +": " + bird[propiedad]);
    }

}

animalCan();
/** Spread y Rest ...
 *  Agregar nuevos miembros a las matrices sin usar el método push()

Convertir una cadena en una matriz y

Copiar un objeto o una matriz en un objeto separado 
 */