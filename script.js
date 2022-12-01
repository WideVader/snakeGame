const canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 400;

let width = canvas.width;
let height = canvas.height;

let a = new Snake();
console.log(a.x);
a.draw();
setTimeout(() => {
    a.update();
}, 1000);
