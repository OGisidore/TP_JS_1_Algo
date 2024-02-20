
let div = document.querySelector('.output_result')
 div.innerHTML = '';
 let value = Math.floor(Math.random()*90)+1;
 console.log(value);


const set_event = {
        get_value: (event)=>{
            let parent = event.target.parentNode
            let champ = parent.querySelector('input')
            let input = Number(champ.value)
            
            // while (input === value) {
            //     div.classList.toggle('gagn')
            //     div.innerHTML = `numeros gangnant : ${value} <p>vous avez gagné </p> `   
                
            // }

            if (input ===value) {
                div.classList.toggle('gagn')
                div.innerHTML = `numeros gangnant : ${value} <p>vous avez gagné </p> `
                
            }else{ 
                div.classList.remove('gagn')
                div.innerHTML = `numeros gangnant : ${value}<p>vous avez perdu</p>`;
        }
        if(input > 90 || input < 0){
            div.innerHTML = ' entrer un nombre compris entre 1 et 90'

        }

            !input? div.innerHTML = 'entrer un nombre':null;
            champ.value = '';
            champ.focus();
            value = Math.floor(Math.random()*90)+1;

            
            
            console.log(value);

        }
}

const get_event = ()=>{
    document.querySelector('#btn').onclick = set_event.get_value
}