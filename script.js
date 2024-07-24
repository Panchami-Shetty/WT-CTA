document.addEventListener('DOMContentLoaded', function () {
    loadTasks();
});

function addTask() {
    const title = document.getElementById('taskTitle').value;
    const date = document.getElementById('taskDate').value;
    const description = document.getElementById('taskDescription').value;

    if (title && date && description) {
        // Send data to server (PHP)
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'tasks.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Reload tasks after adding
                loadTasks();
            }
        };
        xhr.send(`title=${encodeURIComponent(title)}&date=${encodeURIComponent(date)}&description=${encodeURIComponent(description)}`);
    } else {
        alert('All fields must be filled out!');
    }
}

function loadTasks() {
    // Fetch tasks from server (PHP)
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'tasks.php', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('taskList').innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}
