function onSubmit(event) {
    event.preventDefault()
    const task = document.getElementById("text-input")
    create(task.value)
}

let timeout;

function create(text) {
    const divElem = document.createElement("div")
    divElem.innerText = text
    document.body.appendChild(divElem)

    const succesMessage = document.getElementById("success-message")
    succesMessage.innerText = "Success!"

    clearTimeout(timeout)

    timeeout = setTimeout(() => {
        succesMessage.innerText = ""
    }, 1000)
}