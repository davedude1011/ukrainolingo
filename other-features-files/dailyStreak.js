var monday = document.getElementById("monday-inside")
var tuesday = document.getElementById("tuesday-inside")
var wednesday = document.getElementById("wednesday-inside")
var thursday = document.getElementById("thursday-inside")
var friday = document.getElementById("friday-inside")
var saturday = document.getElementById("saturday-inside")
var sunday = document.getElementById("sunday-inside")

// day = numerical day of the year ( january 1st = 1, december 31st = 365)
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
// ------------------

function fillDay(day) {
    day.style.fill = "#FFDB58"
}
function emptyDay(day) {
    day.style.fill = "#FFDB5800"
}
function emptyAllDays() {
    emptyDay(monday)
    emptyDay(tuesday)
    emptyDay(wednesday)
    emptyDay(thursday)
    emptyDay(friday)
    emptyDay(saturday)
    emptyDay(sunday)
}

if (localStorage.getItem("completionList") == null) {
    var completionList = []
    completionList.push(day)
}
else {
    var completionList = JSON.parse(localStorage.getItem("completionList"))
    if (completionList.includes(day)) {
        console.log("today already marked")
    }
    else {
        completionList.push(day)
    }
}
function dayCheck() {
    if (completionList.length == 1) {
        fillDay(monday)
        localStorage.setItem("completionList", JSON.stringify(completionList))
    }
    else if (completionList.length == 2) {
        if (completionList[0] - completionList[1] == -1) {
            fillDay(monday)
            fillDay(tuesday)
            localStorage.setItem("completionList", JSON.stringify(completionList))
        }
        else {
            emptyAllDays()
        }
    }
    else if(completionList.length == 3) {
        if (completionList[0] - completionList[1] == -1) {
            if (completionList[1] - completionList[2] == -1) {
                fillDay(monday)
                fillDay(tuesday)
                fillDay(wednesday)
                localStorage.setItem("completionList", JSON.stringify(completionList))
            }
        }
        else {
            emptyAllDays()
        }
    }
    else if(completionList.length == 4) {
        if (completionList[0] - completionList[1] == -1) {
            if (completionList[1] - completionList[2] == -1) {
                if (completionList[2] - completionList[3] == -1) {
                    fillDay(monday)
                    fillDay(tuesday)
                    fillDay(wednesday)
                    fillDay(thursday)
                    localStorage.setItem("completionList", JSON.stringify(completionList))
                }
            }
        }
        else {
            emptyAllDays()
        }
    }
    else if(completionList.length == 5) {
        if (completionList[0] - completionList[1] == -1) {
            if (completionList[1] - completionList[2] == -1) {
                if (completionList[2] - completionList[3] == -1) {
                    if (completionList[3] - completionList[4] == -1) {
                        fillDay(monday)
                        fillDay(tuesday)
                        fillDay(wednesday)
                        fillDay(thursday)
                        fillDay(friday)
                        localStorage.setItem("completionList", JSON.stringify(completionList))
                    }
                }
            }
        }
        else {
            emptyAllDays()
        }
    }
    else if(completionList.length == 6) {
        if (completionList[0] - completionList[1] == -1) {
            if (completionList[1] - completionList[2] == -1) {
                if (completionList[2] - completionList[3] == -1) {
                    if (completionList[3] - completionList[4] == -1) {
                        if (completionList[4] - completionList[5] == -1) {
                            fillDay(monday)
                            fillDay(tuesday)
                            fillDay(wednesday)
                            fillDay(thursday)
                            fillDay(friday)
                            fillDay(saturday)
                            localStorage.setItem("completionList", JSON.stringify(completionList))
                        }
                    }
                }
            }
        }
        else {
            emptyAllDays()
        }
    }
    else if(completionList.length == 7) {
        if (completionList[0] - completionList[1] == -1) {
            if (completionList[1] - completionList[2] == -1) {
                if (completionList[2] - completionList[3] == -1) {
                    if (completionList[3] - completionList[4] == -1) {
                        if (completionList[4] - completionList[5] == -1) {
                            if (completionList[5] - completionList[6] == -1) {
                                fillDay(monday)
                                fillDay(tuesday)
                                fillDay(wednesday)
                                fillDay(thursday)
                                fillDay(friday)
                                fillDay(saturday)
                                fillDay(sunday)
                                localStorage.setItem("Kcoins", parseInt(localStorage.getItem("Kcoins")) + 200)
                                document.getElementById("streak-title-text").textContent = "STREAK COMPLETE +200Kcoins :)"
                                completionList = []
                                localStorage.setItem("completionList", JSON.stringify(completionList))
                            }
                        }
                    }
                }
            }
        }
        else {
            emptyAllDays()
        }
    }
}

dayCheck()

console.log(completionList)