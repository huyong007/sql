function animateIt(elementId) {
    console.assert("执行了");
    var elem = document.getElementById(elementId);
    var tick = 0;
    var timer = setInterval(() => {
        if (tick < 50) {
            elem.style.fontSize = tick + "px";
            tick++;
        }else {
            clearInterval(timer);
            assert(tick === 100, "tick accessed via a closure");
            assert(elem, "element also accessed via a closure.");
            assert(timer, "timer reference also obtained via a closure.");
        }
    }, 100);
}
animateIt("box1");
