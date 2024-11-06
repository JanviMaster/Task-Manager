 <h1>Task Manager App</h1>
  <p>A simple task management app built with React, allowing users to add, complete, and delete tasks.</p>
  <h2>Features</h2>
  <ul>
    <li><strong>Add New Task</strong>: Users can type a new task and add it to the task list.</li>
    <li><strong>Mark Task as Done</strong>: Users can mark a task as completed by clicking the "Done" button.</li>
    <li><strong>Delete Task</strong>: Users can delete tasks by clicking the "Delete" button.</li>
  </ul>
  <h2>Installation</h2>
  <ol>
    <li><strong>Clone the Repository</strong>:
      <pre><code>git clone https://github.com/your-username/task-manager.git</code></pre>
    </li>
    <li><strong>Navigate to the Project Directory</strong>:
      <pre><code>cd task-manager</code></pre>
    </li>
    <li><strong>Install Dependencies</strong>:
      <pre><code>npm install</code></pre>
    </li>
    <li><strong>Run the Application</strong>:
      <pre><code>npm start</code></pre>
    </li>
  </ol>

  <h2>Usage</h2>
  <ol>
    <li>Open the application in your browser at <code>http://localhost:3000</code>.</li>
    <li>Enter a task in the input field and click <strong>Add Task</strong> to add it to the list.</li>
    <li>Click <strong>Done</strong> to mark a task as completed.</li>
    <li>Click <strong>Delete</strong> to remove a task from the list.</li>
  </ol>

  <h2>Code Overview</h2>
  <p>This app consists of a single React functional component <code>TodoList</code> that maintains two state variables:</p>
  <ul>
    <li><strong>tasks</strong>: an array that stores the list of tasks.</li>
    <li><strong>newTask</strong>: a string that represents the current input for a new task.</li>
  </ul>

  <h3>Key Functions</h3>
  <ul>
    <li><strong>handleAddTask</strong>: Adds a new task to the list if the input is not empty.</li>
    <li><strong>handleDeleteTask</strong>: Deletes a task from the list based on its index.</li>
    <li><strong>handlecompleteTask</strong>: Marks a task as complete (currently implemented as a delete action).</li>
  </ul>
  <h2>Component Structure</h2>
  <p>The app layout includes:</p>
  <ul>
    <li>A title (<code>To-Do List</code>)</li>
    <li>An input field to type new tasks</li>
    <li>Buttons to add, mark as done, and delete tasks</li>
    <li>A list of tasks</li>
  </ul>
  <h2>Styles</h2>
  <p>The app is styled using the <code>App.css</code> file. You can customize the appearance of the app by modifying the styles in this file.</p>
  <p>Feel free to enhance the app by adding more features like task editing, task priority levels, or filters for completed tasks!</p>
