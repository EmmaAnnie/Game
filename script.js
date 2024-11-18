console.log("insane in the membrane");
const ol = document.getElementById("grid")
for (let i = 1; i <= 25; i++) {
    console.log(i);
    const li = document.createElement('li');
    console.log(li);
    li.textContent = i;
    ol.appendChild(li);
    li.addEventListener("click", () => {
        if (i % 3 == 0) {console.log("fizz"); }
        if (i % 5 == 0) {console.log("buzz"); }
        console.log('click?');
    });
}
