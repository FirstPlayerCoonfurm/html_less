function filterTasks(filter) {
    let tasks = document.querySelectorAll('.list li');
    tasks.forEach(function(task) {
        if (filter === 'all') {
            task.style.display = 'list-item';
        } else if (filter === 'done') {
            if (task.querySelector('input[type=checkbox]').checked) {
                task.style.display = 'list-item';
            } else {
                task.style.display = 'none';
            }
        } else if (filter === 'undone') {
            if (!task.querySelector('input[type=checkbox]').checked) {
                task.style.display = 'list-item';
            } else {
                task.style.display = 'none';
            }
        }
    });
}