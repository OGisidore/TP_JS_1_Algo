
window.onload = () => {
//  let tasks =  localStorage.getItem('tasks') || tasks;
  var tab = document.querySelector('#table tbody');

  
 
  const afficher_list = (newTasks=tasks) => {
    tab.innerHTML = ''
    newTasks.forEach((task, index) => {
      tab.innerHTML += `
      <tr>
        <th scope="row">${index + 1}</th>
        <td>${task.name}</td>
        <td>${task.description}</td>
        <td>${task.status}</td>
        <td>${task.created_at}</td>
        <td>${task.updated_at}</td>
        <td>
        <div class='d-flex gap-1'>
          <button class='btn btn-success'> View </button>
          <button class='btn btn-warning'> Edit </button>
          <button class='btn btn-danger'> Delete </button>
        </div>
        </td>
      </tr>
      `
     
      
    });
   
    return tab
    
  }
  afficher_list()

  const addTodo = (todo) =>{
    tasks.push(todo)
    afficher_list(tasks) 
  }
  const updateTodo = (todo) =>{
    // update 
    afficher_list(tasks) 
  }
  const deleteTodo = (todo) =>{
    // update 
    afficher_list(tasks) 
  }

  const form = document.querySelector('form#taskForm')
  console.log(form);

  form.onsubmit = (event) =>{
    event.preventDefault()
    console.log("=================== Submit ===============");

    const newTask = {
      // _id: M
      name: form.elements['name'].value,
      description: form.elements['description'].value,
      status: Array.from(form.elements['status']).find((radio) => radio.checked)?.value,
      created_at: new Date(),
      updated_at: null
    }

    addTodo(newTask)

  }

}
