function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i, arr[i])
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);

function letterFinder(word,match) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] === match) {
            console.log('Found the', match, 'at', i)
        }else{
            console.log('---No match found at', i)
        }
    }
}
letterFinder("test","t")

var ropa = [];
ropa.push("camiseta"); // ['apple']
ropa.push("pantalon");
ropa.push("medias");
ropa.push("sombrero");
ropa.push("gorra");
ropa.pop();
ropa.push("gafas");
console.log(ropa[2])
var favCar={}
favCar.color="azul"
favCar.convertible=true
console.log(favCar)