console.log("insane in the membrane");
const ol = document.getElementById("grid")
for (let i = 1; i <= 25; i++) {
    console.log(i);
    const li = document.createElement('li');
    li.textContent = 'item number $(i)';
    ol.appendChild(li);
    li.addEventListener("click", () => {
        if (i % 3 == 0) {
            console.log("fizz");
        }
        console.log('click?');
    });
}
