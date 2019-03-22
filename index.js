window.onload = function () {
    init();
    window.addEventListener('resize',init, false);
}

function init() {
    let myCanvas = document.getElementById('myCanvas');
    let context = myCanvas.getContext('2d');
    let myWidth = window.innerWidth - 4;
    let myHeight = window.innerHeight - 4;
    
    context.canvas.width = myWidth;
    context.canvas.height = myHeight;
    context.fillStyle = '#aaa';
    context.fillRect(0,0,myWidth,myHeight); 
}