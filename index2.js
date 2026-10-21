const box = document.getElementById('box');

box.addEventListener('mouseover', function() {
    box.style.backgroundColor = 'purple';
});

box.addEventListener('mouseout', function() {
    box.style.backgroundColor = 'lightblue';
});

const inp = document.getElementById('inp');
const out = document.getElementById('out');

inp.addEventListener('keyup', function() {
    out.textContent = inp.value;
});

const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const res = document.getElementById('res');

function calc(op) {
    let a = Number(n1.value);
    let b = Number(n2.value);

    if (op == '+') res.textContent = a + b;
    if (op == '-') res.textContent = a - b;
    if (op == '*') res.textContent = a * b;
    if (op == '/') {
        if (b == 0) {
            res.textContent = "Can't divide by 0";
        } else {
            res.textContent = a / b;
        }
    }
}

document.getElementById('plus').addEventListener('click', function() { calc('+') });
document.getElementById('minus').addEventListener('click', function() { calc('-') });
document.getElementById('mult').addEventListener('click', function() { calc('*') });
document.getElementById('div').addEventListener('click', function() { calc('/') });