// zboji 2 broja

function sumiraj(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "error";
    }
    return a + b;
}

console.log(sumiraj(2, 3));         //5
console.log(sumiraj("2", 3));       //error
var prvi = sumiraj(3, 3);
var drugi = sumiraj(5, 5);
if (prvi !== "error" && prvi !== "error") {
    var dvaPutaSuma = prvi * drugi;
    console.log(dvaPutaSuma);       //60
} else {
    console.log("ne mogu ti izračunati");
}

function pomnozi(a, b) {
    return a * b;
}

var izracun = pomnozi(pomnozi(2, 3) * pomnozi(8, 9) / pomnozi(2, 2), 4);
console.log(izracun);       //432


function podijeli (a,b) {
    if (b==0){
        console.log("dijeljenje s nulom nije definirano");
        return "error";
    }
    return a/b;
}
var dijeljeno = podijeli(12,0);
console.log("rezultat dijeljenja: " + dijeljeno);


