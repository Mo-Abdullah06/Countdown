let count = 0;

function plus() {
    count++;
    document.querySelector(".count").innerHTML = count; // Update count display
    var text = document.querySelector(".text").innerHTML = "increment start"
}

function minus() {
    if (count > 0) {
        count--;
    }
    document.querySelector(".count").innerHTML = count; // Update count display
    document.querySelector(".text").innerHTML = "Decrement start"

}

function reset() {
    if (count > 0) {
        count = 0;
    }
    document.querySelector(".count").innerHTML = count; // Update count display
    document.querySelector(".text").innerHTML = "Reset"

}