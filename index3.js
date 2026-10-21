let tasks = [];
const input = document.getElementById('task_inp');
const addBtn = document.getElementById('add_task');
const list = document.getElementById('task_list');

addBtn.addEventListener('click', function() {
    let text = input.value;
    if (text == '') return;
    tasks.push(text);

    const li = document.createElement('li');
    li.textContent = text + ' ';

    const del = document.createElement('button');
    del.textContent = 'Delete';

    li.addEventListener('click', function() {
        li.classList.toggle('done');
    });

    del.addEventListener('click', function() {
        tasks.splice(tasks.indexOf(text), 1);
        li.remove();
    });

    li.appendChild(del);
    list.appendChild(li);
    input.value = '';
});