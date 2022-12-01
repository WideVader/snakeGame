class Snake{
    constructor(){
        var gridSize = 10;
        this.x = Math.floor((Math.random()*width));
        this.y = Math.floor(Math.random()*height);
    }
    update(){
        this.x += gridSize();
    }
    draw(){
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.rect(this.x,this.y,10,10);
        ctx.fill();
    }
}