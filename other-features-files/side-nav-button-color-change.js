var whiteOuter = "data:image/svg+xml,%3Csvg width='76' height='76' viewBox='0 0 76 76' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M74.217 36.3651C75.0496 36.3357 75.7039 35.6362 75.6411 34.8054C74.9471 25.6327 70.9007 17.0141 64.2445 10.6118C57.225 3.86015 47.8537 0.102968 38.1128 0.13503C28.3719 0.167093 19.0255 3.98589 12.0507 10.7836C5.07582 17.5813 1.01962 26.8248 0.740076 36.5587C0.460533 46.2926 3.97958 55.7534 10.5528 62.94C17.126 70.1265 26.2379 74.4751 35.9609 75.0658C45.6839 75.6565 55.2554 72.443 62.6508 66.105C69.6635 60.0951 74.1978 51.7227 75.4171 42.6049C75.5275 41.7791 74.9144 41.0432 74.0848 40.9661C73.2552 40.889 72.5236 41.4998 72.4103 42.3252C71.2655 50.663 67.1049 58.3149 60.6871 63.8151C53.8866 69.6433 45.0849 72.5983 36.1439 72.0551C27.2029 71.512 18.824 67.5132 12.7794 60.9046C6.73492 54.2961 3.49891 45.5962 3.75597 36.6452C4.01303 27.6942 7.74299 19.1942 14.1568 12.9433C20.5707 6.69234 29.1653 3.1807 38.1227 3.15121C47.0801 3.12173 55.6977 6.57671 62.1526 12.7853C68.2442 18.6445 71.9587 26.5224 72.6232 34.9121C72.6889 35.7427 73.3843 36.3944 74.217 36.3651Z' fill='white'/%3E%3C/svg%3E"
var yellowOuter = "data:image/svg+xml,%3Csvg width='76' height='76' viewBox='0 0 76 76' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M74.217 36.3651C75.0496 36.3357 75.7039 35.6362 75.6411 34.8054C74.9471 25.6327 70.9007 17.0141 64.2445 10.6118C57.225 3.86015 47.8537 0.102968 38.1128 0.13503C28.3719 0.167093 19.0255 3.98589 12.0507 10.7836C5.07582 17.5813 1.01962 26.8248 0.740076 36.5587C0.460533 46.2926 3.97958 55.7534 10.5528 62.94C17.126 70.1265 26.2379 74.4751 35.9609 75.0658C45.6839 75.6565 55.2554 72.443 62.6508 66.105C69.6635 60.0951 74.1978 51.7227 75.4171 42.6049C75.5275 41.7791 74.9144 41.0432 74.0848 40.9661C73.2552 40.889 72.5236 41.4998 72.4103 42.3252C71.2655 50.663 67.1049 58.3149 60.6871 63.8151C53.8866 69.6433 45.0849 72.5983 36.1439 72.0551C27.2029 71.512 18.824 67.5132 12.7794 60.9046C6.73492 54.2961 3.49891 45.5962 3.75597 36.6452C4.01303 27.6942 7.74299 19.1942 14.1568 12.9433C20.5707 6.69234 29.1653 3.1807 38.1227 3.15121C47.0801 3.12173 55.6977 6.57671 62.1526 12.7853C68.2442 18.6445 71.9587 26.5224 72.6232 34.9121C72.6889 35.7427 73.3843 36.3944 74.217 36.3651Z' fill='rgb(255, 204, 0)'/%3E%3C/svg%3E"

var fileName = location.href.split("/").slice(-1);
console.log(fileName)

if (fileName == "index.html") {
    document.getElementById("home-outer").classList.add("yellow-ring")
    if (Math.random() <= 0.5) {
        document.getElementById("home-title-text").textContent = "Ласкаво просимо!"
    }
    else {
        document.getElementById("home-title-text").textContent = "Welcome Back!"
    }
    // records if story path has started and changes button text accordingly :) //
    if (localStorage.getItem("storyStarted") == null) {
        document.getElementById("story-path").addEventListener("click", function() {
            localStorage.setItem("storyStarted", "started")
        })
        document.getElementById("story-path-text").textContent = "Start Story Path"
        document.getElementById("story-path-text-mobile").textContent = "Start Story Path"
    }
    else if (localStorage.getItem("storyStarted") == "started") {
        document.getElementById("story-path-text").textContent = "Continue Story Path"
        document.getElementById("story-path-text-mobile").textContent = "Continue Story Path"
    }
}
if (fileName == "streak.html") {
    document.getElementById("streak-outer").classList.add("yellow-ring")
    if (Math.random() <= 0.5) {
        document.getElementById("streak-title-text").textContent = "Щоденна серія."
    }
    else {
        document.getElementById("streak-title-text").textContent = "Daily Streak."
    }
}
if (fileName == "trophy.html") {
    document.getElementById("trophy-outer").classList.add("yellow-ring")
    if (Math.random() <= 0.5) {
        document.getElementById("trophy-title-text").textContent = "Кімната досягнень."
    }
    else {
        document.getElementById("trophy-title-text").textContent = "Achievements Room."
    }
}
if (fileName == "shop.html") {
    document.getElementById("shop-outer").classList.add("yellow-ring")
    if (Math.random() <= 0.5) {
        document.getElementById("shop-title-text").textContent = "Магазин."
    }
    else {
        document.getElementById("shop-title-text").textContent = "Shop."
    }
}
if (fileName == "settings.html") {
    document.getElementById("settings-outer").classList.add("yellow-ring")
    if (Math.random() <= 0.5) {
        document.getElementById("settings-title-text").textContent = "Налаштування."
    }
    else {
        document.getElementById("settings-title-text").textContent = "Settings."
    }
}
if (fileName == "report.html") {
    document.getElementById("report-outer").classList.add("yellow-ring")
    if (Math.random() <= 0.5) {
        document.getElementById("report-title-text").textContent = "Повідомити про помилку."
    }
    else {
        document.getElementById("report-title-text").textContent = "Report a Bug."
    }
}
if (fileName == "more.html") {
    document.getElementById("more-outer").classList.add("yellow-ring")
    if (Math.random() <= 0.5) {
        document.getElementById("more-title-text").textContent = "Більше від мене."
    }
    else {
        document.getElementById("more-title-text").textContent = "More From me."
    }
}

window.onload = function() {
    if (fileName != "index.html" && fileName != "streak.html" && fileName != "trophy.html" && fileName != "shop.html" && fileName != "settings.html" && fileName != "report.html" && fileName != "more.html") {
        window.open("index.html","_self")
    }
}