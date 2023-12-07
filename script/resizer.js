/*
  Sidebar controller functions based on repo. https://github.com/mcodexpro/resizable-sidebar
  \_> Resizer & Cursor functions
  */
window.onload = function() {
    var resizer = document.querySelector(".resizer");
    var sidebar = document.querySelector(".sidebar");

    loadResizer(resizer, sidebar);
};

function loadResizer(resizer, sidebar) {
    var x, w;

    function rsDownHandler(e) {
        x = e.clientX;
        var sbWidth = window.getComputedStyle(sidebar).width;
        w = parseInt(sbWidth, 10);

        document.addEventListener("mousemove", rsMoveHandler);
        document.addEventListener("mouseup", rsUpHandler);
    }

    function rsMoveHandler(e) {
        var dx = e.clientX - x;
        var cw = w + dx;
        if (cw < 700) {
            sidebar.style.width = `${cw}px`;
        }
    }

    function rsUpHandler(e) {
        document.removeEventListener("mouseup", rsUpHandler);
        document.removeEventListener("mousemove", rsMoveHandler);
    }
    resizer.addEventListener("mousedown", rsDownHandler);
}
