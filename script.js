console.log("insane in the membrane");
const ol = document.getElementById("grid")
for (let i = 1; i <= 25; i++) {
    console.log(i);
    const li = document.createElement('li');
    li.textContent = 'item number $(i)';
    ol.appendChild(li);
    
}
