if (localStorage.getItem("Kcoins") == null) {
    localStorage.setItem("Kcoins", 50)
}
else {
    var Kcoins = localStorage.getItem("Kcoins")
    console.log("Kcoins = " + Kcoins)
}
document.querySelector(".money-count").textContent = "$" + Kcoins