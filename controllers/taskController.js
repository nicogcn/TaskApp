//Declaro las tareas
var task1 = {taskName: "Tarea uno", person: "Empleado uno", expendedTime: 30, taskDate: Date.now()};

var task2 = {taskName: "Tarea dos", person: "Empleado dos", expendedTime: 60, taskDate: Date.now()};

var tasks = [task1, task2];

//console.log(JSON.stringify(tasks));

//Manejo de las tareas

//Todas las tareas
exports.getAllTasks = function(req, res) {
    res.status(200).json(tasks);
};
//Una tarea
exports.getTaskById = function(req, res) {
    res.status(200).json(tasks[req.params.id]);
};
//Crear tarea
exports.createTask = function(req, res) {
    tasks.push(req.query.name);
    res.status(201).send();
};
//Modificar tarea
exports.updateTask = function(req, res) {
    tasks[req.params.id] = req.query.name;
    res.status(200).send();
};
//Eliminar tarea
exports.deleteTask = function(req, res) {
    tasks.splice(req.params.id, 1);
    res.status(204).send();
};