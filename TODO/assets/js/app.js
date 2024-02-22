
window.onload = () => {
//  let tasks =  localStorage.getItem('tasks') || tasks;
  var tab = document.querySelector('#table tbody');
  const afficher_list = () => {
    tab.innerHTML = ''
    tasks.forEach((task, index) => {
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

  const ajout = document.getElementById('ajout')
if (ajout) {
 
    const valide = ajout.querySelector('.modal-footer #valider')
    
   
      valide.onclick = ()=>{
       let nameinput = ajout.querySelector('form input#name').value
       
       let description = ajout.querySelector('form textarea#description').value
       
       let _date = ajout.querySelector('form input#date').value
       let date = new Date();
       let hours = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ` 
       
       _date += 'T' + hours;
      
       

       let inputs = ajout.querySelectorAll('form #status input')
       var value_status = ''
       
       inputs.forEach(element => {
       
        if (element.checked) {
          if (element.name == 'en_attente') {
             value_status = 'en attente'
          }else if(element.name == 'en_cours'){
             value_status = 'en cours'
          }else{
           value_status = 'a faire'
          }
         
          
          
        }
        
       });
      var newtask = {
        name : nameinput,
        description : description,
        status : value_status,
        created_at : _date,
        updated_at : null

      }
      tasks.push(newtask);
      localStorage.setItem('tasks', tasks);
      afficher_list()


      }
    
  

    // modalTitle.textContent = `New message to ${recipient}`
    // modalBodyInput.value = recipient
  
}

}
