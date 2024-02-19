



const set_event = {
    get_value: (event)=>{
        event.target.parent
        console.log( event.target.parent);

    }
}

const get_event = ()=>{
    document.querySelector('#btn').onclick = set_event.get_value
}