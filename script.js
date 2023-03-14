// Exercice 1
function myLength(str) {
    let length = 0;
    for (item in str) {
        length++
    }
    return length
}

let tab = [0, 2, 3, 4, 5]

// alert(myLength(tab));

// Exercice 2
function myTrim(supp){

}

// Exercice 1 Bis
function jeu(nombre) {
    var cible = Math.round(Math.random() * 2) + 1;

    for (compteur = 1; compteur >= 0; compteur++) {
        nombre = parseInt(prompt("donnez un chiffre entre 1 et 3"));

        if (nombre === cible) {
            alert("C'est gagné !");
            break;
        }

        else if (nombre < 1) {
            alert("Ce chiffre n'est pas compris entre 1 et 3.")
        }

        else if (nombre > 3) {
            alert("Ce chiffre n'est pas compris entre 1 et 3.")
        }

        else if (isNaN(nombre)) {
            alert("Ce n'est pas un chiffre");
        }

        else if (nombre !== cible) {
            alert("Encore une chance");
        }
    }
}

// jeu();

// Exercice 2 Bis
function nbr(nombre) {

    for (compteur = 1; compteur >= 0; compteur++) {
        nombre = parseInt(prompt("donnez un chiffre :"));

        if (nombre < 10) {
            alert("Plus grand")
        }

        else if (nombre > 20) {
            alert("Plus petit")
        }

        else if (isNaN(nombre)) {
            alert("Ce n'est pas un chiffre");
        }

        else if (nombre > 10, nombre < 20) {
            alert("Ce chiffre est bien compris entre 10 et 20 !");
            break;
        }
    }
}

// nbr();

function jeuu(nombre) {
    var cible = Math.round(Math.random() * 10) + 10;

    for (compteur = 1; compteur >= 0; compteur++) {
        nombre = parseInt(prompt("donnez un chiffre entre 10 et 20"));

        if (nombre === cible) {
            alert("C'est gagné !");
            break;
        }

        else if (nombre < 10) {
            alert("Plus grand !")
        }

        else if (nombre > 20) {
            alert("Plus petit !")
        }

        else if (isNaN(nombre)) {
            alert("Ce n'est pas un chiffre");
        }

        else if (nombre !== cible) {
            alert("Encore une chance");
        }
    }
}

// jeuu();

// Exercice 3
function bouclev1(b) {
    b = parseInt(prompt("Quel est le chiffre ?"))
    i = 0;

    while (i <= 9) {
        i++;
        b++;
        console.log(b);
    }
}

// bouclev1();

// Exercice 4
function boucle(b) {
    b = parseInt(prompt("Quel est le chiffre ?"))

    for (a = 0; a <= 9; a++) {
        b++;
        console.log(b);
    }
}

// boucle();

// Exercice 5
function multiple(a) {
    a = parseInt(prompt("Entrez un chiffres pour voir ça table de multiplication :"))

    for (i = 1; i <= 10; i++) {
        let result = a * i;
        alert(a + ' x ' + i + ' = ' + result);
    }
}

// multiple();

// Exercice 6
function multiplee(a) {
    a = parseInt(prompt("Entrez un chiffres pour voir ça table de multiplication :"))
    let result = 0;

    for (i = 1; i <= a; i++) {
        result += i;
    }

    alert(result);
}

// multiplee();

// Exercice 7
function multipleee(a) {
    a = parseInt(prompt("Entrez un chiffres pour voir ça table de multiplication :"))
    let result = 1;

    for (i = 1; i <= a; i++) {
        result *= i;
    }

    alert(result);
}

// multipleee();

// Exercice 8
function chiant(a) {
    let tab = []
    let tall = 0

    for (i = 1; i <= 20; i++) {
        a = parseInt(prompt('Entrez le nombre numéro ' + i))

        tab.push(a);
    }

    for (c = 0; c < tab.length; c++) {
        if (tab[c] > tall) {
            tall = tab[c];
        }
    }

    let ouf = tab.indexOf(tall) + 1;

    alert("C’était le nombre numéro " + ouf + " : " + tall);
}

// chiant();

// Exercice 9
function chiante(a) {
    let tab = []
    let tall = 0
    let i = 1

    while (a !== 0) {
        a = parseInt(prompt('Entrez le nombre numéro ' + i))
        i++
        tab.push(a);
    }

    for (c = 0; c < tab.length; c++) {
        if (tab[c] > tall) {
            tall = tab[c];
        }
    }

    let ouf = tab.indexOf(tall) + 1;

    alert("C’était le nombre numéro " + ouf + " : " + tall);
}

// chiante();

// Exerxice 10
function last(a) {
    a = parseInt(prompt("Entrez l'âge de marie"))
    let u = 0;
    let x = 0;
    let result = 0
    let tab = []

    for (i = 1; i <= a; i++) {
        x = x + 100;

        u = i * 2;
        tab.push(u)

        result = x;
    }

    let sum = 0;

    for (let i = 0; i < tab.length; i++) {
        sum += tab[i];
    }

    console.log(tab);
    alert(result + sum)
}

// last();

// version 2
function lastt(a) {
    a = parseInt(prompt("Entrez l'âge de marie"))
    let x = 0;
    let result = 0

    x = 100;
    a = a * 2
    result = x + a;


    alert(result)
}

// lastt();