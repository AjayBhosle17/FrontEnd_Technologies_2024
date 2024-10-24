$(function() {
    $('#addTaskBtn').click(function() {
       
        const taskValue = $('#taskInput').val().trim();
        $('#emptyMessage').remove();
        if ($('#taskListTitle').length === 0 && taskValue !== "") {
            const taskListTitle = $('<h1 id="taskListTitle"></h1>').text('Task List');
            $('#taskList').before(taskListTitle); 
        }
        if (taskValue !== "") {
            
            const newTask = $('<li></li>').text(taskValue);
            $('#taskList').append(newTask);

            $('#taskInput').val('');
        }else{
            if ($('#emptyMessage').length === 0) {
                const emptyMessage = $('<li id="emptyMessage"></li>').text('Task list is Empty');
                $('#taskList').append(emptyMessage);
            };
        }
    });
});
