function onSubmit(event) {
    event.preventDefault()
    const task = document.getElementById("text-input")
    const date = document.getElementById("date-input")
    create(task.value, date.value)
}

let myDiv = []
let myButton = []

function create(text, date) {
    const divElem = document.createElement("div")
    divElem.innerText = date + ": " + text
    myDiv.push(divElem)

    const buttonElem = document.createElement("button")
    buttonElem.innerText = "Delete"
    myButton.push(buttonElem)


    console.log(myDiv)
    console.log(myButton)

    for (let i = 0; i < myDiv.length; i++) {
        if (myDiv[i] != undefined) {
            document.body.appendChild(myDiv[i])
            document.body.appendChild(myButton[i])
        }
    }

    deleteLine()
    messageHandler("Sikeresen hozzá adva!")
}

function deleteLine() {
    for (let i = 0; i < myButton.length; i++) {
        myButton[i].onclick = function () {
            for( let i = 0; i < myDiv.length; i++){
                if ( myDiv[i] != undefined) {
                    myDiv.splice(i, 1)
                    myButton.splice(i, 1)
                    myDiv[i].remove()
                }
            }
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
    }, 1000)
}