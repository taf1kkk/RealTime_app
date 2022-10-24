let clock = () => {
    let date = new Date()
    let hrs = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    hrs = hrs < 10 ? "0" + hrs : hrs;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    let time = `${hrs} : ${min}: ${sec}`;
    document.getElementById("clock").innerText = time;
    setTimeout(clock, 1000)
}
clock();