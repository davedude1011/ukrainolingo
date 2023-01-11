var A1 = document.getElementById("inner1") // Beginnings
var A2 = document.getElementById("inner2") // Im Puzzled
var A3 = document.getElementById("inner3") // Newbie Puzzler
var A4 = document.getElementById("inner4") // Rookie Puzzler
var A5 = document.getElementById("inner5") // Legendary Puzzler
var A6 = document.getElementById("inner6") // Financial Trouble
var A7 = document.getElementById("inner7") // Zillionair
var A8 = document.getElementById("inner8") // Cashed Out
var A9 = document.getElementById("inner9") // Skip This One
var A10 = document.getElementById("inner10") // Super Hero's!
var A11 = document.getElementById("inner11") // Clifford?
var A12 = document.getElementById("inner12") // Store Bought
var A13 = document.getElementById("inner13") // { ??? }
var A14 = document.getElementById("inner14") // { ??? }
var A15 = document.getElementById("inner15") // { ??? }
var A16 = document.getElementById("inner16") // { ??? }
var A17 = document.getElementById("inner17") // End Game
var A18 = document.getElementById("inner18") // I Am Inevitable...

function checkTrophy(id, localStorageName) {
    if (localStorage.getItem(localStorageName) == null) {
        localStorage.setItem(localStorageName, false)
        console.log(localStorageName + " not complete")
        console.log("null")
    }
    else {
        if (localStorage.getItem(localStorageName) == "true") {
            id.style.fillOpacity = "1"
            console.log(localStorageName + " complete")
        }
        else {
            console.log(localStorageName + " not complete")
        }
    }
}
checkTrophy(A1, "A1Complete")
checkTrophy(A2, "A2Complete")
checkTrophy(A3, "A3Complete")
checkTrophy(A4, "A4Complete")
checkTrophy(A5, "A5Complete")
checkTrophy(A6, "A6Complete")
checkTrophy(A7, "A7Complete")
checkTrophy(A8, "A8Complete")
checkTrophy(A9, "A9Complete")
checkTrophy(A10, "A10Complete")
checkTrophy(A11, "A11Complete")
checkTrophy(A12, "A12Complete")
checkTrophy(A13, "A13Complete")
checkTrophy(A14, "A14Complete")
checkTrophy(A15, "A15Complete")
checkTrophy(A16, "A16Complete")
checkTrophy(A17, "A17Complete")
checkTrophy(A18, "A18Complete")
