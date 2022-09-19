function onSubmit(event) {
    event.preventDefault()
    const task = document.getElementById("text-input")
    const date = document.getElementById("date-input")
    create(task.value, date.value)
}

let timeout;

function create(text, date) {
    const divElem = document.createElement("div")
    divElem.innerText = date + ": " + text
    document.body.appendChild(divElem)

    const succesMessage = document.getElementById("success-message")
    succesMessage.innerText = "Success!"

    clearTimeout(timeout)

    timeeout = setTimeout(() => {
        succesMessage.innerText = ""
    }, 1000)
}