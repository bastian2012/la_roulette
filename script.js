let kontinye = "o";
do {
    let chans = 4;
    let nombOdinate = Math.floor(Math.round() * (200 - 1 + 1) + 1);
    let nombItilizate;
    do {
        nombItilizate = prompt("entrer yon nomb : ")

        while (isNaN(nombItilizate)){
            nombItilizate = prompt("\n\nsa'w antre a pa bon\n\nentrer yon nomb : ")
    
        }
        if (nombItilizate !== nombOdinate) {
            alert("ou pedi ou rete " + (chans) + " chans !!!")
        } else {
            alert("ou gnyn nonb ou a egel ak nomb machin nn !!!")
            break;
        }
        chans--;
    } while (chans >= 0);
    kontinye = prompt("o pou kontinye n pou soti")
    while (kontinye !== "o" && kontinye !== "O" && kontinye !== "n" && kontinye !== "N") {
        kontinye = prompt("\n\ninvalid option\n\no pou kontinye n pou soti")
    }
} while (kontinye === "o" || kontinye === "O");