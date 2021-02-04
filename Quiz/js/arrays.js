/* Array */
const tasks = [
    {name: "Write for Envato Tust", duration: 120}, 
    {name: "Work out", duration: 60},
    {name: "Procrastinate on Duolingo", duration: 240}
];
console.log(tasks);

/* Punto a */
const nameTasks = tasks.map((i) => i.name);
console.log(nameTasks);

/* Punto b */
let arrayDuration = tasks.filter(
    i => i.duration >= 120
);
console.log(arrayDuration);

/* Punto c */
tasks.forEach((j) => {
    console.log("Total: ", j);
});

/* Punto d */
var suma;
var numbers = [1, 2, 3, 4, 5];
numbers.forEach((j) => {
    console.log("Celular: ", suma=suma+j);
});