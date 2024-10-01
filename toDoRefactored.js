let tasks2 = new Map
const form2 = document.getElementById("form2")

form2.addEventListener("submit", onformSubmit)
form2.addEventListener("submit", printTasks)

function onFormSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.target)
    const task = data.get("task2")
    if (task === "") {
        return
    }
    tasks2.set(task, task)
    console.log(tasks2)
}

function printTasks() {
    const container = document.getElementById("list2")
    container.replaceChildren()
   
    tasks2.forEach(task => {
        let taskGroup = document.createElement("div")
        let li = document.createElement("li")
        let deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"
        taskGroup.appendChild(li)
        taskGroup.appendChild(deleteBtn)
        taskGroup.classList.add("taskGroup")
    
        li.textContent = task
        container.appendChild(taskGroup)
        deleteBtn.addEventListener("click", () => deleteTask(task)) //aixo es fa per a que no s'executi la funcio
    })

    
    
}

function deleteTask(taskI) {
    tasks2.forEach(task => {
        if (task == taskI  ) {
            tasks2.delete(taskI)
            printTasks()
        }
    })
    console.log(tasks2)
}