//Concevez un programme qui inverse une list


const reverse_list = (tab) =>{
    if(typeof tab !== 'object'){
        throw Error(' not found .only tab accepted')
    }
    if(tab.length === 0){
             throw Error('tableau vide')

    }
    return tab.reverse('')
}

try {
    var list = ['mon', 10, 'pou'];
    console.log( reverse_list(list));
} catch (error) {
    console.log('error :' + error.message);
    
}