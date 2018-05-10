var riku = document.getElementById("riku");


function move() {
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            riku.style.top = pos + 'px';
            riku.style.left = pos + 'px';
        }
    }
}
