

		// var displayTodosButton = document.getElementById('displayTodosButton');

		// var toggleAllbutton = document.getElementById('toggleAllbutton');

		var handlers = {

			// 			displayTodos: function () {
			// 				todolist.displayTodos();



			addTodo: function () {
				var addTodoTextInput = document.getElementById('addTodoTextInput');
				todolist.addTodo(addTodoTextInput.value);
				addTodoTextInput.value = '';
				view.displayTodos();
			},

			changeTodo: function () {
				var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
				var changeTodoTe0xtInput = document.getElementById('changeTodoTextInput');
				todolist.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
				changeTodoPositionInput.value = '';
				changeTodoTextInput.value = '';
				view.displayTodos();
			},


			// after adding delete button to each
			// deleteToDo: function () {
			// 	var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
			// 	todolist.deleteTodo(deleteTodoPositionInput.valueAsNumber);
			// 	deleteTodoPositionInput.value = '';

			// 	view.displayTodos();
			// },


			deleteToDo: function (position) {
				todolist.deleteTodo(position);
				view.displayTodos();
			},



			toggleCompleted: function () {
				var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
				todolist.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
				toggleCompletedPositionInput.value = '';
				view.displayTodos();
			},


			toggleAll: function () {
				todolist.toggleAll();
				view.displayTodos();
			}

		};


		var view = {
			displayTodos: function () {

				var todosUl = document.querySelector('ul');
				todosUl.innerHTML = '';

				todolist.todos.forEach(function (todo, position) {
					var todoLi = document.createElement('li');
					var todoTextWithCompletion = '';

					if (todo.completed === true) {
						todoTextWithCompletion = '(x)' + todo.todoText;
					} else {
						todoTextWithCompletion = '( )' + todo.todoText;
					}

					todoLi.id = position;
					todoLi.textContent = todoTextWithCompletion;
					todoLi.appendChild(this.createDeleteButton());
					todosUl.appendChild(todoLi);
				}, this);
				// for (var i = 0; i < todolist.todos.length; i++) {
				// 	var todoLi = document.createElement('li');
				// 	var todo = todolist.todos[i];
				// 	var todoTextWithCompletion = '';

				// 	if (todo.completed === true) {
				// 		todoTextWithCompletion = '(x)' + todo.todoText;
				// 	} else {
				// 		todoTextWithCompletion = '( )' + todo.todoText;
				// 	}

				// 	todoLi.id = i;
				// 	todoLi.textContent = todoTextWithCompletion;
				// 	todoLi.appendChild(this.createDeleteButton());
				// 	todosUl.appendChild(todoLi);
				// }
				
			},
			createDeleteButton: function () {
				var deleteButton = document.createElement('button');
				deleteButton.textContent = 'Delete';
				deleteButton.className = 'deleteButton';
				return deleteButton;
			},

			setupEventListners: function () {

				var todosUl = document.querySelector('ul');
				todosUl.addEventListener('click', function (event) {
					console.log(event.target.parentNode.id);

					var elementClicked = event.target;
					if (elementClicked.className === 'deleteButton') {
						handlers.deleteToDo(parseInt(elementClicked.parentNode.id));

					}
				});
			}
		};




		// toggleAllbutton.addEventListener('click', function () {
		// 	todolist.toggleAll();
		// });

		// displayTodosButton.addEventListener('click', function () {
		// 	todolist.displayTodos();
		// });

		var todolist = {

			todos: [],

			// displayTodos: function () {
			// 	if (this.todos.length === 0) {
			// 		console.log('Your Todo list is Empty');
			// 	} else {
			// 		console.log('My Todos:');
			// 		for (let i = 0; i < this.todos.length; i++) {
			// 			if (this.todos[i].completed === true) {
			// 				console.log('(x)  '+ this.todos[i].todoText);
			// 			} else {
			// 				console.log('( )  '+ this.todos[i].todoText);
			// 			}

			// 		}
			// 	}
			// },
			addTodo: function (todoText) {
				this.todos.push({
					todoText: todoText,
					completed: false
				});
				// this.displayTodos();
			},


			changeTodo: function (position, todoText) {
				this.todos[position].todoText = todoText;
				// this.displayTodos();
			},

			deleteTodo: function (position) {
				this.todos.splice(position, 1);
				// this.displayTodos();
			},

			toggleCompleted: function (position) {
				var todo = this.todos[position];
				todo.completed = !todo.completed;
				// this.displayTodos();
			},

			toggleAll: function () {
				var totalTodos = this.todos.length;
				var completedTodos = 0;
				// 	for (let i = 0; i < totalTodos; i++) {
				// 		if (this.todos[i].completed === true) {
				// 			completedTodos++;
				// 		}
				// 		if (completedTodos === totalTodos) {
				// 			for (let i = 0; i < totalTodos; i++) {
				// 				this.todos[i].completed = false;
				// 			}
				// 		} else {
				// 			for (let i = 0; i < totalTodos; i++) {
				// 				this.todos[i].completed = true;
				// 			}
				// 		}

				// 	}
				// --------------------------------------------------------
				// 	this.todos.forEach(function (todo) {
				// 		if (todo.completed === true)
				// 			completedTodos++
				// 	});

				// 	if (completedTodos === totalTodos) {
				// 		this.todos.forEach(function (todo) todo.completed = false;
				// 		});
				//  **** else {
				// 	this.todos.forEach(function (todo) {
				// 		todo.completed = true;
				// 	})
				// }

				this.todos.forEach(function (todo) {
					if (completedTodos === totalTodos) {
						todo.completed = false;
					} else {
						todo.completed = true;

					}
				});
			}
		};

		
		view.setupEventListners();
