function onSubmit(event) {
    event.preventDefault()
    const task = document.getElementById("text-input")
    const date = document.getElementById("date-input")

    if (task.value == "") {
        window.alert("Feladat nincs megadva!")
    } else create(task.value, date.value)

    task.value = ""
    date.value = ""
}

let myDiv = []
let myButton = []

function create(text, date) {
    const divElem = document.createElement("div")
    divElem.innerText = date + ": " + text
    myDiv.push(divElem)

    const divCont = document.getElementById("myDiv")
    const btn = document.createElement("button")
    btn.innerHTML = "Delete"
    myButton.push(btn)

    for (let i = 0; i < myDiv.length; i++) {
        if (myDiv[i] != undefined) {
            divCont.appendChild(myDiv[i])
            divCont.appendChild(myButton[i])
        }
    }

    deleteLine()
    messageHandler("Sikeresen hozzá adva!")
}

function deleteLine() {
    for (let i = 0; i < myButton.length; i++) {
        myButton[i].onclick = function () {
            const divCont = document.getElementById("myDiv")
            divCont.removeChild(myDiv[i])
            divCont.removeChild(myButton[i])

            myDiv.splice(i, 1)
            myButton.splice(i, 1)
            console.log(divCont)
        }
    }

    messageHandler("Sikeresen törölve!")
}

let timeout

function messageHandler(message) {
    const succesMessage = document.getElementById("success-message")
    succesMessage.innerText = message

    clearTimeout(timeout)

    timeeout = setTimeout(() => {
        succesMessage.innerText = ""
    }, 2000)
}