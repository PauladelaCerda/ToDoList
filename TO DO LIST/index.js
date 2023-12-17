
let tasks = [
    { id: 1, description: "Tomar agua", completed: false },
    { id: 2, description: "Ir al supermercado", completed: true },
    { id: 3, description: "Ir a pilates", completed: false }
];


function agregarTarea() {
    const input = document.getElementById("taskInput");
    const description = input.value.trim();

    if (description !== "") {
        const newTask = {
            id: tasks.length + 1,
            description: description,
            completed: false
        };

        tasks.push(newTask);
        actualizarLista();
        input.value = "";
    }
}


function actualizarLista() {
    const taskList = document.getElementById("taskList");
    const totalTasks = document.getElementById("totalTasks");
    const completedTasks = document.getElementById("completedTasks");

    taskList.innerHTML = "";
    let completedCount = 0;

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${task.description}
            <button onclick="eliminarTarea(${task.id})">Eliminar</button>
            <button onclick="marcarComoCompletada(${task.id})">Cambiar</button>
        `;

        if (task.completed) {
            li.classList.add("completed");
            completedCount++;
        }

        taskList.appendChild(li);
    });

    totalTasks.textContent = tasks.length;
    completedTasks.textContent = completedCount;
}


function eliminarTarea(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    actualizarLista();
}

function marcarComoCompletada(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        actualizarLista();
    }
}


actualizarLista();
