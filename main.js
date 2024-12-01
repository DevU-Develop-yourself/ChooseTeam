document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('tasks');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Получаем данные из формы
        const title = document.getElementById('task-title').value;
        const description = document.getElementById('task-description').value;

        // Создаем элемент задачи
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
            <button class="delete-task">Удалить</button>
        `;

        // Добавляем задачу в список
        taskList.appendChild(taskItem);

        // Очищаем форму
        taskForm.reset();

        // Удаление задачи
        const deleteButton = taskItem.querySelector('.delete-task');
        deleteButton.addEventListener('click', () => {
            taskItem.remove();
        });
    });
});
