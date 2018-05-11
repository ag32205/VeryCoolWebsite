
function Box(xpos, ypos, xstep, ystep, id) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.xstep = xstep;
    this.ystep = ystep;
    this.id = id;
    var elem = document.getElementById(this.id);
    this.render = function () {
        elem.style.top = this.ypos + 'px';
        elem.style.left = this.xpos + 'px';
    }
}

var box1 = new Box(0, 0, 1, 2, "riku");

var id = setInterval(frame, 5);

function frame() {

    for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].xpos > 350 || boxes[i].xpos < 0) {
            boxes[i].xstep = -boxes[i].xstep;
        }
        if (boxes[i].ypos > 350 || boxes[i].ypos < 0) {
            boxes[i].ystep = -boxes[i].ystep;
        }

        boxes[i].xpos = boxes[i].xpos + boxes[i].xstep;
        boxes[i].ypos = boxes[i].ypos + boxes[i].ystep;
        boxes[i].render();
    }
}
