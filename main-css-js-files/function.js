var Kcoins = 0

if (localStorage.getItem("Kcoins") >= 0) {
    console.log("Kcoins = " + localStorage.getItem("Kcoins"))
}
else {
    localStorage.setItem("Kcoins", 0)
    console.log("Kcoins = " + localStorage.getItem("Kcoins"))
}