const debounce = (fn, delay) => {
    let timeID;
    return function (...args) {
        if (timeID) {
            clearTimeout(timeID)
        }
        timeID = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}

document.getElementById('btn').addEventListener("click", debounce(e => {
    console.log("clicked");
}, 1000))