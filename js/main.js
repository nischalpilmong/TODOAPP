/* Add Todo */

 $(document).ready(function() {
    $('#add-form').submit(function(){
        //Get submitted values
        var todo_name = $('#todo-name').val();
        var todo_date = $('#todo-date').val();

        //Simple field validation
        if(todo_name == ''){
            alert('Please give the todo a name');
        }
        else if(todo_date == ''){
            alert('please add a date');
        }
        else{
            var todos = JSON.parse(localStorage.getItem('todos'));
            //Check todos
            if(todos == null){
                var todos = [];
            }
            //Create array with new todo
            var new_todo = {
                "todo_name": todo_name,
                "todo_date": todo_date
            }
            todos.push(new_todo);
            localStorage.setItem('todos',JSON.stringify(todos));
        }

    });
});
