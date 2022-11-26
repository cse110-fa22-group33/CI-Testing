let clicks = {total: 0};

function click(){
    console.log("clicked");
    clicks.total += 1;
}

function resetCounter(){
    clicks.total = 0;
}

window.addEventListener('DOMContentLoaded', init);

function init(){

    let count = document.querySelector("#click-count");
    let button = document.querySelector("#increment-button");
    let reset = document.querySelector("#reset-button");

    //Tracks click me button
    button.addEventListener('click', () => {
        click();
        count.innerHTML = clicks.total;
    });

    // Tracks reset button
    reset.addEventListener('click', () => {
        resetCounter();
        count.innerHTML = clicks.total;
    });
}
module.exports = {click, resetCounter, clicks};