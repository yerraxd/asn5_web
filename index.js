    let name = "Yerassyl";
let group = "SE-2530";
console.log("Name:", name, "\nGroup:", group);
alert("Hello, JavaScript World!");
let is_defended = false;
let atd = (24/32) * 100
console.log("Today's attendance is 24 over 32 or", atd , "%");
const first = "Hope I will"
const second = " get 100%"
console.log(first + second)

const paragraph = document.getElementById('text_element');
const button = document.getElementById('change_btn');
button.addEventListener('click', function() {
    paragraph.textContent = "JavaScript button change"
});

const background = document.getElementById('task-3');
const task3button = document.getElementById('task3_change_btn');
task3button.addEventListener('click', function() {
    background.style.backgroundColor = "black";
    background.style.color = "white";
});

const task3_plusbutton = document.getElementById('task3_change_btn1');
const task3_minusbutton = document.getElementById('task3_change_btn2');
const texttask3 = document.getElementById('texttask3');
let currentSize = 16; 
task3_plusbutton.addEventListener('click', function() {
    currentSize += 2;
    texttask3.style.fontSize = currentSize + 'px';
});

task3_minusbutton.addEventListener('click', function() {
    currentSize -= 2;
    texttask3.style.fontSize = currentSize + 'px';
});
const addItemButton = document.getElementById('add_item_btn');
const removeItemButton = document.getElementById('remove_item_btn');
const itemList = document.getElementById('item_list');
let itemCount = 0;

addItemButton.addEventListener('click', function() {
    const li = document.createElement('li');
    li.textContent = "Item "
    itemList.appendChild(li);
});

removeItemButton.addEventListener('click', function() {
    const lastItem = itemList.lastElementChild;
    itemList.removeChild(lastItem);
    
});