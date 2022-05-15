const throttle = (fn, delay) => {
    let last = 0;
    return (...args) => {
        const now = new Date().getTime();
        if (now - last < delay) {
            return;
        }
        last = now;
        return fn(...args)
    }
}



document.getElementById("btn").addEventListener("click", throttle((e) => {
    console.log("click");
}, 1000))