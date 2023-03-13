const berechnen = () => {
    const nettoBrutto = document.getElementById('nettoBrutto')//netto zu Brutto
    const bruttoNetto = document.getElementById('bruttoNetto') //brutto zu netto
    const nineteen = document.getElementById('nineteen')//19
    const seven = document.getElementById('seven')//7%
    const inputNumber = document.getElementById('inputNumber').value// zahl eintragen
    const resultMwst = document.getElementById('resultMwst')//Mwst-Betrag
    const endBetrag = document.getElementById('endBetrag')
    const result = document.getElementById('result')

    if (nettoBrutto.checked) {
        console.log(inputNumber);
        if (nineteen.checked) {
            resultMwst.innerHTML = (Number(inputNumber) * 1.19).toFixed(2) + "€";
            console.log((Number(inputNumber) * 1.19));
        } else if (seven.checked) {
            resultMwst.innerHTML = (Number(inputNumber) * 1.07).toFixed(2) + "€";
        }
    } else if (bruttoNetto.checked) {
        if (nineteen.checked) {
            resultMwst.innerHTML = (Number(inputNumber) / 1.19).toFixed(2) + "€";
        } else if (seven.checked) {
            resultMwst.innerHTML = (Number(inputNumber) * 1.07).toFixed(2) + "€";
        }
    }
}

// const nettoBrutto = document.getElementById("nettoBrutto");
// const nineteen = document.getElementById("nineteen");
// const seven = document.getElementById("seven");
// const inputNumber = document.getElementById("inputNumber");
// const result = document.getElementById('result');
// const resultMwst = document.getElementById('resultMwst');
// const endBetrag = document.getElementById('endBetrag');
// const textMwst = document.getElementById('textMwst');

// let berechnen = () => {
    
//     if (nettoBrutto.checked == true && nineteen.checked == true) {
//         result.innerHTML = (inputNumber.value * 1.19).toFixed(2) + "€";
//         resultMwst.innerHTML = (inputNumber.value * 0.19).toFixed(2) + "€";
//         endBetrag.innerHTML = ("Bruttobetrag (Endpreis)");
//     }
//     else if (nettoBrutto.checked == false && nineteen.checked == true) {
//         result.innerHTML = (inputNumber.value / 1.19).toFixed(2) + "€";
//         resultMwst.innerHTML = (inputNumber.value / 1.19 * 0.19).toFixed(2) + "€";
//         endBetrag.innerHTML = ("Nettobetrag");
//     }
//     else if (nettoBrutto.checked == true && seven.checked == true) {
//         result.innerHTML = (inputNumber.value * 1.07).toFixed(2) + "€";
//         resultMwst.innerHTML = (inputNumber.value * 0.07).toFixed(2) + "€";
//         endBetrag.innerHTML = ("Bruttobetrag (Endpreis)");
//     }
//     else if (nettoBrutto.checked == false && seven.checked == true) {
//         result.innerHTML = (inputNumber.value / 1.07).toFixed(2) + "€";
//         resultMwst.innerHTML = (inputNumber.value / 1.07 * 0.07).toFixed(2) + "€";
//         endBetrag.innerHTML = ("Nettobetrag");
//     }
// }

// let text = () => {
//     if (nettoBrutto.checked == true) {
//         textMwst.innerHTML = ("Nettobetrag (Preis ohne Mehrwertsteuer) in Euro");
//     } else {
//         textMwst.innerHTML = ("Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro");
//     }
// }





