// Aggiunge un nuovo task alla lista
document.getElementById("addTaskBtn").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";  // Resetta il campo di input
    }
});

function addTask(taskText) {
    const taskList = document.getElementById("taskList");

    // Crea un nuovo elemento <li> per il task
    const li = document.createElement("li");

    // Crea lo span che conterrà il testo del task
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    
    // Aggiunge il listener per segnare il task come completato
    taskSpan.addEventListener("click", function() {
        taskSpan.classList.toggle("completed");
    });

    // Crea il bottone per eliminare il task
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Elimina";
    deleteBtn.classList.add("delete");

    // Aggiunge l'evento di eliminazione del task
    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(li);
    });

    // Aggiunge lo span del testo e il bottone all'elemento <li>
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);

    // Aggiunge il task alla lista
    taskList.appendChild(li);
}
