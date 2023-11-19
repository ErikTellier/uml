const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

document.oncontextmenu = function () {
    return false;
}

function clear() {
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;

    context.fillStyle = 'lightgray';
    context.fillRect(0, 0, canvas.width, canvas.height);
}
clear();

window.addEventListener("resize", (event) => {
    clear();
});
