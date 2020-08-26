document.addEventListener('DOMContentLoaded', () => {

    // By default, submit button is disabled
    document.querySelector('#submit').disabled = true;

    // Enable button only if there is text in the input field
    document.querySelector('#task').onkeyup = () => {
        if (document.querySelector('#task').value.length > 0)
            document.querySelector('#submit').disabled = false;
        else
            document.querySelector('#submit').disabled = true;
    };

    document.querySelector('form').onsubmit = () => {

        // Create new item for list
        const li = document.createElement('li');
        li.innerHTML = document.querySelector('#task').value;
        li.className = "unchecked";

        // Add new item to task list
        document.querySelector('#tasks').append(li);

        // creates delete button
        let deleteBtn = document.createElement("button")
        deleteBtn.className = "close";
        deleteBtn.type = "button";

        let x = document.createElement("span"); // x icon for  delete button
        x.innerHTML = "&times;";

        deleteBtn.appendChild(x); // turns the delete button into x icon

        // delete button function to take a single task off
        deleteBtn.addEventListener("click", function() {
            $(this).parent().remove();
            return false;
        });

        // creates checkbox to check whether if one of the tasks are finished
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "checkbox";
        checkbox.className = "form-check-input position-static clearfix"

        // adds checkbox and delete button to the li element to let the user be able to delete or checkoff the tasks
        li.appendChild(checkbox);
        li.appendChild(deleteBtn);

        // function of the checkbox and how it works
        $("input:checkbox").click(function() {
            var $this = $(this);
            if (this.checked) {
                $this.parent().addClass("checked"); // if checkbox is checked then the text will have a line drawn across it
            }

            else {
                $this.parent().removeClass("checked"); // if not checked, the line will be removed or not be there
            }
        });

        // Clear input field and disable button again
        document.querySelector('#task').value = '';
        document.querySelector('#submit').disabled = true;

        // Stop form from submitting
        return false;
    };

    // function for a button that clears the whole list of tasks
    function clearTasks() {
        $("#tasks").empty();
    }
    
    var clearBtn = document.querySelector("#clear");
    
    clearBtn.addEventListener("click", clearTasks);
});