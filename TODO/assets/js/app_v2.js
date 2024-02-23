
window.onload = () => {
//  let tasks =  localStorage.getItem('tasks') || tasks;
  var tab = document.querySelector('#table tbody');

  const taskModal = new bootstrap.Modal(document.getElementById('taskModal'));
 
  const afficher_list = (newTasks=tasks) => {
    tab.innerHTML = ''
    newTasks.forEach((task, index) => {
      if (!is_updating){
        
      }
      const tr = document.createElement('tr');
      const th = document.createElement('th')
      const td = document.createElement('td')
      const td_2 = document.createElement('td')
      const td_3 = document.createElement('td')
      const td_4 = document.createElement('td')
      const td_5 = document.createElement('td')
      th.innerHTML = index + 1
      td.innerHTML = task.name;
      td_2.innerHTML = task.description;
      td_3.innerHTML = task.status;
      td_4.innerHTML = task.created_at
      td_5.innerHTML = task.updated_at
      tr.appendChild(th)
      tr.appendChild(td)
      tr.appendChild(td_2)

      tr.appendChild(td_3)
      tr.appendChild(td_4)
      tr.appendChild(td_5)

      const div = document.createElement('div');
      div.className = "d-flex gap-1"
      const button = document.createElement('button')
      button.className = "btn btn-success"
      button.innerText = 'View'
      const button_edit = document.createElement('button')
      button_edit.className = "btn btn-warning"
      button_edit.innerText = 'Edit'
      const button_delete = document.createElement('button')
      button_delete.className = "btn btn-danger"
      button_delete.innerText = 'Delete'
      div.appendChild(button)
      div.appendChild(button_edit)
      div.appendChild(button_delete)
      tr.appendChild(div)
      tab.appendChild(tr)

      button_delete.onclick = ()=> deleteTodo(task);
   

      
      // tab.innerHTML += `
      // <tr>
      //   <th scope="row">${index + 1}</th>
      //   <td>${task.name}</td>
      //   <td>${task.description}</td>
      //   <td>${task.status}</td>
      //   <td>${task.created_at}</td>
      //   <td>${task.updated_at}</td>
      //   <td>
      //   <div class='d-flex gap-1'>
      //     <button class='btn btn-success'> View </button>
      //     <button class='btn btn-warning'> Edit </button>
      //     <button class='btn btn-danger'> Delete </button>
      //   </div>
      //   </td>
      // </tr>
      // `
     
      
    });
   
    // return tab
    
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
  const deleteTodo = ({_id}) =>{
    // console.log(_id);
    newTasks = tasks.filter(todo => todo._id !== _id)
    // update 
    afficher_list(newTasks) 
  }

  const form = document.querySelector('form#taskForm')
  console.log(form);

  form.onsubmit = (event) =>{
    event.preventDefault()
    console.log("=================== Submit ===============");

    const newTask = {
      _id: Math.round(Math.random()*9999),
      name: form.elements['name'].value,
      description: form.elements['description'].value,
      status: Array.from(form.elements['status']).find((radio) => radio.checked)?.value,
      created_at: new Date(),
      is_updating : false,
      updated_at: null
    }

    addTodo(newTask)
    taskModal.hide()

  }

}
