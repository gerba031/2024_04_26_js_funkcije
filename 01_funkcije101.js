function ispisi(unos) {
    console.log("DEBUG: ----> " + unos);
}
ispisi("nesto ispiši na konzolu");


//  zadatak 1
/*  - napišite javascrpt funkciju koja prihvaća zadani niz kao parametar i pronalazi najdužu riječ unutar niza
    - vratite tu riječ iz funkcije  i spremite varijablu
    - ispišite varijablu u konzoli  
*/

var myNiz = ["ime", "prezime", "godine", "broj cipela", "itd"];
function pronadjiNajduzuRijec() {
    var najduzaRijec = "";
    var duljina = 0;
    for (var ime of myNiz) {
        if (ime.length > duljina) {
            duljina = ime.length;
            najduzaRijec = ime;
        }
    }
    return najduzaRijec;
}


//2.
var najduzaRijec = pronadjiNajduzuRijec(myNiz);

//3.
console.log(najduzaRijec);


/*
if (typeof a !== "number" || typeof b !== "number") {
    return "nisu svi parametri brojevi"
}*/

//zadatak 2

function getMax(a, b) {
    let retVal = 0;
    if (a > b) {
        retVal = a
    } else if (b > a) {
        retVal = b
    } else if (a === b) {
        retVal = a;
    } else {
        retVal = "error"
    }
    return retVal;
}

console.log("veći broj je " + getMax("string", 2));
console.log("veći broj je " + getMax(5, 2));